
import tokushima_2026_mock_q7_cleaning from '../src/data/problems/tokushima_2026_mock_q7_cleaning.js';

const problem = tokushima_2026_mock_q7_cleaning;
let errors = [];

console.log(`Verifying problem: ${problem.id}`);

// 1. Verify Author Intent
if (!problem.authorIntent) {
    errors.push("❌ Missing 'authorIntent' field.");
} else {
    console.log("✅ 'authorIntent' field exists.");
}

// 2. Verify Spoilers
problem.questions.forEach(q => {
    if (q.text.includes("surprisedの箇所") || q.text.includes("expressionの箇所")) {
        errors.push(`❌ Question ${q.id} contains spoiler text.`);
    }
});
if (errors.filter(e => e.includes("spoiler")).length === 0) {
    console.log("✅ No spoilers found in question text.");
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

// 4. Verify Translation Alignment (Simplified Re-run)
const separateSentences = (text) => {
    if (!text) return [];
    return text.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g).map(s => s.trim()).filter(s => s.length > 0);
};

// Start splitting content from paragraph index where actual text starts
// Based on previous debug, the content has metadata at the start.
// We expect keys "1", "2", "3", "4", "5" to exist and match paragraphs 1, 2, 3, 4, 5.
const contentParts = problem.content.trim().split(/\n\n+/);
// Paragraph 0 is metadata "(出典...)"
// Paragraph 1 is "Three months have passed..." -> key "1"
// ...
// Paragraph 6 is "(出典...)"

// Adjust loop to check specific paragraphs directly
const paragraphMap = {
    1: 1, // content[1] matches translations["1"]
    2: 2,
    3: 3,
    4: 4,
    5: 5
};

Object.keys(paragraphMap).forEach(key => {
    const paraIndex = paragraphMap[key];
    const paraText = contentParts[paraIndex];
    if (!paraText) {
        errors.push(`❌ Paragraph index ${paraIndex} (for key ${key}) not found in content.`);
        return;
    }

    const sentences = separateSentences(paraText);
    const translations = problem.sentenceTranslations[key] || [];

    if (sentences.length !== translations.length) {
        errors.push(`❌ Mismatch in Paragraph ${paraIndex} (Key ${key}): ${sentences.length} sentences vs ${translations.length} translations.`);
    } else {
        console.log(`✅ Paragraph ${paraIndex} (Key ${key}) aligned: ${sentences.length} sentences.`);
    }
});

// Report Results
if (errors.length > 0) {
    console.error("\nVerification FAILED with errors:");
    errors.forEach(e => console.error(e));
    process.exit(1);
} else {
    console.log("\n✅ All validation checks PASSED.");
}
