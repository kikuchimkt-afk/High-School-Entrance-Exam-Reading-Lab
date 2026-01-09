import React, { useState } from 'react';
import QuestionList from '../Shared/QuestionList';

// Helper Component for Explanation Content
const ExplanationContent = ({ levelData, commonData, level, styles, setRelatedHighlights }) => {
    // Helper to parse reference links in detail text
    const renderDetailWithRefs = (text) => {
        if (!text) return null;
        // Split by <ref> tags
        const parts = text.split(/(<ref target="[^"]+">.*?<\/ref>)/g);
        return parts.map((part, i) => {
            const match = part.match(/<ref target="([^"]+)">(.*?)<\/ref>/);
            if (match) {
                const targets = match[1].split(',');
                const content = match[2];
                return (
                    <span
                        key={i}
                        className={styles.refLink}
                        onClick={() => setRelatedHighlights(new Set(targets))}
                        title="Click to highlight in text"
                    >
                        {content}
                    </span>
                );
            }
            return part; // Return text as-is (newlines handled by CSS white-space or react-newline-to-break?)
            // Current CSS .explanationSection p { white-space: pre-wrap? No, default normal }
            // But data contains \n. React renders \n as space in normal HTML unless pre-wrap.
            // Check styles: .explanationSection p doesn't have white-space: pre-wrap.
            // But user hasn't complained about newlines yet.
            // Let's just return part.
        });
    };

    return (
        <div className={styles.explanationBody}>
            <div className={styles.explanationSection}>
                <h4>要点</h4>
                <p>{renderDetailWithRefs(levelData?.summary) || '解説準備中'}</p>
            </div>
            <div className={styles.explanationSection}>
                <h4>詳細解説</h4>
                <p style={{ whiteSpace: 'pre-wrap' }}>{renderDetailWithRefs(levelData?.detail)}</p>
            </div>
            {levelData?.keywords && (
                <div className={styles.explanationSection}>
                    <h4>{level === 'beginner' ? 'こわくない単語帳' : '重要語彙'}</h4>
                    <ul className={styles.keywordList}>
                        {levelData.keywords.map((kw, i) => (
                            <li key={i}>{kw}</li>
                        ))}
                    </ul>
                </div>
            )}
            {commonData?.slashReading && (
                <div className={styles.explanationSection}>
                    <h4>スラッシュリーディング・直訳</h4>
                    <div className={styles.slashContent}>
                        {commonData.slashReading.map((item, i) => (
                            <div key={i} className={styles.slashItem}>
                                <p className={styles.slashText}>
                                    {item.text.split('/').map((chunk, j) => (
                                        <React.Fragment key={j}>
                                            {j > 0 && <span className={styles.slashDivider}>/</span>}
                                            <span className={styles.slashChunk}>{chunk.trim()}</span>
                                        </React.Fragment>
                                    ))}
                                </p>
                                <p className={styles.slashTranslation}>
                                    {item.translation.split('/').map((chunk, j) => (
                                        <React.Fragment key={j}>
                                            {j > 0 && <span className={styles.slashDivider}>/</span>}
                                            <span className={styles.translationChunk}>{chunk.trim()}</span>
                                        </React.Fragment>
                                    ))}
                                </p>
                                {item.freeTranslation && (
                                    <div className={styles.freeTranslationContainer}>
                                        <span className={styles.freeTranslationLabel}>意訳:</span>
                                        <p className={styles.freeTranslationText}>{item.freeTranslation}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {levelData?.notes && (
                <div className={styles.explanationSection}>
                    <h4>補足・誤答分析</h4>
                    <p className={styles.notesText}>{levelData.notes}</p>
                </div>
            )}
        </div>
    );
};

const RightPanel = ({ styles, selectedQuestionId, mode, onSelectQuestion, problem, setRelatedHighlights, relatedHighlights, level }) => {
    const [activeTab, setActiveTab] = useState('explanation');


    if (!problem) return <div className={styles.content}>Loading...</div>;

    const { explanations, questions } = problem;

    // Determine content based on mode
    let currentView = activeTab;
    if (mode === 'test') currentView = 'questions'; // In test mode, show questions
    if (mode === 'review') currentView = 'review_questions'; // Modified for accordion view

    const selectedQuestion = questions.find(q => q.id === selectedQuestionId);

    // Get common and specific explanation data
    // Use optional chaining carefully since explanations might be missing for new problems
    const rawExplanation = (selectedQuestionId && explanations) ? explanations[selectedQuestionId] : null;
    const commonData = rawExplanation ? rawExplanation.common : null;
    const levelData = rawExplanation ? rawExplanation[level] : null;
    const correct = rawExplanation ? rawExplanation.correct : null;

    return (
        <>
            {mode === 'learning' && (
                <div className={styles.tabs}>
                    <div className={styles.tabGroup}>
                        <button
                            className={`${styles.tab} ${activeTab === 'explanation' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('explanation')}
                        >
                            設問と解説
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'questions' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('questions')}
                        >
                            設問
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'create' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('create')}
                        >
                            類題作成
                        </button>
                    </div>
                </div >
            )}

            {
                mode === 'test' && (
                    <div className={styles.panelHeader}>
                        <h3>設問</h3>
                    </div>
                )
            }

            {
                mode === 'review' && (
                    <div className={styles.panelHeader}>
                        <h3>解説</h3>
                    </div>
                )
            }



            <div className={styles.content}>
                {currentView === 'explanation' && (
                    <div className={`${styles.explanationContainer} ${selectedQuestionId ? styles.explanationFrame : ''}`}>
                        {!selectedQuestionId ? (
                            mode === 'review' ? (
                                <div className={styles.emptyState}>
                                    <p>左側の設問パネルから問題を選択してください</p>
                                </div>
                            ) : (
                                <div className={styles.emptyState}>
                                    <p>設問を選択して解説を表示してください</p>
                                </div>
                            )
                        ) : (
                            <>
                                <div className={styles.explanationHeader}>
                                    <h3>Q{selectedQuestion?.number} 解説</h3>

                                    <span className={styles.correctBadge}>正解: {correct}</span>
                                </div>
                                <ExplanationContent
                                    levelData={levelData}
                                    commonData={commonData}
                                    level={level}
                                    styles={styles}
                                    setRelatedHighlights={setRelatedHighlights}
                                />
                            </>
                        )}
                    </div>
                )}
                {currentView === 'review_questions' && (
                    <div className={styles.reviewList}>
                        {questions.map((q, idx) => {
                            const isSelected = selectedQuestionId === q.id;
                            const rawEx = explanations ? explanations[q.id] : null;
                            const lData = rawEx ? rawEx[level] : null;
                            const cData = rawEx ? rawEx.common : null;
                            const correct = rawEx ? rawEx.correct : null;

                            return (
                                <div key={q.id} className={styles.reviewItem}>
                                    <div
                                        className={`${styles.reviewQuestionHeader} ${isSelected ? styles.activeQuestion : ''}`}
                                        onClick={() => onSelectQuestion(isSelected ? null : q.id)}
                                    >
                                        <span className={styles.qBadge}>Q{q.number || idx + 1}</span>
                                        <div style={{ flex: 1 }}>
                                            <p className={styles.qText}>{q.text}</p>
                                            {q.imageUrl && (
                                                <img
                                                    src={q.imageUrl}
                                                    alt={`Question ${q.number}`}
                                                    className={styles.questionImage}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className={styles.reviewOptions}>
                                        <ul className={styles.optionList}>
                                            {q.options.map((opt, i) => <li key={i}>{opt}</li>)}
                                        </ul>
                                    </div>
                                    {isSelected && (
                                        <div className={styles.reviewExplanation}>
                                            <div className={styles.explanationHeader}>
                                                <span className={styles.correctBadge}>正解: {correct}</span>
                                            </div>
                                            <ExplanationContent
                                                levelData={lData}
                                                commonData={cData}
                                                level={level}
                                                styles={styles}
                                                setRelatedHighlights={setRelatedHighlights}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
                {/* Placeholder for Create/Instruction Manual Tab */}
                {currentView === 'create' && (
                    <div className={styles.emptyState}>
                        <p>指導者用資料作成・類題作成機能は準備中です。</p>
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
                {currentView === 'create' && (
                    <div>
                        <h2>Create Similar Problem</h2>
                        <p>Placeholder for creation tools...</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default RightPanel;
