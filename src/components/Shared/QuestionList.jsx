import React from 'react';

const QuestionList = ({ styles, questions, selectedQuestionId, onSelectQuestion, footnotes }) => {
    return (
        <div className={styles.questionsContainer}>
            {footnotes && footnotes.length > 0 && (
                <div className={styles.footnotesContainer}>
                    <p className={styles.footnotesTitle}>注）</p>
                    <div className={styles.footnotesList}>
                        {footnotes.map((note, index) => (
                            <span key={index} className={styles.footnoteItem}>* {note}</span>
                        ))}
                    </div>
                </div>
            )}
            {questions.map((q) => {
                const labels = ['ア', 'イ', 'ウ', 'エ', 'オ'];

                return (
                    <div
                        key={q.id}
                        className={`${styles.questionCard} ${selectedQuestionId === q.id ? styles.selectedCard : ''}`}
                        onClick={() => onSelectQuestion(q.id)}
                    >
                        <div className={styles.questionHeader}>
                            <span className={styles.questionNumber}>Q{q.number}</span>
                        </div>
                        <p className={styles.questionText} style={{ whiteSpace: 'pre-wrap' }}>
                            {q.text.split('\n').map((line, i) => {
                                const imageMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
                                if (imageMatch) {
                                    // Parse for scale in alt: "AltText|1.2"
                                    let altText = imageMatch[1];
                                    let scale = 1.0;
                                    if (altText.includes('|')) {
                                        const parts = altText.split('|');
                                        altText = parts[0];
                                        const scaleStr = parts[1];
                                        if (!isNaN(parseFloat(scaleStr))) {
                                            scale = parseFloat(scaleStr);
                                        }
                                    }

                                    return (
                                        <React.Fragment key={i}>
                                            <img
                                                src={imageMatch[2]}
                                                alt={altText}
                                                className={styles.questionInnerImage}
                                                style={{
                                                    maxWidth: '100%',
                                                    marginTop: '8px',
                                                    marginBottom: '8px',
                                                    borderRadius: '4px',
                                                    transform: `scale(${scale})`,
                                                    transformOrigin: 'top left'
                                                }}
                                            />
                                            <br />
                                        </React.Fragment>
                                    );
                                }
                                return (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                );
                            })}
                        </p>
                        {q.imageUrl && (
                            <img src={q.imageUrl} alt="Question Reference" className={styles.questionImage} />
                        )}
                        {q.options && q.options.length > 0 ? (
                            <div className={styles.optionsList}>
                                {q.options.map((option, idx) => {
                                    const labelChar = labels[idx] || (idx + 1).toString();
                                    // Check if option starts with label char and optional punctuation/space
                                    let displayOption = option;
                                    if (option.trim().startsWith(labelChar)) {
                                        displayOption = option.trim().substring(labelChar.length).replace(/^[ .．、]+/, '');
                                    }

                                    return (
                                        <div key={idx} className={styles.optionItem}>
                                            <span className={styles.optionIndex}>
                                                {labelChar}.
                                            </span>
                                            <span>{displayOption}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            q.answerType === 'choice' ? null : (
                                <div className={styles.fillInBlankInfo}>
                                    <p>※ 記述または抜き出し問題</p>
                                </div>
                            )
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default QuestionList;
