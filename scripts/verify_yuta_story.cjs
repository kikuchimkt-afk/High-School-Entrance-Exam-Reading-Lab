const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/makoto/Documents/アプリ開発/高校受験リーディングラボ/src/data/problems/tokushima_mock_story_yuta_canada.js';
let content = fs.readFileSync(filePath, 'utf-8');

// Strip the variable name and export
content = content.replace(/const\s+\w+\s+=/, 'const data =');
content = content.replace(/export\s+default\s+\w+;/, '');

let problem;
try {
    problem = eval(`(function() { ${content}; return data; })()`);
} catch (e) {
    console.error('Failed to parse problem data:', e);
    process.exit(1);
}

const splitSentences = (text) => {
    // MATCH THE LOGIC IN LeftPanel.jsx
    let protectedPara = text;
    const placeholders = [];

    // Protect abbreviations
    const abbreviations = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.', 'U.S.', 'U.K.', 'e.g.', 'i.e.', 'a.m.', 'p.m.', 'A.M.', 'P.M.'];
    abbreviations.forEach(abbr => {
        const regex = new RegExp(abbr.replace(/\./g, '\\.'), 'g');
        protectedPara = protectedPara.replace(regex, (match) => {
            const placeholder = `__PLACEHOLDER_${placeholders.length}__`;
            placeholders.push(match);
            return placeholder;
        });
    });

    // Ensure brackets are treated as separate units for splitting
    protectedPara = protectedPara.replace(/(\[[^\]]+\])/g, ' $1 ');

    // Ensure sentence split happens even if sentence ends with </u> by adding a space
    protectedPara = protectedPara.replace(/([.!?])<\/u>/g, '$1 </u>');

    // Robust Split Regex: Matches bracketed tags OR segments ending in .!? followed by whitespace/next sentence/bracket
    let sentences = protectedPara.match(/\[[^\]]+\]|[^.!?\[]+[.!?]+['"]*(?=\s+|[A-Z]|\[|$)|[^.!?\[]+$/g) || [protectedPara];

    // Restore all placeholders
    sentences = sentences.map(s => {
        let restored = s;
        placeholders.forEach((original, i) => {
            const p = `__PLACEHOLDER_${i}__`;
            restored = restored.replace(new RegExp(p, 'g'), original);
        });
        return restored.trim();
    }).filter(s => s.length > 0);

    return sentences;
};

const paragraphs = problem.content.split(/\n+/).filter(p => p.trim().length > 0);

console.log(`Verifying translation alignment for: ${problem.title}`);
console.log('--------------------------------------------------');

let totalMismatches = 0;

paragraphs.forEach((p, pIdx) => {
    const sentences = splitSentences(p);
    const translations = problem.sentenceTranslations[pIdx.toString()] || [];

    if (sentences.length !== translations.length) {
        console.error(`Mismatch in Paragraph ${pIdx}:`);
        console.error(`  Sentences (${sentences.length}):`);
        sentences.forEach((s, sIdx) => console.log(`    [${sIdx}] ${s}`));
        console.error(`  Translations (${translations.length}):`);
        translations.forEach((t, tIdx) => console.log(`    [${tIdx}] ${t}`));
        console.log('--------------------------------------------------');
        totalMismatches++;
    } else {
        console.log(`Paragraph ${pIdx}: OK (${sentences.length} sentences)`);
    }
});

if (totalMismatches === 0) {
    console.log('All paragraphs are correctly aligned!');
} else {
    console.log(`Found ${totalMismatches} paragraphs with mismatches.`);
    process.exit(1);
}
