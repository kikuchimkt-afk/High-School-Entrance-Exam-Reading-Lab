
import React, { useState } from 'react';
import QuestionList from '../Shared/QuestionList';

const LeftPanel = ({ styles, selectedQuestionId, onSelectQuestion, mode, problem, relatedHighlights, setRelatedHighlights }) => {
    const [activeTab, setActiveTab] = useState('problem');
    const [highlightedSentences, setHighlightedSentences] = useState(new Set());
    const [popupInfo, setPopupInfo] = useState(null);

    const toggleHighlight = (sentenceKey) => { /* unused */ };

    const resetHighlights = () => {
        setHighlightedSentences(new Set());
        setPopupInfo(null);
    };

    const handleSentenceClick = (e, sentence, sentenceKey) => {
        // Clear related highlights when clicking a sentence
        if (setRelatedHighlights) setRelatedHighlights(new Set());

        if (mode === 'test') return; // Disable in test mode
        // For review mode, maybe we allow it? Let's assume yes for now as it helps understanding
        // Logic remains same
        e.stopPropagation();

        if (highlightedSentences.has(sentenceKey)) {
            // Already highlighted
            if (popupInfo?.key === sentenceKey) {
                // 3rd Click: Popup is already open for this sentence -> Reset (Unhighlight & Close)
                const newSet = new Set(highlightedSentences);
                newSet.delete(sentenceKey);
                setHighlightedSentences(newSet);
                setPopupInfo(null);
            } else {
                // 2nd Click (or clicking a highlighted sentence without popup): Show Popup
                const [pIdx, sIdx] = sentenceKey.split('-').map(Number);
                const translation = problem.sentenceTranslations?.[pIdx]?.[sIdx]
                    || "翻訳データが見つかりません。";

                const rect = e.target.getBoundingClientRect();
                const spaceBelow = window.innerHeight - rect.bottom;
                const showAbove = spaceBelow < 180; // Threshold for showing above

                setPopupInfo({
                    x: rect.left,
                    y: showAbove ? rect.top : rect.bottom,
                    showAbove,
                    content: translation,
                    key: sentenceKey
                });
            }
        } else {
            // 1st Click: Not highlighted -> Highlight it
            const newSet = new Set(highlightedSentences);
            newSet.add(sentenceKey);
            setHighlightedSentences(newSet);
            // Also close any existing popup to keep it clean? Or leave it?
            // "他の部分をクリックしたらポップアップは消える" implies clicking a new sentence (which is "other part" relative to the old one) should probably close the old popup.
            setPopupInfo(null);
        }
    };

    if (!problem) return <div className={styles.content}>Loading...</div>;

    const { title, content, questions } = problem;

    // Close popup when clicking elsewhere
    React.useEffect(() => {
        const resetAll = () => {
            setPopupInfo(null);
            setHighlightedSentences(new Set());
        };
        if (popupInfo) {
            window.addEventListener('click', resetAll);
        }
        return () => window.removeEventListener('click', resetAll);
    }, [popupInfo]);

    // Auto-popup and Clear logic
    React.useEffect(() => {
        // Auto-show popup if there are related highlights
        if (relatedHighlights && relatedHighlights.size > 0) {
            const firstKey = Array.from(relatedHighlights)[0];
            const [pIdx, sIdx] = firstKey.split('-').map(Number);
            const translation = problem.sentenceTranslations?.[pIdx]?.[sIdx];

            if (translation) {
                // Wait for render/layout
                setTimeout(() => {
                    const element = document.getElementById(`sentence-${firstKey}`);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const spaceBelow = window.innerHeight - rect.bottom;
                        const showAbove = spaceBelow < 180;
                        setPopupInfo({
                            x: rect.left,
                            y: showAbove ? rect.top : rect.bottom,
                            showAbove,
                            content: translation,
                            key: firstKey
                        });
                    }
                }, 10);
            }
        }

        // Click listener to clear highlights (delayed by 50ms)
        const clearRelated = () => {
            if (setRelatedHighlights) setRelatedHighlights(new Set());
        };

        let timer;
        if (relatedHighlights && relatedHighlights.size > 0) {
            timer = setTimeout(() => {
                window.addEventListener('click', clearRelated);
            }, 50);
        }

        return () => {
            if (timer) clearTimeout(timer);
            window.removeEventListener('click', clearRelated);
        };
    }, [relatedHighlights, setRelatedHighlights, problem]);

    // Determine what to display based on mode
    // learning: uses activeTab
    // test: forces 'problem'
    // review: forces 'questions'
    let currentView = activeTab;
    if (mode === 'test') currentView = 'problem';
    if (mode === 'review') currentView = 'problem';

    return (
        <>
            {mode === 'learning' && (
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'problem' ? styles.activeTab : ''} `}
                        onClick={() => setActiveTab('problem')}
                    >
                        問題
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'questions' ? styles.activeTab : ''} `}
                        onClick={() => setActiveTab('questions')}
                    >
                        設問
                    </button>
                </div>
            )}

            {(mode === 'test' || mode === 'review') && (
                <div className={styles.panelHeader}>
                    <h3>問題文</h3>
                </div>
            )}

            <div className={styles.content}>
                {currentView === 'problem' && (
                    <div className={styles.problemContainer}>
                        {/* Show tools if there are highlights or a selected question */}
                        {(highlightedSentences.size > 0 || selectedQuestionId) && (
                            <div className={styles.toolsArea}>
                                {selectedQuestionId && (
                                    <button
                                        className={styles.resetBtn}
                                        onClick={() => onSelectQuestion(null)}
                                        style={{ marginRight: '8px', backgroundColor: '#e7f5ff', color: '#1971c2', borderColor: '#74c0fc' }}
                                    >
                                        パラグラフ強調解除
                                    </button>
                                )}
                                {highlightedSentences.size > 0 && (
                                    <button className={styles.resetBtn} onClick={resetHighlights}>
                                        マーカーを全て消す
                                    </button>
                                )}
                            </div>
                        )}
                        <h2 className={styles.problemTitle}>{title}</h2>
                        <div className={styles.problemText}>
                            {content.split(/\n+/).filter(p => p.trim().length > 0).map((paragraph, pIdx) => {
                                // Check for Image tag [IMAGE:path]
                                const imageMatch = paragraph.match(/^\[IMAGE:(.+)\]$/);
                                if (imageMatch) {
                                    return (
                                        <img
                                            key={pIdx}
                                            src={imageMatch[1].trim()}
                                            alt="Content illustration"
                                            className={styles.contentImage}
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

                                // Find if this paragraph is related to the selected question
                                const selectedQuestion = questions.find(q => q.id === selectedQuestionId);
                                const isRelated = problem.genre !== '対話' && selectedQuestion?.relatedParagraphs?.includes(pIdx);

                                // DIALOGUE DETECTION
                                // Check if paragraph starts with "Name:" pattern (e.g. "Hana:", "Mr. Green:")
                                const speakerMatch = processingParagraph.match(/^([A-Za-z. ]+):/);
                                const isDialogue = !!speakerMatch;

                                // Split paragraph into sentences, being careful not to split on abbreviations or inside <u> tags
                                // First, temporarily replace <u>...</u> content and abbreviations to protect them
                                let protectedPara = processingParagraph;
                                const placeholders = [];

                                // Protect underline tags: SKIPPED to allow splitting inside.


                                // Protect common abbreviations (Mr., Mrs., Ms., Dr., U.S., U.K., etc.)
                                const abbreviations = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.', 'U.S.', 'U.K.', 'e.g.', 'i.e.', 'a.m.', 'p.m.', 'A.M.', 'P.M.'];
                                abbreviations.forEach(abbr => {
                                    const regex = new RegExp(abbr.replace(/\./g, '\\.'), 'g');
                                    protectedPara = protectedPara.replace(regex, (match) => {
                                        const placeholder = `__PLACEHOLDER_${placeholders.length}__`;
                                        placeholders.push(match);
                                        return placeholder;
                                    });
                                });

                                // Ensure sentence split happens even if sentence ends with </u> by adding a space
                                protectedPara = protectedPara.replace(/([.!?])<\/u>/g, '$1 </u>');

                                let sentences = protectedPara.match(/[^.!?]+[.!?]+['"]*(\s+|$)/g) || [protectedPara];

                                // Balance <u> tags across sentences
                                let isUnderlineOpen = false;
                                sentences = sentences.map(s => {
                                    // Count occurrences in this segment
                                    const openCount = (s.match(/<u>/g) || []).length;
                                    const closeCount = (s.match(/<\/u>/g) || []).length;

                                    let balanced = s;

                                    // If we were open from previous, prepend <u>
                                    if (isUnderlineOpen) {
                                        balanced = '<u>' + balanced;
                                    }

                                    // Calculate net open tags to decide if we need to close
                                    const totalOpen = (isUnderlineOpen ? 1 : 0) + openCount;
                                    const totalClose = closeCount;

                                    if (totalOpen > totalClose) {
                                        balanced = balanced + '</u>';
                                        isUnderlineOpen = true;
                                    } else {
                                        isUnderlineOpen = false;
                                    }

                                    return balanced;
                                });

                                // Restore all placeholders
                                sentences = sentences.map(s => {
                                    let restored = s;
                                    placeholders.forEach((original, i) => {
                                        restored = restored.replace(`__PLACEHOLDER_${i}__`, original);
                                    });
                                    return restored;
                                });

                                const renderStyledText = (text) => {
                                    // Handle <u>...</u> tags
                                    const parts = text.split(/(<u>.*?<\/u>)/g);
                                    return parts.map((part, i) => {
                                        if (part.startsWith('<u>') && part.endsWith('</u>')) {
                                            return <span key={i} className={styles.underlined}>{part.replace(/<\/?u>/g, '')}</span>;
                                        }

                                        // Handle Speaker Name (only if it's the start of the text and we are in dialogue mode)
                                        // Actually, simpler to handle speaker bolding globally if it matches pattern at start
                                        if (i === 0 && text.match(/^([A-Za-z. ]+):/)) {
                                            const match = text.match(/^([A-Za-z. ]+):(.*)/);
                                            if (match) {
                                                return (
                                                    <React.Fragment key={i}>
                                                        <span className={styles.speakerName}>{match[1]}:</span>
                                                        {renderStyledText(match[2]) /* Recurse for rest of string? No, simple return here */}
                                                    </React.Fragment>
                                                );
                                            }
                                        }
                                        return part;
                                    });
                                };

                                return (
                                    <div
                                        key={pIdx}
                                        className={`${styles.paragraphPanel} ${isRelated ? styles.highlighted : ''} ${isDialogue ? styles.dialogueParagraph : ''}`}
                                    >
                                        {isDialogue ? (
                                            // Dialogue: use flex layout with speaker column and content column
                                            <div className={styles.dialogueRow}>
                                                <div className={styles.speakerName}>
                                                    {speakerMatch ? speakerMatch[1] + ':' : ''}
                                                </div>
                                                <div className={styles.dialogueContent}>
                                                    {floatImageInfo && (
                                                        <img
                                                            src={floatImageInfo.src}
                                                            alt={floatImageInfo.alt}
                                                            style={{
                                                                float: 'right',
                                                                maxWidth: '220px',
                                                                marginLeft: '16px',
                                                                marginBottom: '8px',
                                                                border: '1px solid #eee',
                                                                borderRadius: '4px'
                                                            }}
                                                        />
                                                    )}
                                                    {sentences.map((sentence, sIdx) => {
                                                        const sentenceKey = `${pIdx}-${sIdx}`;
                                                        const isHighlighted = mode !== 'test' && highlightedSentences.has(sentenceKey);
                                                        const isRelated = relatedHighlights?.has(sentenceKey);

                                                        // Remove speaker name from first sentence for dialogue
                                                        let textForSentence = sentence;
                                                        if (sIdx === 0 && speakerMatch) {
                                                            textForSentence = sentence.replace(/^[A-Za-z. ]+:\s*/, '');
                                                        }

                                                        // Parse underline tags
                                                        const parseRichText = (txt) => {
                                                            const parts = txt.split(/(<u>.*?<\/u>)/g);
                                                            return parts.map((part, k) => {
                                                                if (part.startsWith('<u>') && part.endsWith('</u>')) {
                                                                    return <span key={k} className={styles.underlined}>{part.replace(/<\/?u>/g, '')}</span>;
                                                                }
                                                                return part;
                                                            });
                                                        };

                                                        return (
                                                            <span
                                                                id={`sentence-${sentenceKey}`}
                                                                key={sIdx}
                                                                className={`${styles.sentence} ${isHighlighted ? styles.highlightedSentence : ''} ${isRelated ? styles.relatedSentence : ''}`}
                                                                onClick={(e) => mode !== 'test' && handleSentenceClick(e, sentence, sentenceKey)}
                                                                style={{ cursor: mode === 'test' ? 'default' : 'pointer', whiteSpace: 'pre-wrap' }}
                                                            >
                                                                {parseRichText(textForSentence)}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ) : (
                                            // Regular paragraph
                                            <p>
                                                {floatImageInfo && (
                                                    <img
                                                        src={floatImageInfo.src}
                                                        alt={floatImageInfo.alt}
                                                        style={{
                                                            float: 'right',
                                                            maxWidth: '220px',
                                                            marginLeft: '16px',
                                                            marginBottom: '8px',
                                                            border: '1px solid #eee',
                                                            borderRadius: '4px'
                                                        }}
                                                    />
                                                )}
                                                {sentences.map((sentence, sIdx) => {
                                                    const sentenceKey = `${pIdx}-${sIdx}`;
                                                    const isHighlighted = mode !== 'test' && highlightedSentences.has(sentenceKey);
                                                    const isRelated = relatedHighlights?.has(sentenceKey);

                                                    const parseRichText = (txt) => {
                                                        const parts = txt.split(/(<u>.*?<\/u>)/g);
                                                        return parts.map((part, k) => {
                                                            if (part.startsWith('<u>') && part.endsWith('</u>')) {
                                                                return <span key={k} className={styles.underlined}>{part.replace(/<\/?u>/g, '')}</span>;
                                                            }
                                                            return part;
                                                        });
                                                    };

                                                    return (
                                                        <span
                                                            id={`sentence-${sentenceKey}`}
                                                            key={sIdx}
                                                            className={`${styles.sentence} ${isHighlighted ? styles.highlightedSentence : ''} ${isRelated ? styles.relatedSentence : ''}`}
                                                            onClick={(e) => mode !== 'test' && handleSentenceClick(e, sentence, sentenceKey)}
                                                            style={{ cursor: mode === 'test' ? 'default' : 'pointer', whiteSpace: 'pre-wrap' }}
                                                        >
                                                            {parseRichText(sentence)}
                                                        </span>
                                                    );
                                                })}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                            {problem.source && (
                                <div className={styles.sourceText}>
                                    {problem.source}
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {currentView === 'questions' && (
                    <QuestionList
                        styles={styles}
                        questions={questions}
                        selectedQuestionId={selectedQuestionId}
                        onSelectQuestion={onSelectQuestion}
                        footnotes={problem.footnotes}
                    />
                )}
            </div>
            {popupInfo && (
                <div
                    className={styles.popupContainer}
                    style={{
                        position: 'fixed',
                        left: Math.min(popupInfo.x, window.innerWidth - 320), // Prevent overflow right
                        top: popupInfo.showAbove ? 'auto' : popupInfo.y + 8,
                        bottom: popupInfo.showAbove ? (window.innerHeight - popupInfo.y + 8) : 'auto'
                    }}
                    onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
                >
                    <div className={styles.popupContent}>{popupInfo.content}</div>
                </div>
            )}
        </>
    );
};

export default LeftPanel;
