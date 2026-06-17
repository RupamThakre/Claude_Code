# agent.md — Subagent Patterns for Rupam's AI Planet

Use these patterns when a task is large enough to benefit from parallel subagents.

---

## When to Use Subagents

Spin up subagents when:
- Adding content to multiple topics at once (one agent per topic)
- Auditing the full data.js for structural errors while also editing CSS
- Researching external Claude Code docs while editing local content in parallel

Do NOT use subagents for single-file edits or simple slug additions.

---

## Pattern 1: Content Research Agent

**Goal:** Research and draft new tutorial content for a subtopic.

**Prompt template:**
```
You are a content researcher for a React tutorial site about Claude Code.
Research the topic: "<TOPIC_NAME>".
Return a structured array of section objects using only these types:
  heading (level 2 or 3), paragraph, code, list, table, image (placeholder src only).
Do NOT write JSX or React code. Only return the sections[] array as valid JS.
Base your content on official Claude Code docs and best practices.
```

**Output:** Paste the returned `sections[]` array directly into `src/data.js` under the correct subtopic.

---

## Pattern 2: Data Validator Agent

**Goal:** Validate the entire `src/data.js` for structural correctness.

**Prompt template:**
```
Read src/data.js in the project at d:\Code_2026\8_AI\rupams-ai-planet.
Check for:
1. Duplicate slugs across data and sidebarCategories
2. Section objects missing required fields (see Rules.md)
3. Image srcs that don't follow the /images/claude-code/ pattern
4. Any section type not in: heading, paragraph, code, link, list, table, image
Report issues as a numbered list. Do not make any edits.
```

---

## Pattern 3: Style Audit Agent

**Goal:** Audit CSS for unused classes or inconsistencies.

**Prompt template:**
```
Read src/index.css and all files in src/components/ in this project.
Find CSS class names defined in index.css but never used in any .jsx file.
Find className strings used in .jsx files but not defined in index.css.
Report two lists: Unused CSS classes / Missing CSS definitions.
Do not make any edits.
```

---

## Pattern 4: Parallel Topic Addition

When adding content to 2+ topics at once, run one Content Research Agent per topic in parallel,
then merge the results into data.js sequentially to avoid conflicts.

**Step 1 — Spawn agents in parallel (one per topic):**
Each agent runs Pattern 1 above with its specific topic name.

**Step 2 — Merge sequentially:**
Edit data.js one topic at a time, pasting each agent's sections[] output.

**Step 3 — Validate:**
Run Pattern 2 (Data Validator Agent) after all additions.

---

## Pattern 5: Firebase Deploy Agent

**Goal:** Build and deploy to Firebase with a pre-flight check.

**Steps (run sequentially, not in parallel):**
1. Run `npm run build` — must succeed with no errors
2. Run `firebase deploy` — deploys dist/ to Firebase Hosting
3. Visit the hosted URL and verify the first page loads correctly

If build fails: fix errors before deploying. Never skip the build step.
