# System Design & Logic Documentation

This document details the core logic and visual systems implemented in the "Explanation Creator" application, specifically focusing on the text processing, highlighting, and interaction mechanisms.

## 1. Sentence Splitting & Text Processing (`LeftPanel.jsx`)

The generic text of a problem is processed to handle Eiken-specific formatting (underlines, dialogue) and to enable sentence-level interactivity.

### Logic Pipeline
1.  **Paragraph Iteration**: The content is split by newlines.
2.  **Dialogue Detection**: Regex `^([A-Za-z. ]+):` detects speakers (e.g., "Mr. Hill:").
3.  **Protection Phase**: 
    - Common abbreviations (e.g., `Mr.`, `U.S.`) are replaced with placeholders to prevent incorrect modification of splitting.
    - **Crucial**: We explicitly do **not** protect `<u>` tags here to allow sentence splitting inside or across underlined sections.
    - **Space Injection**: To ensure regex correctly splits sentences ending with a tag (e.g., `... end.</u>`), we inject a space: `.replace(/([.!?])<\/u>/g, '$1 </u>')`.
4.  **Sentence Splitting**: 
    - Regex: `/[^.!?]+[.!?]+"?(\s+|$)/g`
    - This splits text based on punctuation (`.`, `!`, `?`) followed by whitespace or end of string.
5.  **Tag Balancing**:
    - Since splitting ignores tags, a sentence might end up being `<u>Start of sentence.`.
    - We iterate through the split sentences and maintain an `isUnderlineOpen` state.
    - If a sentence has unbalanced tags (Open > Close), we append `</u>` and set state to Open.
    - If the next sentence starts while Open, we prepend `<u>`.
6.  **Placeholder Restoration**: Abbreviations are restored.

### Rendering
- `parseRichText` handles `<u>...</u>` tags and renders them as `<span class="underlined">`.
- CSS class `.underlined` ensures visibility (`text-decoration: underline`).

## 2. Interaction System (`RightPanel.jsx` -> `MainLayout` -> `LeftPanel`)

The application supports cross-referencing where clicking an explanation highlights the relevant sentence in the text.

### Data Flow
1.  **Trigger**: User clicks a reference in `RightPanel`.
2.  **Action**: `setRelatedHighlights` (lifted to `MainLayout`) is called with a Set of IDs (e.g., `{'0-1'}`).
3.  **Prop Propagation**: `relatedHighlights` is passed down to `LeftPanel`.
4.  **Reaction (`LeftPanel`)**:
    - Usage of `relatedHighlights.has(key)` to apply `.relatedSentence` class (Green Highlight).
    - **Auto-Popup**: A `useEffect` detects changes to `relatedHighlights`. If not empty, it:
        - Calculates position of the referenced sentence (using ID `sentence-P-S`).
        - Displays the Translation Popup automatically.
    - **Auto-Clear**: A global click listener is attached (with small delay) to clear highlights when clicking elsewhere.

## 3. Data Schema For New Problems

To support these features, data in `readingData.js` (or similar) must follow these conventions:

### Text Format
- Use `<u>...</u>` for underlined sections.
- Use `[IMAGE:path]` for inserting images between paragraphs.
- Sentences are auto-indexed (0-0, 0-1, etc.).

### Explanation Internal References
- To create a clickable green link in the explanation:
  ```html
  <ref target="0-1">First sentence</ref>
  ```
  - `target`: `ParagraphIndex-SentenceIndex`.
  - Can be comma-separated: `target="0-1,0-2"`.

## 4. Visual Styles (`styles.module.css`)

- **`.explanationFrame`**: Applied to the Right Panel container when an explanation is active (Green Border).
- **`.relatedSentence`**: Green background highlight for referenced sentences.
- **`.underlined`**: Standard underline style for `<u>` tags.
