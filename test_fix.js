const fs = require('fs');

function decodeMojibake(str) {
    const buf = Buffer.from(str, 'binary');
    // The mojibake is likely UTF-8 bytes interpreted as some other encoding (like Windows-1252 or Shift-JIS)
    // and then saved back as UTF-8.
    // This is tricky. Let's try to interpret the string as ISO-8859-1 (which preserves bytes)
    // and then decode it as UTF-8.
    const isoBuf = Buffer.from(str, 'utf8');
    // If it was already corrupted, we might need a different approach.
}

// Let's test with "迚ｩ隱" which should be "物語"
// "物語" in UTF-8: E7 89 A9 E8 AA 9E
// "迚" in Shift-JIS: E4 B8 -> 中
// Wait, my previous analysis was wrong.
// Let's see: "荳ｭ蟄ｦ" -> "中学"
// "中" in UTF-8: E4 B8 AD
// "学" in UTF-8: E5 AD A6
// "荳" in Shift-JIS: E4 B8
// "ｭ" in Shift-JIS: AD
// "蟄" in Shift-JIS: E5 AD
// "ｦ" in Shift-JIS: A6
// So "荳ｭ蟄ｦ" is "中学" where each UTF-8 byte (E4, B8, AD, E5, AD, A6)
// was treated as a character in some encoding and then saved as UTF-8.

function fix(s) {
    // Convert the string to a buffer using the encoding that was used to "read" the UTF-8 bytes.
    // Usually this is something like CP1252 or MacRoman if done on a Western system,
    // or Shift-JIS if done on a Japanese system.
    // Since I see "荳" (from E4 B8 in SJIS), it's definitely Shift-JIS.
    const iconv = require('iconv-lite');
    const buf = iconv.encode(s, 'shift-jis');
    return buf.toString('utf8');
}

const input = process.argv[2];
console.log(fix(input));
