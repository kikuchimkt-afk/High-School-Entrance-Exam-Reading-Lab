---
description: Add a new reading problem to the application
---

# Workflow: Add New Problem

Follow these steps to add a new problem (Passage, Questions, Explanations) to the system.

## 1. Prepare Data
Ensure you have:
-   **Passage Text**: The English text.
-   **Japanese Translation**: Sentence-by-sentence translation.
-   **Questions**: Question text, 4 options, and correct answer key.
-   **Explanations**: Detailed reasoning for the answer.

## 2. Format Passage Text
Navigate to the appropriate data file in `src/data/problems/`:
- `grade1.js`: For 1st year (中1)
- `grade2.js`: For 2nd year (中2)
- `grade3.js`: For 3rd year (中3)
- `exam.js`: For Entrance Exam (受験生)

Add your problem data to the exported array (e.g., `grade3Problems`).

AFTER adding the data, ensure `src/data/mockData.js` is correctly importing and spreading the array (this is usually already done, but verify if adding a new file):
```javascript
import { gradeXProblems } from './problems/gradeX';
// ...
export const mockProblems = [
    // ...
    ...gradeXProblems
];
```

Format the passage text:
-   **Structure**: Add text as strings in the `content` array (one string per paragraph).
-   **Underlines**: Use `<u>...</u>` for underlined sections (e.g., `<u>emphasized text</u>`).
-   **Images**: Use `[IMAGE:/path/to/image.png]` to insert images.
-   **Speakers**: For dialogue, start lines with `Name: ` (e.g., `Mr. Hill: `).
-   **Blank Parentheses (Auto-Expand)**: Always expand empty parentheses found in the source text `()` to include ample spacing: `(          )`. Use approx. 8-10 spaces.

## 3. Define Questions and Explanations
Add data to the `questions` and `explanations` objects.

### Interactive References (Green Highlights)
In the explanation text (`stepData`, `detail`, or `summary`), link back to specific sentences in the passage using `<ref>` tags:

```html
<ref target="P-S">Related text</ref>
```

-   **P**: Paragraph Index (0-based).
-   **S**: Sentence Index (0-based) within that paragraph.
    -   *Note*: Sentences are split by `. `, `! `, `? `. Use the browser view to confirm sentence indices if unsure.
-   **Multiple Targets**: `<ref target="0-1,0-2">...</ref>`
-   **Japanese References**: You can also wrap Japanese text that summarizes or translates the passage content: `<ref target="0-1">買い物は便利だ</ref>`
-   **Essay/Free-Text**: For the `detail` field, you MUST provide a structured breakdown for **EACH** example answer:
    -   **Format**: `[Example 1]<br><span style="color: #0066cc;">English Text</span><br>(Trans) ...<br>(Point) ...`
    -   **Requirement**: Include English (Blue), Translation, and Point for ALL examples.
    -   **CSS**: Use inline style `color: #0066cc` for the English text.

### Vocabulary Extraction Rules
-   **Scope**:
    -   **Source**: Extract words ONLY from the **passage text or question text**. Do NOT list abstract words explaining the logic (e.g., "context", "flow").
    -   **Location**: Normally from the same paragraph/turn as the answer, but expand to surrounding text if needed to meet the count.
-   **Quantity**:
    -   **Advanced Mode (Examinee)**: List **at least 7 words**.
    -   **Beginner Mode**: List **at least 12 words** (The 7 advanced words + 5 easier words).
    -   *Note*: If fewer words are available in the immediate scope, look at the previous or next paragraph.

### Data Formatting Rules
-   **Multi-item Questions**: When a question has multiple items to evaluate (e.g., ア～オ), always use the `options` array to list them, NOT inline `\n` in the `text` field. This ensures proper bulleted list display.
-   **Labels in Options**: Include labels (ア, イ, ウ...) directly in the option strings when the question uses Japanese-style labels.

### Print Layout Rules
-   **Options Display**: Options should be displayed **horizontally** (flexbox wrap) in print to save vertical space.
-   **Dynamic Font Sizing**: The passage font size (9pt~11pt) and line-height (1.4~1.75) adjust automatically based on question count and content length to balance column heights. Configured in `PrintLayout.jsx`.
-   **Footnotes Placement**: Footnotes are placed at the **bottom of the left column** (below the passage and source), to utilize empty space when the right column has many questions.
-   **Source Format**: Always use **half-width digits** (e.g., `2024年度12月` not `２０２４年度１２月`).

## 4. Add Intent Data (Instructor Aid)
For each question, define the `questionIntent`:
-   `basedOnSentences`: Array of sentence keys (e.g., `['0-1']`).
-   `focusPoints`: Key grammatical or logic points.

## 5. Verification
Run the app and verify:
1.  **Splitting**: Check that sentences are split correctly (especially around `<u>` tags).
2.  **Highlights**: Click the green links in the explanation. Verify the corresponding sentence in the Left Panel turns green.
3.  **Popup**: Verify the translation popup appears automatically when a reference is clicked.
4.  **Parentheses**: Verify that all blank parentheses `(          )` have sufficient spacing (approx. 8-10 spaces) and are not collapsed to `()`.
5.  **Vocabulary**: Verify that Advanced mode has **at least 7 words** and Beginner mode has **at least 12 words** in the "Important Vocabulary" section.

### Final Verification Checklist
After completing the file creation, perform these checks to ensure high quality:

1.  **Sentence Alignment**:
    *   Click on the **last sentence** of every paragraph in the UI. Ensure the translation popup appears and **does not** say "Translation not found".
    *   If the last sentence has no translation, it usually means the English text was split into more sentences than the translation array allows.
2.  **Validation Script**:
    *   Add your new problem to the import list in `scripts/validateTranslations.js` (e.g., `import problem7 from '../src/data/problems/exam_tokushima_2025_7.js'`).
    *   Run `node scripts/validateTranslations.js` in the terminal.
    *   **PASS**: "✅ All translations are properly aligned!"
    *   **FAIL**: Fix the mismatch reported by the script.
3.  **Visual Check**:
    *   Verify that `(      )` blank spaces are wide enough (approx 10 spaces).
    *   Verify that new vocabulary words are relevant and extracted from the text.
