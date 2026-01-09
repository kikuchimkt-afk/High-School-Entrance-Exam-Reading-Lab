# Layout & Data Guidelines: High School Entrance Exam Reading Lab

This document defines the strict layout and data creation standards established to ensure consistent, high-quality rendering of reading comprehension problems, specifically focusing on dialogue formatting and print output.

**Adhere to these guidelines for ALL future problem additions.**

## 1. Dialogue Layout Standards

Dialogue sections must be formatted to resemble a standard test paper, ensuring readability across devices (Tablets/PC) and preventing layout shifts.

### Visual Specification
- **Speaker Name**: 
  - **Font Weight**: **Bold** (`700`)
  - **Style**: *Italic*
  - **Width**: Fixed (`85px` on Screen, `60px` in Print)
  - **Wrapping**: No wrapping (`white-space: nowrap`)
  - **Position**: Left-aligned, fixed column.
- **Dialogue Content**:
  - **Alignment**: Starts at a fixed offset from the left, aligning perfectly vertically regardless of speaker name length.
  - **Line Spacing**: No vertical margin between dialogue turns (`margin: 0`).
  - **Wrapping**: Wraps naturally, maintaining the left edge alignment (hanging indent effect via distinct columns).

### Implementation Logic (Flexbox)
**Do NOT** use hanging indents (`text-indent`) or table layouts. Use **Flexbox**.

#### HTML Structure (React)
```jsx
// Within the paragraph mapping loop:
const speakerMatch = paragraph.match(/^([A-Za-z. ]+):\s*(.*)/s);

if (speakerMatch) {
    return (
        <div className={styles.dialogueRow}>
            <div className={styles.speakerName}>
                {speakerMatch[1]}:
            </div>
            <div className={styles.dialogueContent}>
                {/* Processed Text (e.g. <u> tags, clickable spans) */}
                {speakerMatch[2]}
            </div>
        </div>
    );
}
```

#### CSS Rules (`styles.module.css` & `print.module.css`)
```css
.dialogueRow {
  display: flex;
  align-items: flex-start;
  margin: 0; 
  padding: 0;
}

.speakerName {
  flex-shrink: 0;
  width: 85px; /* 60px for Print */
  min-width: 60px;
  font-weight: 700;
  font-style: italic;
  white-space: nowrap;
  line-height: 1.5;
}

.dialogueContent {
  flex: 1;
  line-height: 1.5;
}
```

---

## 2. Print Layout Guidelines (`PrintLayout.jsx`)

The print view must perfectly mimic a paper exam.

### Key Rules
1.  **Dialogue Rendering**: MUST use the same Flexbox logic as the screen view. Do not use simple `<p>` tags for dialogue.
2.  **Question Formatting**:
    - **Question Numbers**: Render exactly as provided in data. If data has `(1)`, render `(1)`. **Do not add extra parentheses** in code (e.g., `({q.number})` is FORBIDDEN).
    - **Question Text**: 
      - **Weight**: Normal (`font-weight: normal`). **Do NOT use bold.**
      - **Newlines**: Respect `\n` in strings by splitting and rendering `<br />`.
    - **Write-in Spaces**: **Do NOT** render underlines (`______`) for write-in questions. Providing empty space is sufficient.
3.  **Answer Key**:
    - **Layout**: Horizontal, wrapping flex row (`flex-direction: row`).
    - **Format**: `(Number) Answer`. Do not double-wrap numbers.

---

## 3. Data Creation Rules (`mockData.js`)

When adding new problems (e.g., `p3`, `p4`...), follow these strict data formatting rules.

### Problem Content (`content`)
- **Dialogue**: Must start with `Speaker Name:` (e.g., `Mr. Green: ...`).
- **Underlines**: Use `<u>...</u>` for underlined text.
- **Line Breaks**: Use `\n\n` for paragraph breaks.

### Questions (`questions`)
- **Numbering**: Include necessary formatting in the string if desired, or keep it simple.
  - Recommended: `number: "(1)"`, `number: "(2)"` (if parentheses are part of the UI design).
  - **Constraint**: The UI simply renders `{q.number}`. If you want `(1)`, put `"(1)"` in the data.
- **Text**:
  - Use `\n` for line breaks within questions.
  - **Do NOT** put `( )` spaces for answers if using the `fill-in-blank` type logic where the app might auto-insert specific UI. However, for Standard Print Layout, including `(     )` in the text is acceptable.
- **Answer**:
  - For choices: `answer: 0` (Index of option).
  - For strings: `answerLabel: "Word / Word"`.

### Example Data Entry
```javascript
{
    id: "pX",
    // ...
    questions: [
        {
            id: "pX_q1",
            number: "(1)", // Correct: Includes format
            text: "This is a question.\nAnswer the following.", // \n for formatting
            options: [ ... ],
            answer: 0
        }
    ]
}
```

---

## 4. Implementation Checklist for New Problems

1.  [ ] **Copy Schema**: Start by copying the structure of `koalaProblem` or `weddingRegistry`.
2.  [ ] **Verify Dialogue**: Ensure all dialogue lines in `content` match the `Name:` regex pattern.
3.  [ ] **Check Print**: Open `/?problemId=...&mode=print` immediately after adding.
    - [ ] Are speaker names aligned?
    - [ ] Are speaker names bold & italic?
    - [ ] Are question numbers correct (no double `((1))` )?
    - [ ] Is question text normal weight (not bold)?
    - [ ] Is the answer key horizontal?
4.  [ ] **Verify Screen**: Check Tablet/Mobile width response. Speaker names should not overlap text.
