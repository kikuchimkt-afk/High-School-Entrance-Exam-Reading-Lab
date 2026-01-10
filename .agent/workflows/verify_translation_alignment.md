---
description: Verify sentence translation alignment after adding a new problem
---

# Workflow: Verify Translation Alignment

After adding a new problem to `mockData.js`, verify that English sentences and Japanese translations align correctly.

## Why This Matters
The app splits text by `. `, `! `, `? ` including periods INSIDE quotation marks. Each split segment needs a matching translation.

## Common Issue
When dialogue contains multiple sentences within quotes:
```
"Today is my mother's birthday. I want some cakes."
```
This gets split into TWO sentences, but a single translation like:
```
「今日は母の誕生日なの。ケーキがほしいの。」
```
...would cause a mismatch.

## Verification Steps

### 1. Open the Problem in the App
Navigate to the problem and enter Learning Mode.

### 2. Click Each Sentence
Click on each English sentence in the left panel. The translation popup should appear.

### 3. Check Alignment
- ✅ **Good**: The translation matches ONLY the highlighted sentence
- ❌ **Bad**: The translation contains more content than highlighted

### 4. Fix Mismatches
If translations don't align:
1. Count the English sentence splits (including within quotes)
2. Split the Japanese translation to match
3. Each quoted sentence like "Today is my birthday. I want cake." needs **two** translation entries

## Example Fix

**Before (wrong):**
```javascript
"彼女は「今日は母の誕生日なの。ケーキがほしいの」と言いました。"
```

**After (correct):**
```javascript
"彼女は「今日は母の誕生日なの。",
"ケーキがほしいの」と言いました。"
```

## Paragraph Types to Watch
- **Dialogue with multiple sentences**: Mr. Hoshi said, "A. B. C."
- **Long quotes**: "First sentence. Second sentence. Third?"
- **Multiple speakers in one paragraph**

## Known Issue: Nested Quotes

> [!WARNING]
> The sentence splitter breaks on nested quotes like `'One Heart.'"`

**Bad (causes mangled display):**
```
Its name is 'One Heart.'"
```

**Good (move period outside inner quote):**
```
Its name is 'One Heart'."
```

When content has `'text.'` inside `"quotes"`, move the period outside the single quote.

## Automated Validation

> [!IMPORTANT]
> Run the validation script after adding/modifying translations

```bash
// turbo
node scripts/validateTranslations.js
```

This script:
- Counts English sentences using the same logic as LeftPanel.jsx
- Counts Japanese translations for each paragraph
- Reports any mismatches with detailed debugging info
- Warns about nested quote patterns that may cause issues

**Expected output** (when all aligned):
```
=== Translation Alignment Validator ===
=== Summary ===
Total problems checked: X
Errors: 0
Warnings: 0
✅ All translations are properly aligned!
```

## Quick Check Command
// turbo
Run the app and test the new problem's translation popups before marking complete.
