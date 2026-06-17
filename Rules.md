# Rules.md — Coding Rules for Rupam's AI Planet

These rules are non-negotiable. Claude MUST follow all of them in every session.

---

## 1. Content lives only in data.js

NEVER hardcode tutorial text, headings, lists, or images inside JSX components.
All content goes into `src/data.js` as structured section objects.
Components are renderers — they must remain content-free.

## 2. Use the established section types

When adding content, use only these section `type` values:
`heading` | `paragraph` | `code` | `link` | `list` | `table` | `image`

To add a new content pattern, add a new case to `SectionRenderer` in `TutorialPage.jsx`
AND document the new type here. Never invent types that aren't handled by SectionRenderer.

## 3. No inline styles

All styling goes in `src/index.css`. Never use the `style` prop on JSX elements.
If a new UI pattern needs styles, add a CSS class to index.css.

## 4. Slug uniqueness

Every `slug` in data.js must be globally unique across both `data` and `sidebarCategories`.
Slugs use kebab-case. Check for collisions before adding a new topic or subtopic.

## 5. Image placement

Images MUST be placed in `public/images/claude-code/`.
They MUST be referenced in data.js as `/images/claude-code/filename.ext`.
Never reference images from `src/` or with relative paths.

## 6. No new dependencies without asking

Do not install npm packages without confirming with the user first.
The project intentionally stays lean (React + Router + Vite only for the app).

## 7. Build before deploy

Always run `npm run build` successfully before running `firebase deploy`.
Never deploy from source — Firebase serves from `dist/` only.

## 8. Do not modify App.jsx routing logic

The default redirect and route pattern are intentional. Changes to routing require
explicit user approval. The pattern `/:topicSlug/:subtopicSlug` must be preserved.

## 9. Keep data.js exports stable

`data.js` has two exports: `export default data` and `export const sidebarCategories`.
Do not rename, split, or restructure these exports — all components import them directly.

## 10. No secrets in source

Never write API keys, Firebase tokens, or credentials anywhere in the codebase.
`.env` is gitignored — direct the user to use that file for secrets.

## 11. Prefer editing over creating

Before creating a new component, check if an existing one can be extended.
Keep the component count minimal — the current structure is intentional.

## 12. Commit messages must be descriptive

Format: `<type>: <what changed>`
Examples: `content: add MCP Servers subtopic`, `fix: image path for demo2-img3`, `style: improve sidebar active state`
