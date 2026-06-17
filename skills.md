# skills.md — Reusable Skill Playbooks for Rupam's AI Planet

Each skill is a step-by-step recipe for a common task in this project.
Load the relevant skill at the start of a task to avoid mistakes.

---

## Skill: Add a New Subtopic

Use this when adding a new lesson page inside an existing topic.

**Steps:**
1. Open `src/data.js`
2. Locate the parent topic object (either in `data` or `sidebarCategories`)
3. Add a new key under `subs` — the key is the display name shown in the sidebar
4. Set these fields:
   ```js
   "My New Lesson": {
     slug: "my-new-lesson",          // kebab-case, globally unique
     title: "My New Lesson Title",   // shown as the H1 on the page
     body: null,
     table: null,
     example: null,
     sections: [                     // all content goes here
       { type: "heading", level: 2, text: "First Heading" },
       { type: "paragraph", text: "Intro paragraph." },
     ]
   }
   ```
5. Verify the slug is unique: search data.js for the slug string
6. Run `npm run dev` and navigate to `/:topicSlug/:newSlug` to verify it renders
7. Run `npm run build` to confirm no build errors

---

## Skill: Add a New Topic Group

Use this when adding a brand-new top-level section to the sidebar.

**Steps:**
1. Open `src/data.js`
2. Add a new top-level key to `data` (or `sidebarCategories` if it's a secondary group):
   ```js
   "New Topic Name": {
     slug: "new-topic-slug",   // kebab-case, globally unique
     icon: "🔧",              // emoji shown in sidebar
     subs: { }                 // add subtopics using the Add Subtopic skill
   }
   ```
3. Confirm that `App.jsx` still resolves the default route — it uses `Object.values(data)[0]`,
   so the first entry in `data` remains the landing page unless the user requests a change
4. Run `npm run dev` and click the new sidebar section to verify expansion works
5. Run `npm run build`

---

## Skill: Add an Image to a Tutorial Page

**Steps:**
1. Copy the image file into `public/images/claude-code/`
   - Naming convention: `topic-descriptive-name.png`
2. Add a section object in `src/data.js`:
   ```js
   { type: "image", src: "/images/claude-code/your-image.png" }
   ```
3. Run `npm run dev` — navigate to the page and confirm the image loads
4. If it shows a placeholder (broken icon), double-check the filename and path
5. Run `npm run build` — Vite copies `public/` into `dist/` automatically

---

## Skill: Add a New Section Type

Use this only when the existing types (heading/paragraph/code/link/list/table/image) are insufficient.

**Steps:**
1. Add the new type to the `switch` statement in `SectionRenderer` inside `src/components/TutorialPage.jsx`
2. Add the CSS class for the new element to `src/index.css`
3. Document the new type in `Rules.md` under "Section Types"
4. Update `CLAUDE.md` section type table
5. Test with a sample entry in data.js before adding real content

---

## Skill: Deploy to Firebase

**Steps (must run in order):**
```bash
npm run build           # 1. Build — must succeed
firebase deploy         # 2. Deploy dist/ to Firebase Hosting
```

Firebase project: `artificial-techuniverse` (see `.firebaserc`)
The `dist/` folder is what Firebase serves — never deploy from `src/`.
After deploy, verify the live URL loads the first topic page correctly.

---

## Skill: Fix a Missing or Broken Image

**Symptom:** Image placeholder (🖼) shows instead of the image on a tutorial page.

**Diagnosis steps:**
1. Check the `src` value in data.js — must start with `/images/claude-code/`
2. Check that the file exists in `public/images/claude-code/`
3. Check that `dist/images/claude-code/` contains the file (run `npm run build` if not)
4. Check the filename case — Windows is case-insensitive but Firebase Hosting is not

**Fix:** Correct the path in data.js or copy the missing image file, then rebuild.

---

## Skill: Update Navigation Order

The sidebar renders topics in `Object.entries()` insertion order from `data.js`.
To reorder topics or subtopics, reorder the keys in `data.js`.
There is no separate nav config — data.js IS the navigation.
