import React from 'react';
import styles from './print.module.css';

// Helper to get Katakana label
const getOptionLabel = (index) => {
    const labels = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ'];
    return labels[index] || (index + 1).toString();
};

const PrintLayout = ({ problem }) => {
    if (!problem) return <div style={{ padding: '2cm', color: 'red' }}>エラー：問題データが見つかりません (ID mismatch?)</div>;

    const { title, content, questions = [], source, footnotes = [] } = problem;

    if (!content) return <div style={{ padding: '2cm', color: 'red' }}>エラー：問題本文 (content) がありません</div>;

    // Dynamic sizing calculation based on content and question count
    const paragraphCount = content.split(/\n+/).filter(p => p.trim().length > 0).length;
    const totalQuestions = questions.length;
    const contentLength = content.length;

    // Calculate optimal font size: more questions = larger passage font to balance columns
    // Base: 9pt, adjust up to 11pt based on question density
    let passageFontSize = 9;
    let passageLineHeight = 1.4;

    if (totalQuestions >= 6 && contentLength < 2000) {
        passageFontSize = 10;
        passageLineHeight = 1.55;
    }
    if (totalQuestions >= 5 && contentLength < 1500) {
        passageFontSize = 10.5;
        passageLineHeight = 1.65;
    }
    if (totalQuestions >= 6 && contentLength < 1200) {
        passageFontSize = 11;
        passageLineHeight = 1.75;
    }

    const passageStyle = {
        fontSize: `${passageFontSize}pt`,
        lineHeight: passageLineHeight
    };

    // Helper to process styled text (e.g. <u> tags, **bold**)
    const renderStyledText = (text) => {
        if (!text) return null;
        // Split by <u> and **bold**
        const parts = text.split(/(<u>.*?<\/u>|\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('<u>') && part.endsWith('</u>')) {
                return (
                    <span key={i} className={styles.underlined}>
                        {part.replace(/<\/?u>/g, '')}
                    </span>
                );
            }
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <strong key={i} style={{ fontWeight: 'bold' }}>
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            return part;
        });
    };

    return (
        <div className={styles.printContainer}>
            {/* Header / Problem ID */}
            <div className={styles.pageHeader}>
                <div className={styles.problemId}>{problem.number}</div>
            </div>

            <div className={styles.printBody}>
                {/* Left Column: Passage */}
                <div className={styles.leftColumn}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.passageContent} style={passageStyle}>
                        {content.split(/\n+/).filter(p => p.trim().length > 0).map((paragraph, idx) => {
                            // Check for Image tag
                            const imageMatch = paragraph.match(/^\[IMAGE:(.+)\]$/);
                            if (imageMatch) {
                                return (
                                    <img
                                        key={idx}
                                        src={imageMatch[1].trim()}
                                        className={styles.contentImage}
                                        alt=""
                                    />
                                );
                            }

                            // Extract inline markdown image for floating right
                            // Pattern: ![alt](src)
                            const inlineImageRegex = /!\[(.*?)\]\((.*?)\)/;
                            const inlineMatch = paragraph.match(inlineImageRegex);
                            let floatImageInfo = null;
                            let processingParagraph = paragraph;

                            if (inlineMatch) {
                                floatImageInfo = {
                                    alt: inlineMatch[1],
                                    src: inlineMatch[2]
                                };
                                // Remove the image tag from the text to be processed
                                processingParagraph = processingParagraph.replace(inlineImageRegex, '').trim();
                            }

                            // Check if this is a dialogue line (starts with "Name:")
                            const speakerMatch = processingParagraph.match(/^([A-Za-z. ]+):\s*(.*)/s);

                            if (speakerMatch) {
                                // Dialogue: render with flex layout
                                return (
                                    <div key={idx} className={styles.dialogueRow}>
                                        <span className={styles.speakerName}>{speakerMatch[1]}:</span>
                                        <span className={styles.dialogueContent}>
                                            {floatImageInfo && (
                                                <img
                                                    src={floatImageInfo.src}
                                                    alt={floatImageInfo.alt}
                                                    style={{
                                                        float: 'right',
                                                        maxWidth: '30%',
                                                        marginLeft: '12px',
                                                        marginBottom: '8px',
                                                        border: '1px solid #eee'
                                                    }}
                                                />
                                            )}
                                            {renderStyledText(speakerMatch[2])}
                                        </span>
                                    </div>
                                );
                            } else {
                                // Regular paragraph
                                return (
                                    <p key={idx}>
                                        {floatImageInfo && (
                                            <img
                                                src={floatImageInfo.src}
                                                alt={floatImageInfo.alt}
                                                style={{
                                                    float: 'right',
                                                    maxWidth: '30%',
                                                    marginLeft: '12px',
                                                    marginBottom: '8px',
                                                    border: '1px solid #eee'
                                                }}
                                            />
                                        )}
                                        {renderStyledText(processingParagraph)}
                                    </p>
                                );
                            }
                        })}
                    </div>
                    {/* Source citation at end of text */}
                    <div className={styles.sourceRef}>
                        {source && <span>{source}</span>}
                    </div>
                    {/* Footnotes at bottom of left column */}
                    <div className={styles.footnotes}>
                        <div className={styles.footnoteList}>
                            {footnotes.map((note, index) => (
                                <span key={index} className={styles.footnoteItem}>{note}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Questions */}
                <div className={styles.rightColumn}>
                    <h3 className={styles.questionsHeader}>Questions</h3>
                    <div className={styles.questionsList}>
                        {questions.map((q, idx) => (
                            <div key={idx} className={styles.questionItem}>
                                <div className={styles.questionNumberBox}>
                                    <span className={styles.questionNumber}>{q.number || `(${idx + 1})`}</span>
                                </div>
                                <div className={styles.questionContent}>
                                    <div className={styles.questionText}>
                                        {q.text.split('\n').map((line, i) => {
                                            const imageMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
                                            if (imageMatch) {
                                                // Parse for scale in alt: "AltText|1.2"
                                                let altText = imageMatch[1];
                                                let scale = 1.0;
                                                if (altText.includes('|')) {
                                                    const parts = altText.split('|');
                                                    altText = parts[0];
                                                    const scaleStr = parts[1];
                                                    if (!isNaN(parseFloat(scaleStr))) {
                                                        scale = parseFloat(scaleStr);
                                                    }
                                                }

                                                return (
                                                    <React.Fragment key={i}>
                                                        <img
                                                            src={imageMatch[2]}
                                                            alt={altText}
                                                            className={styles.questionInnerImage}
                                                            style={{
                                                                maxWidth: '80%',
                                                                maxHeight: '350px',
                                                                objectFit: 'contain',
                                                                marginTop: '8px',
                                                                marginBottom: '8px',
                                                                transform: `scale(${scale})`,
                                                                transformOrigin: 'top left'
                                                            }}
                                                        />
                                                        <br />
                                                    </React.Fragment>
                                                );
                                            }
                                            return (
                                                <React.Fragment key={i}>
                                                    {renderStyledText(line)}
                                                    {i < q.text.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                    {q.diagram_text && (
                                        <div className={styles.memoContainer}>
                                            <div className={styles.memoHeader}>📝 SUMMARY MEMO</div>
                                            <p className={styles.memoContent}>{q.diagram_text}</p>
                                        </div>
                                    )}
                                    {q.imageUrl && (
                                        <img src={q.imageUrl} className={styles.questionImage} alt="Question" />
                                    )}
                                    {q.options && q.options.length > 0 ? (
                                        <div className={styles.optionsList}>
                                            {q.options.map((opt, oIdx) => {
                                                // Check if text starts with Katakana label + space (e.g. "ア ")
                                                // If so, strip it so we don't double label.
                                                // Simple header check:
                                                let cleanOpt = opt;
                                                const labelPrefix = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ'][oIdx];
                                                if (opt.startsWith(labelPrefix + ' ') || opt.startsWith(labelPrefix + '　')) {
                                                    cleanOpt = opt.substring(2);
                                                }

                                                return (
                                                    <div key={oIdx} className={styles.optionItem}>
                                                        <span className={styles.optionIndex}>{getOptionLabel(oIdx)}</span>
                                                        <span className={styles.optionText}>{cleanOpt}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        q.answerType === 'choice' ? null : (
                                            <div className={styles.writeInSpace}>
                                                {/* No answer line needed */}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Answers Section - Moved to end of questions list */}
                    <div className={styles.answersSection}>
                        <div className={styles.answersSeparator}></div>
                        <div className={styles.answerBox}>
                            <span className={styles.answersLabel}>正解</span>
                            <div className={styles.answersGrid}>
                                {questions.map((q, idx) => {
                                    // Determine answer display
                                    let displayAnswer = '';
                                    if (q.sampleAnswers && q.sampleAnswers.length > 0) {
                                        displayAnswer = `(解答例) ${q.sampleAnswers[0].text}`;
                                    } else if (q.answerLabel) {
                                        // Use explicit label (e.g. for fill-in-blanks)
                                        displayAnswer = q.answerLabel;
                                    } else if (q.answer !== undefined) {
                                        // Assume index based answer for choices
                                        displayAnswer = getOptionLabel(q.answer);
                                    }

                                    return (
                                        <span key={idx} className={styles.answerItem} style={{ flexBasis: displayAnswer.length > 20 ? '100%' : 'auto' }}>
                                            <span className={styles.ansNum}>{q.number || `(${idx + 1})`}</span>
                                            <span className={styles.ansVal}>{renderStyledText(displayAnswer)}</span>
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className={styles.pageFooter}>
                {/* Empty left side if source moved up, or maybe keep 'Type' info? User said source at end of text. */}
                <div className={styles.footerLeft}></div>
                <div className={styles.footerRight}>
                    {/* Answers moved up */}
                </div>
            </div>
        </div>
    );
};

export default PrintLayout;
