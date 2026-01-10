import React, { useState } from 'react';
import QuestionList from '../Shared/QuestionList';

// Modal Component for Summary
const SummaryModal = ({ problem, onClose }) => {
    if (!problem) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '8px',
                maxWidth: '600px',
                width: '90%',
                maxHeight: '80vh',
                overflowY: 'auto',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }} onClick={e => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
                    <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#333' }}>{problem.title} 要約・解説ポイント</h2>
                    <button
                        onClick={onClose}
                        style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#888' }}
                    >
                        ×
                    </button>
                </div>

                <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '1rem', color: '#228be6', marginBottom: '8px', borderLeft: '4px solid #228be6', paddingLeft: '8px' }}>
                        日本語での本文要約
                    </h3>
                    <p style={{ lineHeight: '1.6', fontSize: '0.95rem', color: '#444', whiteSpace: 'pre-wrap' }}>
                        {problem.summary?.japanese || "要約データは準備中です。"}
                    </p>
                </div>

                <div>
                    <h3 style={{ fontSize: '1rem', color: '#fa5252', marginBottom: '8px', borderLeft: '4px solid #fa5252', paddingLeft: '8px' }}>
                        講師への設問解説ポイント
                    </h3>
                    <div style={{ lineHeight: '1.6', fontSize: '0.95rem', color: '#444' }}>
                        {problem.summary?.notes ? (
                            <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                {problem.summary.notes.map((note, idx) => (
                                    <li key={idx} style={{ marginBottom: '4px' }}>{note}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>解説ポイントは準備中です。</p>
                        )}
                    </div>
                </div>

                <div style={{ marginTop: '24px', textAlign: 'right' }}>
                    <button
                        onClick={onClose}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#e9ecef',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            color: '#495057'
                        }}
                    >
                        閉じる
                    </button>
                </div>
            </div>
        </div>
    );
};

// Helper Component for Explanation Content
const ExplanationContent = ({ levelData, commonData, level, styles, setRelatedHighlights }) => {
    // Helper to parse reference links in detail text
    const renderDetailWithRefs = (text) => {
        if (!text) return null;
        // Split by <ref>, <span> (colored), <b>, <strong>, <br> tags
        const parts = text.split(/(<ref target="[^"]+">.*?<\/ref>|<span style="[^"]+">.*?<\/span>|<b>.*?<\/b>|<strong>.*?<\/strong>|<br\s*\/?>)/g);

        return parts.map((part, i) => {
            // Handle <ref> tags
            const refMatch = part.match(/<ref target="([^"]+)">(.*?)<\/ref>/);
            if (refMatch) {
                const targets = refMatch[1].split(',');
                const content = refMatch[2];
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

            // Handle colored spans (specifically for English text in explanations)
            const spanMatch = part.match(/<span style="color: (#[0-9a-fA-F]{3,6});?">(.*?)<\/span>/);
            if (spanMatch) {
                const color = spanMatch[1];
                const content = spanMatch[2];
                return (
                    <span key={i} style={{ color, fontWeight: 'bold' }}>
                        {content}
                    </span>
                );
            }

            // Handle <b> and <strong> tags
            if (part.startsWith('<b>') || part.startsWith('<strong>')) {
                const content = part.replace(/<\/?(b|strong)>/g, '');
                return <strong key={i}>{content}</strong>;
            }

            // Handle <br> tags
            if (part.match(/^<br\s*\/?>$/)) {
                return <br key={i} />;
            }

            // Return plain text
            return part;
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
                        {typeof commonData.slashReading === 'string' ? (
                            // Handle simple string format (English\nJapanese)
                            <div className={styles.slashItem}>
                                <p style={{ whiteSpace: 'pre-wrap' }}>{commonData.slashReading}</p>
                            </div>
                        ) : (
                            // Handle array of objects format [{text, translation}]
                            commonData.slashReading.map((item, i) => (
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
                            ))
                        )}
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
    const [showSummaryModal, setShowSummaryModal] = useState(false);


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
                    <div className={styles.panelHeader} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3>解説</h3>
                        {/* Summary Button for Exam Problems only */}
                        {problem?.badges?.includes('入試問題') && (
                            <button
                                onClick={() => setShowSummaryModal(true)}
                                style={{
                                    padding: '6px 12px',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #dee2e6',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    color: '#495057',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontWeight: 'bold',
                                    transition: 'background-color 0.2s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                            >
                                📝 要約
                            </button>
                        )}
                    </div>
                )
            }



            <div className={styles.content}>
                {currentView === 'explanation' && (
                    <div className={`${styles.explanationContainer} ${(selectedQuestionId && mode === 'review') ? styles.explanationFrame : ''}`}>
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

                                    <div className={styles.correctBadge} style={{ whiteSpace: 'pre-wrap', display: 'inline-block' }}>
                                        <span style={{ fontWeight: 'bold' }}>正解: </span>
                                        {correct && correct.split(/<br\s*\/?>|\n/).map((line, i) => (
                                            <React.Fragment key={i}>
                                                {i > 0 && <br />}
                                                {line}
                                            </React.Fragment>
                                        ))}
                                    </div>
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
                                <div key={q.id} className={`${styles.reviewItem} ${isSelected ? styles.selectedReviewItem : ''}`}>
                                    <div
                                        className={`${styles.reviewQuestionHeader} ${isSelected ? styles.activeQuestion : ''}`}
                                        onClick={() => onSelectQuestion(isSelected ? null : q.id)}
                                    >
                                        <span className={styles.qBadge}>Q{q.number || idx + 1}</span>
                                        <div style={{ flex: 1 }}>
                                            <p className={styles.qText} style={{ whiteSpace: 'pre-wrap' }}>
                                                {q.text.split('\n').map((line, i) => {
                                                    const imageMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
                                                    if (imageMatch) {
                                                        return (
                                                            <React.Fragment key={i}>
                                                                <img
                                                                    src={imageMatch[2]}
                                                                    alt={imageMatch[1]}
                                                                    className={styles.questionInnerImage}
                                                                    style={{ maxWidth: '70%', maxHeight: '350px', objectFit: 'contain', marginTop: '8px', marginBottom: '8px', borderRadius: '4px' }}
                                                                />
                                                                <br />
                                                            </React.Fragment>
                                                        );
                                                    }
                                                    return (
                                                        <React.Fragment key={i}>
                                                            {line}
                                                            {i < q.text.split('\n').length - 1 && <br />}
                                                        </React.Fragment>
                                                    );
                                                })}
                                            </p>
                                            {q.imageUrl && (
                                                <img
                                                    src={q.imageUrl}
                                                    alt={`Question ${q.number}`}
                                                    className={styles.questionImage}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    {q.options && (
                                        <div className={styles.reviewOptions}>
                                            <div className={styles.optionsList}>
                                                {q.options.map((opt, i) => {
                                                    const labels = ['ア', 'イ', 'ウ', 'エ', 'オ'];
                                                    const labelChar = labels[i] || (i + 1).toString();
                                                    return (
                                                        <div key={i} className={styles.optionItem}>
                                                            <span className={styles.optionIndex}>{labelChar}.</span>
                                                            <span>{opt}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
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

            {showSummaryModal && (
                <SummaryModal
                    problem={problem}
                    onClose={() => setShowSummaryModal(false)}
                />
            )}
        </>
    );
};

export default RightPanel;
