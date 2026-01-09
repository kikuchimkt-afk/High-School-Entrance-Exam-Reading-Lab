import React, { useState } from 'react';
import { mockProblem } from '../../data/mockData';
import QuestionList from '../Shared/QuestionList';

const RightPanel = ({ styles, selectedQuestionId, mode, onSelectQuestion }) => {
    const [activeTab, setActiveTab] = useState('explanation');
    const [level, setLevel] = useState('beginner'); // 'beginner' or 'advanced'

    if (!mockProblem) return <div className={styles.content}>Loading...</div>;

    const { explanations, questions } = mockProblem;

    // Determine content based on mode
    let currentView = activeTab;
    if (mode === 'test') currentView = 'questions'; // In test mode, show questions
    if (mode === 'review') currentView = 'explanation'; // In review mode, show explanation

    const selectedQuestion = questions.find(q => q.id === selectedQuestionId);

    // Get common and specific explanation data
    const rawExplanation = selectedQuestionId ? explanations[selectedQuestionId] : null;
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
                            解説
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
                </div>
            )}

            {mode === 'test' && (
                <div className={styles.panelHeader}>
                    <h3>設問</h3>
                </div>
            )}

            {mode === 'review' && (
                <div className={styles.panelHeader}>
                    <h3>解説</h3>
                </div>
            )}

            {/* Level Toggle - Only show in explanation view */}
            {currentView === 'explanation' && (
                <div className={styles.levelControl}>
                    <div className={styles.levelToggle}>
                        <button
                            className={`${styles.levelBtn} ${level === 'beginner' ? styles.activeLevel : ''}`}
                            onClick={() => setLevel('beginner')}
                        >
                            <span role="img" aria-label="beginner">🔰</span> 初学者向け
                        </button>
                        <button
                            className={`${styles.levelBtn} ${level === 'advanced' ? styles.activeLevel : ''}`}
                            onClick={() => setLevel('advanced')}
                        >
                            <span role="img" aria-label="advanced">🎓</span> 受験生向け
                        </button>
                    </div>
                </div>
            )}

            <div className={styles.content}>
                {currentView === 'explanation' && (
                    <div className={styles.explanationContainer}>
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
                                <div className={styles.explanationBody}>
                                    <div className={styles.explanationSection}>
                                        <h4>要点</h4>
                                        <p>{levelData?.summary}</p>
                                    </div>
                                    <div className={styles.explanationSection}>
                                        <h4>詳細解説</h4>
                                        <p>{levelData?.detail}</p>
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
                            </>
                        )}
                    </div>
                )}
                {currentView === 'questions' && (
                    <QuestionList
                        styles={styles}
                        questions={questions}
                        selectedQuestionId={selectedQuestionId}
                        onSelectQuestion={onSelectQuestion}
                        footnotes={mockProblem.footnotes}
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
