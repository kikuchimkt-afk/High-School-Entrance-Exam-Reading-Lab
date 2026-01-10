const fs = require('fs');
const path = require('path');

const targetFile = 'c:/Users/makoto/Documents/アプリ開発/高校受験リーディングラボ/src/data/problems/tokushima_mock_2025_yamaguchi_remix.js';

function verify() {
    console.log(`Verifying: ${targetFile}`);
    const content = fs.readFileSync(targetFile, 'utf8');

    // 1. Check for authorIntent (renamed from creator_comment)
    if (!content.includes('authorIntent:')) {
        console.error('ERROR: authorIntent field is missing or named incorrectly.');
        process.exit(1);
    }
    if (content.includes('creator_comment:')) {
        console.error('ERROR: creator_comment field still exists. Should be authorIntent.');
        process.exit(1);
    }
    console.log('OK: authorIntent field exists.');

    // 2. Check for summary object (required for summary button)
    if (!content.includes('summary: {') || !content.includes('japanese:') || !content.includes('notes:')) {
        console.error('ERROR: summary object is incomplete or missing.');
        process.exit(1);
    }
    console.log('OK: summary object exists.');

    // 3. Check for specific spoilers/markers
    if (content.includes('[ A:')) {
        // This is fine in translations, but let's check content
        const mainContent = content.match(/content: `([\s\S]+?)`,/)[1];
        if (mainContent.includes('私は日本を誇りに思いました')) {
            console.error('ERROR: spoiler found in main content.');
            process.exit(1);
        }
    }
    console.log('OK: No spoilers found in main content.');

    // 4. Verify translation counts match split sentences
    const mainContent = content.match(/content: `([\s\S]+?)`,/)[1];
    const paragraphs = mainContent.split(/\n+/).filter(p => p.trim().length > 0 && !p.match(/^\[IMAGE:/));

    // Extract translations using a more robust approach
    const transMatch = content.match(/sentenceTranslations: {([\s\S]+?)},/);
    const transStr = transMatch[1];

    function splitSentences(paragraph) {
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
        protectedPara = protectedPara.replace(/("[^"]*")/g, (match) => {
            const placeholder = `__PLACEHOLDER_${placeholders.length}__`;
            placeholders.push(match);
            return placeholder + ". ";
        });
        protectedPara = protectedPara.replace(/(\[\s*[A-Y]\s*\])/g, (match) => {
            const placeholder = `__PLACEHOLDER_${placeholders.length}__`;
            placeholders.push(match);
            return placeholder + ". ";
        });
        protectedPara = protectedPara.replace(/([.!?])<\/u>/g, '$1 </u>');
        let sentences = protectedPara.match(/[^.!?]+[.!?]+['"]*(\s+|$)|[^.!?]+$/g) || [protectedPara];

        // Restore
        return sentences.map(s => {
            let restored = s;
            placeholders.forEach((original, i) => {
                const p = `__PLACEHOLDER_${i}__`;
                restored = restored.replace(new RegExp(p + '\\.\\s+', 'g'), original);
                restored = restored.replace(new RegExp(p, 'g'), original);
            });
            return restored.trim();
        });
    }

    paragraphs.forEach((p, i) => {
        const sentences = splitSentences(p);
        const transKeyMatch = transStr.match(new RegExp(`"${i}":\\s*\\[([\\s\\S]*?)\\]`));
        if (!transKeyMatch) {
            console.error(`ERROR: Translation key "${i}" not found.`);
            process.exit(1);
        }

        // Count items in the translation array
        const transArrayStr = transKeyMatch[1];
        const transItems = transArrayStr.split(/",\s*"/).filter(it => it.trim().length > 0);
        // Add 1 if it ends with a closing quote but starts with an empty item
        const count = transItems.length;

        if (sentences.length !== count) {
            console.error(`ERROR: Paragraph ${i} mismatch!`);
            console.error(`  Split sentences: ${sentences.length}`);
            console.error(`  Translations   : ${count}`);
            console.log('--- SENTENCES ---');
            sentences.forEach((s, idx) => console.log(`${idx}: ${s}`));
            process.exit(1);
        }
    });
    console.log('OK: Sentence counts match translations.');

    console.log('Verification successful!');
}

verify();
