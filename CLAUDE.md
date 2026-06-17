# Rupam's AI Planet — CLAUDE.md

> Claude Code reads this file automatically at session start.
> Keep it under 250 lines. Rules live in @Rules.md. Agents in @agent.md. Skills in @skills.md.

## Project Overview

**Rupam's AI Planet** is a React + Vite tutorial web app that teaches the Claude Code course.
It is deployed on Firebase Hosting at the `artificial-techuniverse` project.

The site is a two-level navigation: **Topic → Subtopic**. Every page is driven by structured
data — no content is hardcoded inside components.

## Tech Stack

| Layer | Tool | Version |
|---|---|---|
| UI | React | 18.3 |
| Routing | React Router DOM | 6.26 |
| Build | Vite | 5.4 |
| Hosting | Firebase | — |
| PDF/Canvas | pdfjs-dist / canvas | — |

## Project Structure

```
src/
  data.js              ← ALL content lives here (default export + sidebarCategories)
  App.jsx              ← BrowserRouter, Routes, default redirect to first topic
  main.jsx             ← React DOM entry point
  index.css            ← Global styles — single stylesheet, no inline styles
  components/
    Header.jsx         ← Top bar ("Rupam's AI Planet")
    Navbar.jsx         ← Top nav tabs
    Sidebar.jsx        ← Collapsible topic/subtopic tree
    TutorialPage.jsx   ← Reads URL params, renders SectionRenderer
    NotFound.jsx       ← 404 fallback

public/
  images/claude-code/  ← All tutorial images (served at /images/claude-code/…)

dist/                  ← Vite build output — deployed to Firebase
```

## Commands

```bash
npm run dev        # Local dev server (Vite HMR)
npm run build      # Production build → dist/
npm run preview    # Preview dist/ locally
firebase deploy    # Deploy dist/ to Firebase Hosting
```

## Content Model

All content is defined in `src/data.js`. The shape is:

```js
const data = {
  "Topic Name": {
    slug: "topic-slug",
    icon: "emoji",
    subs: {
      "Subtopic Name": {
        slug: "subtopic-slug",
        title: "Page Title",
        body: null,        // plain text intro (legacy) OR null
        table: null,       // intro table rows OR null
        example: null,     // code string OR null
        sections: [ ... ], // preferred — array of typed section objects
      }
    }
  }
}
export const sidebarCategories = { ... }  // second group of topics
export default data
```

### Section Types (used in `sections` arrays)

| type | required fields |
|---|---|
| `heading` | `level` (2 or 3), `text` |
| `paragraph` | `text` |
| `code` | `text` (preformatted string) |
| `link` | `href`, `text` |
| `list` | `items` (string[]) |
| `table` | `headers` (string[]), `rows` (string[][]) |
| `image` | `src` ("/images/…" path) |

## Routing

URL pattern: `/:topicSlug/:subtopicSlug`

The app auto-redirects `/` to the first topic + first subtopic found in `data`.
`topicSlug` and `subtopicSlug` must match the `slug` fields in `data.js` exactly.

## Images

- Place image files in `public/images/claude-code/`
- Reference them in data.js as `src: "/images/claude-code/filename.png"`
- After adding images, run `npm run build` to copy them into `dist/`

## Compact Instructions

When compacting, always retain:
- The current data.js slug being worked on
- Any new section structure being added
- Firebase deploy status

## Important Rules

See @Rules.md for the full rule set.
See @agent.md for subagent patterns.
See @skills.md for reusable skill playbooks.
