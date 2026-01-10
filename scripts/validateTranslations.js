/**
 * Translation Alignment Validator
 * 
 * This script validates that the number of English sentences matches
 * the number of Japanese translations for each paragraph in mockData.js
 * 
 * Run: node scripts/validateTranslations.js
 */

import { grade1Problems } from '../src/data/problems/grade1.js';
import { grade2Problems } from '../src/data/problems/grade2.js';
import { grade3Problems } from '../src/data/problems/grade3.js';
import { examProblems } from '../src/data/problems/exam.js';

const mockProblems = [...grade1Problems, ...grade2Problems, ...grade3Problems, ...examProblems];

// Same sentence splitting logic as LeftPanel.jsx
function splitIntoSentences(paragraph) {
    // Protect common abbreviations
    let protectedPara = paragraph;
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

    // Ensure sentence split happens even if sentence ends with </u> by adding a space (matches LeftPanel.jsx logic)
    protectedPara = protectedPara.replace(/([.!?])<\/u>/g, '$1 </u>');

    // Split on sentence-ending punctuation (Updated to handle nested quotes correctly)
    let sentences = protectedPara.match(/[^.!?]+[.!?]+['"]*(\s+|$)/g) || [protectedPara];

    // Restore placeholders
    sentences = sentences.map(s => {
        let restored = s;
        placeholders.forEach((original, i) => {
            restored = restored.replace(`__PLACEHOLDER_${i}__`, original);
        });
        return restored.trim();
    }).filter(s => s.length > 0);

    return sentences;
}

function validateProblem(problem) {
    const errors = [];
    const warnings = [];

    if (!problem.content || !problem.sentenceTranslations) {
        errors.push(`Problem ${problem.id}: Missing content or sentenceTranslations`);
        return { errors, warnings };
    }

    // Split content into paragraphs
    const paragraphs = problem.content.split(/\n+/).filter(p => p.trim().length > 0);

    paragraphs.forEach((paragraph, pIdx) => {
        const englishSentences = splitIntoSentences(paragraph);
        const translations = problem.sentenceTranslations[pIdx] || [];

        if (englishSentences.length !== translations.length) {
            errors.push(
                `Problem ${problem.id}, Paragraph ${pIdx}: ` +
                `English has ${englishSentences.length} sentences, ` +
                `but translations has ${translations.length} entries`
            );

            // Show details for debugging
            console.log(`\n  === Paragraph ${pIdx} Detail ===`);
            console.log(`  English sentences (${englishSentences.length}):`);
            englishSentences.forEach((s, i) => {
                console.log(`    [${i}] ${s.substring(0, 60)}${s.length > 60 ? '...' : ''}`);
            });
            console.log(`  Japanese translations (${translations.length}):`);
            translations.forEach((t, i) => {
                console.log(`    [${i}] ${t.substring(0, 40)}${t.length > 40 ? '...' : ''}`);
            });
        }
    });

    // Check for nested quotes that MIGHT still cause issues (though regex is better now)
    // Warning is less critical now, but good to keep an eye on pattern.
    if (problem.content.includes(".'\"") || problem.content.includes(".'\")")) {
        // warnings.push(
        //     `Problem ${problem.id}: Contains nested quotes with period inside (.'") ` +
        //     `which may cause sentence splitting issues. Consider: 'text'." instead of 'text.'"`
        // );
    }

    // 3. Validate Explanation Ref Targets
    if (problem.explanations) {
        Object.entries(problem.explanations).forEach(([qId, explanation]) => {
            ['beginner', 'advanced', 'common'].forEach(level => {
                const levelData = explanation[level];
                if (!levelData) return;

                // Extract all targets from ref strings: <ref target="P-S"> or refTargets array (legacy)
                const targets = new Set();

                // Check legacy refTargets array
                if (levelData.refTargets) {
                    levelData.refTargets.forEach(t => targets.add(t));
                }

                // Check embedded refs in detail string
                if (levelData.detail) {
                    const regex = /<ref target="([^"]+)">/g;
                    let match;
                    while ((match = regex.exec(levelData.detail)) !== null) {
                        // Handle comma-separated targets
                        match[1].split(',').forEach(t => targets.add(t.trim()));
                    }
                }

                // Validate each target
                targets.forEach(target => {
                    const parts = target.split('-');
                    if (parts.length !== 2) {
                        errors.push(`[${problem.id}:${qId}:${level}] Invalid target format: "${target}"`);
                        return;
                    }

                    const pIdx = parseInt(parts[0], 10);
                    const sIdx = parseInt(parts[1], 10);

                    if (isNaN(pIdx) || isNaN(sIdx)) {
                        errors.push(`[${problem.id}:${qId}:${level}] Non-numeric target: "${target}"`);
                        return;
                    }

                    if (pIdx < 0 || pIdx >= paragraphs.length) {
                        errors.push(`[${problem.id}:${qId}:${level}] Paragraph index out of bounds: ${pIdx} (Total: ${paragraphs.length}) Target: "${target}"`);
                        return;
                    }

                    const englishSentences = splitIntoSentences(paragraphs[pIdx]);
                    if (sIdx < 0 || sIdx >= englishSentences.length) {
                        errors.push(`[${problem.id}:${qId}:${level}] Sentence index out of bounds: ${target} (Paragraph ${pIdx} has ${englishSentences.length} sentences)`);
                    }
                });
            });
        });
    }

    return { errors, warnings };
}

// Main validation
console.log('=== Translation Alignment Validator ===\n');

let totalErrors = 0;
let totalWarnings = 0;

mockProblems.forEach(problem => {
    const { errors, warnings } = validateProblem(problem);

    if (errors.length > 0 || warnings.length > 0) {
        console.log(`\n📋 ${problem.id}: ${problem.title}`);
    }

    errors.forEach(err => {
        console.log(`  ❌ ${err}`);
        totalErrors++;
    });

    warnings.forEach(warn => {
        console.log(`  ⚠️  ${warn}`);
        totalWarnings++;
    });
});

console.log('\n=== Summary ===');
console.log(`Total problems checked: ${mockProblems.length}`);
console.log(`Errors: ${totalErrors}`);
console.log(`Warnings: ${totalWarnings}`);

if (totalErrors === 0 && totalWarnings === 0) {
    console.log('\n✅ All translations are properly aligned!');
    process.exit(0);
} else {
    console.log('\n❌ Please fix the issues above.');
    process.exit(totalErrors > 0 ? 1 : 0);
}
