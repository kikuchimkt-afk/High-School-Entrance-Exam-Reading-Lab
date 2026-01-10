
import tokushima_2026_mock_q7_cleaning from '../src/data/problems/tokushima_2026_mock_q7_cleaning.js';

const problem = tokushima_2026_mock_q7_cleaning;

console.log(`Checking problem: ${problem.id}`);

const separateSentences = (text) => {
    if (!text) return [];
    // Basic splitting logic matching the app's MainLayout/Text processing
    // This is a simplified version of what might be in the app, but should be close.
    // The app likely uses a regex looking for [.!?] followed by whitespace or end of string.
    // Let's use a robust splitting regex.
    return text.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g).map(s => s.trim()).filter(s => s.length > 0);
};

// Check paragraphs
const contentParts = problem.content.trim().split(/\n\n+/);
console.log(`Content has ${contentParts.length} paragraphs`);

contentParts.forEach((para, idx) => {
    // Skip empty paragraphs or metadata lines if the app does so. 
    // The app likely treats the first and last lines (出典) as paragraphs if they are separated by double newlines.
    // Let's see how the app treats them.

    const sentences = separateSentences(para);
    const translations = problem.sentenceTranslations[idx] || [];

    console.log(`\nParagraph ${idx}:`);
    console.log(`  Sentences (${sentences.length}):`);
    sentences.forEach((s, i) => console.log(`    [${i}] ${s.substring(0, 50)}...`));
    console.log(`  Translations (${translations.length}):`);
    translations.forEach((t, i) => console.log(`    [${i}] ${t.substring(0, 50)}...`));

    if (sentences.length !== translations.length) {
        console.log(`  ❌ MISMATCH: ${sentences.length} sentences vs ${translations.length} translations`);
    } else {
        console.log(`  ✅ OK`);
    }
});
