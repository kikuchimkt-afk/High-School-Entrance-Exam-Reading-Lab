const fs = require('fs');
const path = require('path');

// Mock component behavior for sentence splitting
const splitSentences = (text) => {
    let protectedPara = text;
    const placeholders = [];
    const abbreviations = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.', 'U.S.', 'U.K.', 'e.g.', 'i.e.', 'a.m.', 'p.m.', 'A.M.', 'P.M.'];
    abbreviations.forEach(abbr => {
        const regex = new RegExp(abbr.replace(/\./g, '\\.'), 'g');
        protectedPara = protectedPara.replace(regex, (match) => {
            const placeholder = `__PLACEHOLDER_${placeholders.length}__`;
            placeholders.push(match);
            return placeholder;
        });
    });

    protectedPara = protectedPara.replace(/(\[[^\]]+\])/g, ' $1 ');
    protectedPara = protectedPara.replace(/([.!?])<\/u>/g, '$1 </u>');
    let sentences = protectedPara.match(/\[[^\]]+\]|[^.!?\[]+[.!?]+['"]*(?=\s+|[A-Z]|\[|$)|[^.!?\[]+$/g) || [protectedPara];

    sentences = sentences.map(s => {
        let restored = s;
        placeholders.forEach((original, i) => {
            const p = `__PLACEHOLDER_${i}__`;
            restored = restored.replace(new RegExp(p, 'g'), original);
        });

        let balanced = restored;
        const openTags = (balanced.match(/<u>/g) || []).length;
        const closeTags = (balanced.match(/<\/u>/g) || []).length;
        if (openTags > closeTags) {
            balanced += '</u>';
        } else if (closeTags > openTags) {
            balanced = '<u>' + balanced;
        }
        return balanced.trim();
    }).filter(s => s.length > 0);

    return sentences;
};

const filePath = path.join(__dirname, '../src/data/problems/tokushima_mock_q7_mie_2024.js');
const fileContent = fs.readFileSync(filePath, 'utf8');

// Use JS parsing to avoid eval issues if possible
const tempCjs = path.join(__dirname, 'temp_mie_verify.cjs');
fs.writeFileSync(tempCjs, fileContent.replace('export default', 'module.exports ='));
const problem = require('./temp_mie_verify.cjs');
fs.unlinkSync(tempCjs);

const { content, sentenceTranslations, questions, explanations } = problem;

const paragraphs = content.split('\n\n');

console.log(`Checking Mie 2024 Mock Problem Alignment...\n`);

let hasError = false;

paragraphs.forEach((para, index) => {
    const sentences = splitSentences(para);
    const translations = sentenceTranslations[index.toString()];

    if (!translations) {
        console.error(`Error: Paragraph ${index} has no translations!`);
        hasError = true;
        return;
    }

    console.log(`Paragraph ${index}: ${sentences.length} sentences found.`);

    if (sentences.length !== translations.length) {
        console.error(`Mismatch in Paragraph ${index}!`);
        console.error(`English sentences (${sentences.length}):`);
        sentences.forEach((s, i) => console.log(`  ${i}: ${s}`));
        console.error(`Japanese translations (${translations.length}):`);
        translations.forEach((t, i) => console.log(`  ${i}: ${t}`));
        hasError = true;
    }
});

// Verify explanations
console.log(`\nVerifying Explanations...`);
questions.forEach(q => {
    if (!explanations[q.id]) {
        console.error(`Error: Question ${q.id} has no explanation!`);
        hasError = true;
    } else {
        console.log(`Question ${q.id}: Explanation found.`);
    }
});

if (hasError) {
    console.error(`\nVerification failed!`);
    process.exit(1);
} else {
    console.log(`\nAll checks passed! Paragraphs are aligned and explanations are present.`);
    process.exit(0);
}
