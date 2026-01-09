import React from 'react';
import styles from './styles.module.css';
import LeftPanel from '../Panels/LeftPanel';
import RightPanel from '../Panels/RightPanel';

const MainLayout = () => {
    const [selectedQuestionId, setSelectedQuestionId] = React.useState(null);
    const [mode, setMode] = React.useState('learning'); // 'learning', 'test', 'review'



    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <h1>高校受験 リーディング・ラボ</h1>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.modeButtonGroup}>
                        <button
                            className={`${styles.modeBtn} ${mode === 'learning' ? styles.activeModeBtn : ''}`}
                            onClick={() => setMode('learning')}
                        >
                            📖 学習
                        </button>
                        <button
                            className={`${styles.modeBtn} ${mode === 'test' ? styles.activeModeBtn : ''}`}
                            onClick={() => setMode('test')}
                        >
                            📝 演習
                        </button>
                        <button
                            className={`${styles.modeBtn} ${mode === 'review' ? styles.activeModeBtn : ''}`}
                            onClick={() => setMode('review')}
                        >
                            ✅ 答え合わせ
                        </button>
                    </div>
                </div>
            </header>
            <div className={styles.mainContent}>
                <div className={styles.leftPanel}>
                    <LeftPanel
                        styles={styles}
                        selectedQuestionId={selectedQuestionId}
                        onSelectQuestion={setSelectedQuestionId}
                        mode={mode}
                    />
                </div>
                <div className={styles.rightPanel}>
                    <RightPanel
                        styles={styles}
                        selectedQuestionId={selectedQuestionId}
                        // Pass onSelectQuestion to RightPanel too for TestMode/ReviewMode
                        onSelectQuestion={setSelectedQuestionId}
                        mode={mode}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
