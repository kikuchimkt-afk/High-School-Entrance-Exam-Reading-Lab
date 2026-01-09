import React, { useState } from 'react';
import styles from './home.module.css';
import { mockProblems } from '../../data/mockData';

const HomePage = ({ onSelectProblem }) => {
    const [selectedGrade, setSelectedGrade] = useState('中3');

    // Tabs configuration
    const tabs = [
        { id: '中1', label: '中学1年' },
        { id: '中2', label: '中学2年' },
        { id: '中3', label: '中学3年' },
        { id: '受験生', label: '受験生' },
    ];

    // Filter problems based on selected target grade
    // If '受験生' is selected, maybe show all or specific exam problems? 
    // For now, exact match on target.
    const filteredProblems = mockProblems.filter(p => p.target === selectedGrade);

    return (
        <div className={styles.homeContainer}>
            <header className={styles.header}>
                <h1 className={styles.appTitle}>高校受験 リーディング・ラボ</h1>
                <p className={styles.subTitle}>学習したい問題を選択してください</p>
            </header>

            <div className={styles.gradeTabs}>
                {tabs.map((tab) => {
                    const isActive = selectedGrade === tab.id;
                    return (
                        <button
                            key={tab.id}
                            className={`${styles.gradeTab} ${isActive ? styles.activeTab : ''}`}
                            onClick={() => setSelectedGrade(tab.id)}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            <section className={styles.problemSection}>
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionTitleBar}></div>
                    <h2 className={styles.sectionTitle}>{tabs.find(t => t.id === selectedGrade)?.label || '問題一覧'}</h2>
                </div>

                <div className={styles.cardsGrid}>
                    {filteredProblems.length > 0 ? (
                        filteredProblems.map((problem) => (
                            <div key={problem.id} className={styles.problemCard}>
                                <div className={styles.cardHeader}>
                                    {/* Green badge now shows Target (e.g. 中3向け) */}
                                    <div className={styles.targetBadge}>{problem.target}向け</div>
                                    <span className={styles.problemNumber}>{problem.number}</span>
                                    <div className={styles.genreBadge}>{problem.genre}</div>
                                </div>
                                <h3 className={styles.cardTitle}>{problem.title}</h3>

                                <div className={styles.cardFooter}>
                                    <div className={styles.cardActions}>
                                        <button
                                            className={styles.actionBtnOutline}
                                            onClick={() => onSelectProblem(problem.id)}
                                        >
                                            <span className={styles.icon}>📄</span> 指導書
                                        </button>
                                        <button
                                            className={styles.actionBtnOutline}
                                            onClick={() => window.open(`/?problemId=${problem.id}&mode=print`, '_blank')}
                                        >
                                            <span className={styles.icon}>🖨️</span> 印刷
                                        </button>
                                    </div>
                                    {/* Source displayed below the buttons (or at bottom right) */}
                                    {problem.source && (
                                        <div className={styles.sourceText}>{problem.source}</div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noProblems}>
                            <p>このカテゴリの問題はまだありません。</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
