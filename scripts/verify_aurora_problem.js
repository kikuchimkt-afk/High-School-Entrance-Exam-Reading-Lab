
import tokushima_mock_d5_aurora from '../src/data/problems/tokushima_mock_d5_aurora.js';

const problem = tokushima_mock_d5_aurora;
let errors = [];

console.log(`Verifying problem: ${problem.id}`);

// 1. Verify Author Intent (Renamed from creator_comment)
if (!problem.authorIntent) {
    if (problem.creator_comment) {
        errors.push("❌ 'creator_comment' found but should be 'authorIntent'.");
    } else {
        errors.push("❌ Missing 'authorIntent' field.");
    }
} else {
    console.log("✅ 'authorIntent' field exists.");
}

// 2. Verify Spoilers
const spoilers = ["surprisedの箇所", "expressionの箇所", "[ A ] (", "[ B ] ("];
problem.questions.forEach(q => {
    spoilers.forEach(spoiler => {
        if (q.text.includes(spoiler)) {
            errors.push(`❌ Question ${q.id} contains spoiler text: "${spoiler}"`);
        }
    });
});
if (errors.filter(e => e.includes("spoiler")).length === 0) {
    console.log("✅ No simple spoilers found in question text.");
}

// 3. Verify Explanations Keys
const questionIds = problem.questions.map(q => q.id);
const explanationKeys = Object.keys(problem.explanations);
const missingExplanations = questionIds.filter(id => !explanationKeys.includes(id));

if (missingExplanations.length > 0) {
    errors.push(`❌ Missing explanations for: ${missingExplanations.join(", ")}`);
} else {
    console.log("✅ All questions have explanations.");
}

// 4. Verify Translation Alignment
const separateSentences = (text) => {
    if (!text) return [];
    return text.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g).map(s => s.trim()).filter(s => s.length > 0);
};

// Based on the content structure provided:
// Paragraph 0: "Tae and Lyla are..."
// Paragraph 1: "Tae: Hello, Lyla..."
// Paragraph 2: "Lyla: Thank you..."
// ...
// Let's print the paragraphs to see how they split by \n\n
const contentParts = problem.content.trim().split(/\n\n+/);
console.log(`Content has ${contentParts.length} paragraphs`);

// Map translation keys to paragraph indices
// In this problem, user provided translation keys "0", "1"...?
// Let's check the problem file again.
// sentenceTranslations: { "1": [...], "2": [...], "3": [...] }
// Paragraphs in content:
// 0: Intro (Tae and Lyla...)
// 1: Tae: Hello...
// 2: Lyla: Thank you...
// 3: Tae: Actually...
// ...
// Wait, the user JSON had keys "0" in the request, but I copied them.
// Let's check the actual file content I wrote.
// I wrote logic that splits keys "1", "2", "3".
// Let's see what I wrote in step 476.
// sentenceTranslations: { "1": [...], "2": [...], "3": [...] }
// Key "1": "タエとライラは..." -> This looks like Paragraph 0 (Intro)? Or combined?
// The translation value "1" provided in my write_to_file call (Step 476) seems to combine multiple English paragraphs?
// content:
// "Tae and Lyla are talking...\n\nTae: Hello...\nLyla: Thank you...\nTae: Actually...\nLyla: Yes, I looked into it...\nTae: I see...\nLyla: I also found a list..." 
// That looks like one big block of text in `content`?
// Let's check `content` in `tokushima_mock_d5_aurora.js`.
// It has `\n\n` between Intro and "Tae: Hello".
// But then "Tae: Hello", "Lyla: Thank you", "Tae: Actually" are separated by single newlines.
// So they might be part of the SAME paragraph if split by `\n\n`.
// Let's verify how `separateSentences` handles `\n`.
// The regex `/[^.!?]+[.!?]+["']?|[^.!?]+$/g` splits by punctuation.
// If single newlines are present, they are just whitespace.

contentParts.forEach((para, idx) => {
    console.log(`Paragraph ${idx}: ${para.substring(0, 30)}...`);
});

// The translation Key "1" in my file contains many sentences:
// "タエとライラは...", "タエ：こんにちは...", ... "ライラ：また、日本の古い歴史書..."
// This seems to correspond to specific parts of content.

const translations = problem.sentenceTranslations;
Object.keys(translations).forEach(key => {
    console.log(`Translation Key ${key}: ${translations[key].length} lines`);
});

// Report Results
if (errors.length > 0) {
    console.error("\nVerification FAILED with errors:");
    errors.forEach(e => console.error(e));
    process.exit(1);
} else {
    console.log("\n✅ All validation checks PASSED (Basic integrity). Manual alignment check needed via output logs.");
}
