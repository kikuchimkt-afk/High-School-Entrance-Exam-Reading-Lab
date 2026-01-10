const fs = require('fs');
const path = 'c:/Users/makoto/Documents/アプリ開発/解説クリエーター/src/data/mockData.js';

try {
    const content = fs.readFileSync(path, 'utf8');
    const regex = /badges:\s*\[(.*?)\]/g;
    let match;
    const badges = new Set();

    while ((match = regex.exec(content)) !== null) {
        const badgeStr = match[1];
        // split by comma and clean quotes
        const badgeList = badgeStr.split(',').map(b => b.trim().replace(/['"]/g, ''));
        badgeList.forEach(b => {
            if (b) badges.add(b);
        });
    }

    console.log("All Badges Found:");
    console.log(Array.from(badges).sort().join('\n'));
} catch (err) {
    console.error(err);
}
