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
Navigate to `src/data/readingData.js` (or relevant data file).
Format the passage text:
-   **Structure**: Add text as strings in the `content` array (one string per paragraph).
-   **Underlines**: Use `<u>...</u>` for underlined sections (e.g., `<u>emphasized text</u>`).
-   **Images**: Use `[IMAGE:/path/to/image.png]` to insert images.
-   **Speakers**: For dialogue, start lines with `Name: ` (e.g., `Mr. Hill: `).

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

## 4. Add Intent Data (Instructor Aid)
For each question, define the `questionIntent`:
-   `basedOnSentences`: Array of sentence keys (e.g., `['0-1']`).
-   `focusPoints`: Key grammatical or logic points.

## 5. Verification
Run the app and verify:
1.  **Splitting**: Check that sentences are split correctly (especially around `<u>` tags).
2.  **Highlights**: Click the green links in the explanation. Verify the corresponding sentence in the Left Panel turns green.
3.  **Popup**: Verify the translation popup appears automatically when a reference is clicked.
