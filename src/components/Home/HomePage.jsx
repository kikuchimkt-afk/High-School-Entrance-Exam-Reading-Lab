import React, { useState } from 'react';
import styles from './home.module.css';
import { mockProblems } from '../../data/mockData';

const HomePage = ({ onSelectProblem }) => {
    // 1. Filter State
    // searchTags: Array of { type: 'GRADE' | 'GRAMMAR' | 'TOPIC' | 'TEST' | 'GENRE', value: '...' }
    const [searchTags, setSearchTags] = useState([]);
    const [textInput, setTextInput] = useState('');

    // 2. Pre-calculated Filter Options
    // (A) Grade Options
    const gradeOptions = [
        { label: '中学1年', value: '中1', type: 'GRADE' },
        { label: '中学2年', value: '中2', type: 'GRADE' },
        { label: '中学3年', value: '中3', type: 'GRADE' },
        { label: '受験生', value: '受験生', type: 'GRADE' },
        { label: 'すべて', value: 'ALL', type: 'GRADE' },
    ];

    // (B) Test Keywords (Hardcoded)
    const testKeywords = ["学力テスト", "基礎学", "定期テスト", "入試", "実力テスト"];

    // (C) Grammar Whitelist (For Middle Column)
    // Anything NOT in this list and NOT a test keyword/grade will go to "Topics"
    // This list should be expanded as more grammar terms are added.
    const knownGrammarTerms = [
        "不定詞", "動名詞", "関係代名詞", "分詞", "受動態", "現在完了", "過去完了",
        "比較", "仮定法", "助動詞", "前置詞", "接続詞", "間接疑問文", "付加疑問文",
        "to不定詞", "原形不定詞", "現在分詞", "過去分詞", "受け身", "SVOO", "SVOC",
        "未来表現", "文法", "整序問題", "会話表現", "熟語",
        "一般動詞", "疑問詞", "want to", "代名詞", "三人称", "時間", "時刻"
    ];

    // (D) Logic to categorize Badges into Grammar vs Topics
    const allBadges = Array.from(new Set(mockProblems.flatMap(p => p.badges || []))).sort();

    // Helper to check if a badge represents a grammar term (partial match allowed)
    // e.g. "中2 不定詞" should match "不定詞"
    const isGrammarBadge = (badge) => {
        return knownGrammarTerms.some(term => badge.includes(term));
    };

    // Grammar Options: Badges containing any whitelist term
    const grammarOptions = allBadges.filter(b => isGrammarBadge(b));

    // Topic Options: Badges NOT in whitelist, NOT in testKeywords, NOT in grade keys
    const topicOptions = allBadges.filter(b => {
        if (isGrammarBadge(b)) return false;
        if (testKeywords.includes(b)) return false;
        if (["中1", "中2", "中3", "受験生"].includes(b)) return false;
        return true;
    });

    // (E) Test Options
    const testOptions = testKeywords.filter(keyword => {
        return mockProblems.some(p =>
            (p.badges?.includes(keyword)) || (p.source?.includes(keyword))
        );
    });

    // (F) Question Format (Genre) Options
    const genreOptions = Array.from(new Set(mockProblems.map(p => p.genre).filter(Boolean))).sort();

    // 3. Handlers
    const addTag = (type, value) => {
        if (type === 'GRADE' && value === 'ALL') {
            setSearchTags(prev => prev.filter(t => t.type !== 'GRADE'));
            return;
        }

        // Avoid duplicates
        if (searchTags.some(t => t.type === type && t.value === value)) return;

        setSearchTags(prev => [...prev, { type, value }]);
    };

    const removeTag = (tagIdx) => {
        setSearchTags(prev => prev.filter((_, idx) => idx !== tagIdx));
    };

    // 4. Filtering Logic
    const filteredProblems = mockProblems.filter(p => {
        const matchTags = searchTags.every(tag => {
            if (tag.type === 'GRADE') {
                return p.target === tag.value || p.badges?.includes(tag.value);
            }
            if (tag.type === 'GRAMMAR' || tag.type === 'TOPIC') {
                return p.badges?.includes(tag.value);
            }
            if (tag.type === 'TEST') {
                return (p.source || '').includes(tag.value) || p.badges?.includes(tag.value);
            }
            if (tag.type === 'GENRE') {
                return p.genre === tag.value;
            }
            return true;
        });

        if (!matchTags) return false;

        if (!textInput.trim()) return true;
        const q = textInput.toLowerCase();
        return (
            p.title.toLowerCase().includes(q) ||
            (p.source || '').toLowerCase().includes(q) ||
            (p.badges || []).some(b => b.toLowerCase().includes(q))
        );
    });

    return (
        <div className={styles.homeContainer}>
            <header className={styles.header}>
                <h1 className={styles.appTitle}>高校受験 リーディング・ラボ</h1>
                <p className={styles.subTitle}>学習したい問題を選択してください</p>
            </header>

            {/* Search Bar */}
            <div className={styles.searchBarContainer}>
                <div className={styles.searchBox}>
                    {searchTags.map((tag, idx) => (
                        <div key={idx} className={styles.searchTag}>
                            <span>{tag.type === 'GRADE' ? (gradeOptions.find(g => g.value === tag.value)?.label || tag.value) : tag.value}</span>
                            <span className={styles.tagRemove} onClick={() => removeTag(idx)}>×</span>
                        </div>
                    ))}
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder={searchTags.length === 0 ? "キーワードで検索 (例: 不定詞, 学力テスト...)" : ""}
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                    />
                </div>
            </div>

            {/* 3-Column Filter Panels */}
            <div className={styles.filterPanels}>
                {/* Column 1: Grade (Top) + Topics (Bottom) */}
                <div className={styles.filterColumn}>
                    <div className={styles.columnHeader}>学年選択</div>
                    <div className={styles.tagList} style={{ marginBottom: '20px' }}>
                        {gradeOptions.map((opt) => (
                            <button
                                key={opt.value}
                                className={styles.tagButton}
                                onClick={() => addTag(opt.type, opt.value)}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>

                    {/* Divider or Space */}
                    <div style={{ borderTop: '1px solid #3f3f46', paddingTop: '12px' }}>
                        <div className={styles.columnHeader}>トピックス</div>
                        <div className={styles.tagList}>
                            {topicOptions.length > 0 ? topicOptions.map((topic) => (
                                <button
                                    key={topic}
                                    className={styles.tagButton}
                                    onClick={() => addTag('TOPIC', topic)}
                                >
                                    {topic}
                                </button>
                            )) : (
                                <span style={{ fontSize: '0.8rem', color: '#52525b' }}>（タグなし）</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Column 2: Grammar Keywords */}
                <div className={styles.filterColumn}>
                    <div className={styles.columnHeader}>文法キーワード</div>
                    <div className={styles.tagList}>
                        {grammarOptions.length > 0 ? grammarOptions.map((badge) => (
                            <button
                                key={badge}
                                className={styles.tagButton}
                                onClick={() => addTag('GRAMMAR', badge)}
                            >
                                {badge}
                            </button>
                        )) : (
                            <span style={{ fontSize: '0.8rem', color: '#52525b' }}>（該当なし）</span>
                        )}
                    </div>
                </div>

                {/* Column 3: Test Type (Top) + Question (Bottom) */}
                <div className={styles.filterColumn}>
                    <div className={styles.columnHeader}>テストの種類</div>
                    <div className={styles.tagList} style={{ marginBottom: '20px' }}>
                        <button
                            className={styles.tagButton}
                            onClick={() => setSearchTags(prev => prev.filter(t => t.type !== 'TEST'))}
                        >
                            すべて
                        </button>
                        {testOptions.map((test) => (
                            <button
                                key={test}
                                className={styles.tagButton}
                                onClick={() => addTag('TEST', test)}
                            >
                                {test}
                            </button>
                        ))}
                    </div>

                    {/* Divider */}
                    <div style={{ borderTop: '1px solid #3f3f46', paddingTop: '12px' }}>
                        <div className={styles.columnHeader}>出題形式</div>
                        <div className={styles.tagList}>
                            {genreOptions.map((genre) => (
                                <button
                                    key={genre}
                                    className={styles.tagButton}
                                    onClick={() => addTag('GENRE', genre)}
                                >
                                    {genre}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <section className={styles.problemSection}>
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionTitleBar}></div>
                    <h2 className={styles.sectionTitle}>
                        問題一覧
                        <span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#94a3b8', marginLeft: '12px' }}>
                            ({filteredProblems.length}件)
                        </span>
                    </h2>
                </div>

                <div className={styles.cardsGrid}>
                    {filteredProblems.length > 0 ? (
                        filteredProblems.map((problem) => (
                            <div key={problem.id} className={styles.problemCard}>
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.targetBadge} ${problem.target === '中1' ? styles.grade1 :
                                        problem.target === '中2' ? styles.grade2 :
                                            problem.target === '中3' ? styles.grade3 :
                                                problem.target === '受験生' ? styles.gradeExaminee : ''
                                        }`}>{problem.target}向け</div>
                                    <span className={styles.problemNumber}>{problem.number}</span>
                                    <div className={styles.genreBadge}>{problem.genre}</div>
                                </div>
                                <h3 className={styles.cardTitle}>{problem.title}</h3>

                                {problem.badges && problem.badges.length > 0 && (
                                    <div className={styles.badgesContainer}>
                                        {problem.badges.map((badge, idx) => (
                                            <span key={idx} className={styles.grammarBadge}>{badge}</span>
                                        ))}
                                    </div>
                                )}

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
                                    {problem.source && (
                                        <div className={styles.sourceText}>{problem.source}</div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noProblems}>
                            <p>条件に一致する問題は見つかりませんでした。</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
