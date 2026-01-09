import React, { useState } from 'react';
import LeftPanel from '../Panels/LeftPanel';
import RightPanel from '../Panels/RightPanel';
import PrintLayout from '../Shared/PrintLayout';
import styles from './styles.module.css';

const MainLayout = ({ problem, onBack }) => {
    const [mode, setMode] = useState('learning'); // 'learning', 'test', 'review'
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [relatedHighlights, setRelatedHighlights] = useState(new Set());
    const [level, setLevel] = useState('beginner'); // 'beginner', 'advanced'

    // If no problem is selected (shouldn't happen if managed by App), handle gracefully
    if (!problem) return <div>No problem loaded...</div>;

    const handleSelectQuestion = (questionId) => {
        setSelectedQuestionId(questionId);
        setRelatedHighlights(new Set()); // Clear highlights when changing question
    };

    return (
        <div className={styles.appContainer}>
            {/* Print Layout removed from here. Use the Print button to open print view. */}

            {/* Screen Layout */}
            <div className={styles.screenArea}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        {onBack && (
                            <button onClick={onBack} className={styles.backButton}>
                                ← Home
                            </button>
                        )}
                        <h1 className={styles.title}>高校受験 リーディング・ラボ</h1>
                    </div>
                    <div className={styles.headerRight}>
                        <div className={`${styles.headerToggle} ${styles.darkToggle}`} style={{ marginRight: '24px' }}>
                            <span
                                className={`${styles.toggleLabel} ${level === 'beginner' ? styles.activeMode : ''}`}
                                onClick={() => setLevel('beginner')}
                            >
                                🔰 初学者
                            </span>
                            <label className={styles.toggleSwitch}>
                                <input
                                    type="checkbox"
                                    checked={level === 'advanced'}
                                    onChange={(e) => setLevel(e.target.checked ? 'advanced' : 'beginner')}
                                />
                                <span className={styles.slider}></span>
                            </label>
                            <span
                                className={`${styles.toggleLabel} ${level === 'advanced' ? styles.activeMode : ''}`}
                                onClick={() => setLevel('advanced')}
                            >
                                🎓 受験生
                            </span>
                        </div>
                        <div className={styles.modeButtonGroup}>
                            <button
                                className={`${styles.modeBtn} ${mode === 'learning' ? styles.activeModeBtn : ''}`}
                                onClick={() => setMode('learning')}
                            >
                                学習モード
                            </button>
                            <button
                                className={`${styles.modeBtn} ${mode === 'test' ? styles.activeModeBtn : ''}`}
                                onClick={() => setMode('test')}
                            >
                                テストモード
                            </button>
                            <button
                                className={`${styles.modeBtn} ${mode === 'review' ? styles.activeModeBtn : ''}`}
                                onClick={() => setMode('review')}
                            >
                                復習モード
                            </button>
                        </div>
                        <button
                            className={styles.printBtn}
                            onClick={() => window.open(`/?problemId=${problem.id}&mode=print`, '_blank')}
                        >
                            <span>🖨️</span> 印刷
                        </button>
                    </div>
                </header>

                <main className={styles.mainContent}>
                    <div className={styles.leftPanel}>
                        <LeftPanel
                            styles={styles}
                            selectedQuestionId={selectedQuestionId}
                            onSelectQuestion={handleSelectQuestion}
                            mode={mode}
                            problem={problem}
                            relatedHighlights={relatedHighlights}
                            setRelatedHighlights={setRelatedHighlights}
                        />
                    </div>
                    <div className={styles.rightPanel}>
                        <RightPanel
                            styles={styles}
                            selectedQuestionId={selectedQuestionId}
                            onSelectQuestion={handleSelectQuestion}
                            mode={mode}
                            problem={problem}

                            setRelatedHighlights={setRelatedHighlights}
                            relatedHighlights={relatedHighlights}
                            level={level}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
