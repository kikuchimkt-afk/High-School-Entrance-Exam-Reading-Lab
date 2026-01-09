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

    // Helper to process styled text (e.g. <u> tags)
    const renderStyledText = (text) => {
        if (!text) return null;
        const parts = text.split(/(<u>.*?<\/u>)/g);
        return parts.map((part, i) => {
            if (part.startsWith('<u>') && part.endsWith('</u>')) {
                return (
                    <span key={i} className={styles.underlined}>
                        {part.replace(/<\/?u>/g, '')}
                    </span>
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
                    <div className={styles.passageContent}>
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

                            // Check if this is a dialogue line (starts with "Name:")
                            const speakerMatch = paragraph.match(/^([A-Za-z. ]+):\s*(.*)/s);

                            if (speakerMatch) {
                                // Dialogue: render with flex layout
                                return (
                                    <div key={idx} className={styles.dialogueRow}>
                                        <span className={styles.speakerName}>{speakerMatch[1]}:</span>
                                        <span className={styles.dialogueContent}>{renderStyledText(speakerMatch[2])}</span>
                                    </div>
                                );
                            } else {
                                // Regular paragraph
                                return <p key={idx}>{renderStyledText(paragraph)}</p>;
                            }
                        })}
                    </div>
                    {/* Source citation at end of text */}
                    <div className={styles.sourceRef}>
                        {source && <span>{source}</span>}
                    </div>
                </div>

                {/* Right Column: Questions */}
                <div className={styles.rightColumn}>
                    {/* Footnotes at top of right column */}
                    <div className={styles.footnotes}>
                        <div className={styles.footnoteList}>
                            {footnotes.map((note, index) => (
                                <span key={index} className={styles.footnoteItem}>{note}</span>
                            ))}
                        </div>
                    </div>

                    <h3 className={styles.questionsHeader}>Questions</h3>
                    <div className={styles.questionsList}>
                        {questions.map((q, idx) => (
                            <div key={idx} className={styles.questionItem}>
                                <div className={styles.questionNumberBox}>
                                    <span className={styles.questionNumber}>{q.number}</span>
                                </div>
                                <div className={styles.questionContent}>
                                    <div className={styles.questionText}>
                                        {q.text.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {renderStyledText(line)}
                                                {i < q.text.split('\n').length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </div>
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
                                    if (q.answerLabel) {
                                        // Use explicit label (e.g. for fill-in-blanks)
                                        displayAnswer = q.answerLabel;
                                    } else if (q.answer !== undefined) {
                                        // Assume index based answer for choices
                                        displayAnswer = getOptionLabel(q.answer);
                                    }

                                    return (
                                        <span key={idx} className={styles.answerItem}>
                                            <span className={styles.ansNum}>{q.number}</span>
                                            <span className={styles.ansVal}>{displayAnswer}</span>
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
