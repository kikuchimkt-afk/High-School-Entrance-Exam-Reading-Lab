import React, { useState } from 'react';
import LeftPanel from '../Panels/LeftPanel';
import RightPanel from '../Panels/RightPanel';
import PrintLayout from '../Shared/PrintLayout';
import styles from './styles.module.css';

const MainLayout = ({ problem, onBack }) => {
    const [mode, setMode] = useState('learning'); // 'learning', 'test', 'review'
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);

    // If no problem is selected (shouldn't happen if managed by App), handle gracefully
    if (!problem) return <div>No problem loaded...</div>;

    const handleSelectQuestion = (questionId) => {
        setSelectedQuestionId(questionId);
    };

    return (
        <div className={styles.appContainer}>
            {/* Print Layout (Only visible when printing) */}
            <div className={styles.printArea}>
                <PrintLayout problem={problem} />
            </div>

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
                        />
                    </div>
                    <div className={styles.rightPanel}>
                        <RightPanel
                            styles={styles}
                            selectedQuestionId={selectedQuestionId}
                            onSelectQuestion={handleSelectQuestion}
                            mode={mode}
                            problem={problem}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
