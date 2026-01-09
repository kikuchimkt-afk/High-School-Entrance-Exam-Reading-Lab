
import React, { useState } from 'react';
import QuestionList from '../Shared/QuestionList';

const LeftPanel = ({ styles, selectedQuestionId, onSelectQuestion, mode, problem }) => {
    const [activeTab, setActiveTab] = useState('problem');
    const [highlightedSentences, setHighlightedSentences] = useState(new Set());
    const [popupInfo, setPopupInfo] = useState(null);

    const toggleHighlight = (sentenceKey) => { /* unused */ };

    const resetHighlights = () => {
        setHighlightedSentences(new Set());
        setPopupInfo(null);
    };

    const handleSentenceClick = (e, sentence, sentenceKey) => {
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
                setPopupInfo({
                    x: rect.left,
                    y: rect.bottom + 8,
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
        const closePopup = () => setPopupInfo(null);
        if (popupInfo) {
            window.addEventListener('click', closePopup);
        }
        return () => window.removeEventListener('click', closePopup);
    }, [popupInfo]);

    // Determine what to display based on mode
    // learning: uses activeTab
    // test: forces 'problem'
    // review: forces 'questions'
    let currentView = activeTab;
    if (mode === 'test') currentView = 'problem';
    if (mode === 'review') currentView = 'questions';

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

            {mode === 'test' && (
                <div className={styles.panelHeader}>
                    <h3>問題文</h3>
                </div>
            )}

            {mode === 'review' && (
                <div className={styles.panelHeader}>
                    <h3>設問</h3>
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
                                // Find if this paragraph is related to the selected question
                                const selectedQuestion = questions.find(q => q.id === selectedQuestionId);
                                const isRelated = selectedQuestion?.relatedParagraphs?.includes(pIdx);

                                // Split paragraph into sentences (basic regex, can be improved)
                                // Match sentences ending in punctuation, keeping punctuation
                                const sentences = paragraph.match(/[^.!?]+[.!?]+"?(\s+|$)/g) || [paragraph];

                                return (
                                    <div
                                        key={pIdx}
                                        className={`${styles.paragraphPanel} ${isRelated ? styles.highlighted : ''} `}
                                    >
                                        {mode === 'test' ? (
                                            <p>{paragraph}</p>
                                        ) : (
                                            <p>
                                                {sentences.map((sentence, sIdx) => {
                                                    const sentenceKey = `${pIdx} -${sIdx} `;
                                                    const isHighlighted = highlightedSentences.has(sentenceKey);

                                                    return (
                                                        <span
                                                            key={sIdx}
                                                            className={`${styles.sentence} ${isHighlighted ? styles.highlightedSentence : ''} `}
                                                            onClick={(e) => handleSentenceClick(e, sentence, sentenceKey)}
                                                        >
                                                            {sentence}
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
                        top: popupInfo.y
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
