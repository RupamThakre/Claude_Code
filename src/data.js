const data = {
  "Claude Code": {
    slug: "claude-code",
    icon: "",
    subs: {
      "Topics": {
        slug: "topics",
        title: "Introduction — Claude Code Course",
        body: `This course takes you from zero to production with Claude Code — Anthropic's AI-powered CLI for software development. Each module solves a real pain point you'll encounter when working with AI coding tools.`,
        table: [
          {
            topic: "Setup, Modes, Permissions & Customization",
            problem: "You install Claude Code. You run it. It asks permission for every single command. Or worse — it doesn't ask, and edits something it shouldn't.",
            solution: "Master every mode — from Safe to YOLO. Lock down permissions with 3 guards: Allow, Ask, Deny. Teach Claude Code how to talk to you with output styles. Write a CLAUDE.md so you never have to repeat yourself.",
          },
          {
            topic: "Context, Sessions & Checkpoints",
            problem: "Two hours into a complex task, Claude's context window fills up. You panic. You hit clear. You lose everything.",
            solution: "Learn the invisible fuel tank — the context window — and how to stretch it. Fork sessions like Git branches. Use checkpoints — Ctrl+Z on steroids — to rewind any change, anytime.",
          },
          {
            topic: "Claude Code + GitHub",
            problem: "You push your code. Then you context-switch to GitHub. Review your own PR. Write the description. Tag reviewers. Wait.",
            solution: "Imagine this instead — you push your code, and before you even open GitHub, AI has reviewed it, fixed bugs, and opened the pull request. Tag @claude on any issue, and it ships a fix. All demoed on a demo project.",
          },
          {
            topic: "Rules, Memory & Skills Hooks",
            problem: "Your CLAUDE.md has grown into a 2,000-line monster. Claude reads all of it on every prompt. Slow, expensive, and half of it isn't even relevant.",
            solution: "You'll break that monolith into modular Rules. You'll watch Claude write its own memory — auto-memory, the notebook you never have to maintain. And you'll build Skills — expertise Claude loads only when it needs it. Lean. Fast. Surgical.",
          },
          {
            topic: "MCP Servers",
            problem: "Claude knows your code. But it doesn't know your browser. Your database. Your latest framework docs. So it hallucinates.",
            solution: "MCP — the USB-C of AI. One protocol that connects Claude to anything. Plug in Chrome Dev Tools, Playwright, Context7.",
          },
          {
            topic: "Subagents & Agent Teams",
            problem: "You ask Claude to review your code. You get one opinion. From one perspective.",
            solution: "You spin up three subagents — a security reviewer, a performance reviewer, a style reviewer. They work in parallel. You get three deep reviews in the time of one. This is the divide-and-conquer pattern that turns Claude Code from a single agent into a team.",
          },
        ],
        example: null,
      },
      "About Claude Code & Installation": {
        slug: "about-claude-code-installation",
        title: "About Claude Code & Installation",
        body: null,
        example: null,
        sections: [
          {
            type: "heading",
            level: 2,
            text: "What is Claude Code?",
          },
          {
            type: "paragraph",
            text: "Claude Code is an agentic coding assistant that can generate code, understands your codebase, edits files, runs commands, and works right inside your terminal, IDE, or browser.",
          },
          {
            type: "heading",
            level: 3,
            text: "What is a coding assistant?",
          },
          {
            type: "paragraph",
            text: "A coding assistant is an AI-powered pair programmer that understands your code, suggests fixes, and handles repetitive tasks — helping developers write, debug, and build faster so they can focus on what matters most.",
          },
          {
            type: "heading",
            level: 2,
            text: "Claude Code Installation",
          },
          {
            type: "link",
            href: "https://code.claude.ai/docs/en/overview#get-started",
            text: "https://code.claude.ai/docs/en/overview#get-started",
          },
          {
            type: "paragraph",
            text: "Windows CMD:",
          },
          {
            type: "code",
            text: "curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd",
          },
          {
            type: "image",
            src: "/images/claude-code/installation-output.png"
        },
          {
            type: "heading",
            level: 2,
            text: "Getting Started",
          },
          {
            type: "paragraph",
            text: "Open your terminal inside a project folder and run the claude command to launch Claude Code. Once the session started, try login using /login command. Once logged in, you can ask or give instructions to claude code.",
          },
          {
            type: "paragraph",
            text: "For example, to quickly understand the codebase and its structure, start by asking questions such as:",
          },
          {
            type: "list",
            items: [
              '"I am new to this project. Explain me"',
              '"How does authentication works in this project"',
              '"Add a new section in the home page about visitor metrics"',
            ],
          },
          {
            type: "image",
            src: "/images/claude-code/getting-started-screen.png"
          },
          {
            type: "heading",
            level: 3,
            text: "Demo",
          },
          {
            type: "paragraph",
            text: "Scenario – You are a new developer, unaware about the codebase – take Claude Code help to understand it.",
          },
          {
            type: "list",
            items: [
              "Download zip file — https://github.com/faker-js/faker",
              "Open downloaded project in terminal and ask your question. It will give the complete picture of your codebase.",
              "Earlier, previous developer had to share project experience and knowledge to new developers — Claude Code replaces that bottleneck entirely.",
            ],
          },
          {
            type: "image",
            src: "/images/claude-code/demo-codebase-overview.png"
           },
           {
            type: "image",
            src: "/images/claude-code/demo-codebase-overview1.png"
           }
        ],
      },
      "3 Ways to talk to Claude Code": {
        slug: "3-ways-to-talk-to-claude-code",
        title: "3 Ways to talk to Claude Code",
        body: null,
        example: null,
        sections: [
          {
            type: "paragraph",
            text: "Claude Code doesn't have just one type of command — it has three:",
          },
          {
            type: "table",
            headers: ["#", "Type", "Description"],
            rows: [
              ["1", "CLI Commands", "What you type before starting a session (in the terminal)"],
              ["2", "Slash Commands", "What you type during a session (inside the REPL), any command that is started with /(slash)"],
              ["3", "Special Notations", "Shortcuts that save you time while chatting"],
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "CLI Commands (Before the Session)",
          },
          {
            type: "paragraph",
            text: "These are the commands you run in your terminal to start or configure Claude Code.",
          },
          {
            type: "table",
            headers: ["CLI Command", "What it does?"],
            rows: [
              ["claude", "Start an interactive session"],
              ['claude "Fix the login bug"', "Start with a specific task (useful when asking question before starting a session)"],
              ['claude -p "query"', "Run a one-shot query and exit (headless mode – useful when you want to ask a question and exit out)"],
              ["claude --model opus", "Start with a specific model"],
              ["claude -c", "Continue your last session"],
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Special Notations (Quick Shortcuts)",
          },
          {
            type: "paragraph",
            text: "These are tiny symbols with big impact. Use them while typing your prompt:",
          },
          {
            type: "table",
            headers: ["Notation", "What it does?"],
            rows: [
              ["@src/main.py", "Reference a specific file — Claude reads it instantly"],
              ["!git status", "Run a shell command directly without Claude's conversational processing (eg. ! pwd – a bash command, will not go to Claude session)"],
              ["#", "Add a quick note to Claude's memory for this session"],
            ],
          },
          {
            type: "paragraph",
            text: "@ is for pointing Claude to a file\n! is for running terminal commands the fast way\n# is for quick context that Claude should remember",
          },
        ],
      },
      "Integrate Claude Code to VS Code": {
        slug: "integrate-claude-code-to-vs-code",
        title: "Integrate Claude Code to Visual Studio Code",
        body: null,
        example: null,
        sections: [
          {
            type: "link",
            href: "https://code.claude.com/docs/en/overview#vs-code",
            text: "https://code.claude.com/docs/en/overview#vs-code",
          },
          {
            type: "paragraph",
            text: "Add Claude Code for VS Code extension",
          },
          {
            type: "image",
            src: "/images/claude-code/claude1.png",
          },
          {
            type: "heading",
            level: 2,
            text: "To use Claude Code",
          },
          {
            type: "heading",
            level: 3,
            text: "[Option 1] – Click on Claude Code icon in the top right corner",
          },
          {
            type: "paragraph",
            text: "Click on the Claude Code icon shown on the top right corner whenever you open any of the app files.",
          },
          {
            type: "image",
            src: "/images/claude-code/claude2.png",
          },
          {
            type: "heading",
            level: 3,
            text: "[Option 2] – CTRL + SHIFT + P – Open command search",
          },
          {
            type: "list",
            items: [
              "Press CTRL + SHIFT + P to open the command search palette",
              "Type Claude Code and select the desired option",
              "Choose: Claude Code: Open in Side Bar",
            ],
          },
          {
            type: "image",
            src: "/images/claude-code/claude3.png",
          },
          {
            type: "heading",
            level: 3,
            text: "Open Claude Code in Terminal",
          },
          {
            type: "paragraph",
            text: "If you want to open Claude Code on Terminal directly – change this via settings. Search for claudeCode.useTerminal in VS Code Settings and enable the option: Launch Claude in the terminal instead of the native UI.",
          },
          {
            type: "image",
            src: "/images/claude-code/claude4.png",
          },
        ],
      },
      "Demo 1: Create Project in 2 Minute": {
        slug: "demo1-create-project-in-2-minute",
        title: "Demo 1: Create a new project via Claude Code in 2 minute",
        body: null,
        example: null,
        sections: [
          {
            type: "heading",
            level: 2,
            text: "Step 1 — Create empty project folder named future-ai",
          },
          {
            type: "paragraph",
            text: "Create an empty project folder named future-ai on your machine and open it in VS Code.",
          },
          {
            type: "heading",
            level: 2,
            text: "Step 2 — Open Claude Code Chat window and paste the prompt",
          },
          {
            type: "paragraph",
            text: "Open the Claude Code Chat window inside VS Code and paste the following prompt:",
          },
          {
            type: "code",
            text: `Build a creative and interactive "Future Me" web application using HTML, CSS, and JavaScript.

The app should allow users to write a message to their future self and select a future date when the message should be revealed.

Requirements:
1) A clean and modern UI with smooth animations.
2) A form where the user can enter their name, a message to their future self, and a future date.
3) Store messages in localStorage so they persist after refreshing the browser.
4) A dashboard that shows saved messages and counts down the remaining time until they unlock.
5) When the selected date arrives, the message becomes visible with a nice reveal animation.
6) Add a dark/light mode toggle.
7) Use only vanilla JavaScript (no frameworks).
8) Organize the project into separate files: index.html, style.css, and script.js.

Bonus features:
Add motivational quotes.
Add a progress bar countdown.
Make the UI responsive for mobile devices.`,
          },
          {
            type: "heading",
            level: 2,
            text: "Step 3 — Provide all the necessary permissions",
          },
          {
            type: "paragraph",
            text: "Claude Code will ask for permission before writing each file. Grant the necessary permissions to allow it to create the project files.",
          },
          {
            type: "image",
            src: "/images/claude-code/demo1-step3.png",
          },
          {
            type: "heading",
            level: 2,
            text: "Step 4 — Generated files: .html, .js and .css",
          },
          {
            type: "paragraph",
            text: "Claude Code will generate the three files as instructed in the prompt — index.html, script.js, and style.css — inside the future-ai project folder.",
          },
          {
            type: "image",
            src: "/images/claude-code/demo1-step4.png",
          },
          {
            type: "heading",
            level: 2,
            text: "Step 5 — Run index.html & test app functionality",
          },
          {
            type: "paragraph",
            text: "Open index.html directly in a browser — no build step needed. Test the app by writing a message to your future self, selecting an unlock date, and verifying the countdown dashboard.",
          },
          {
            type: "image",
            src: "/images/claude-code/demo1-step5a.png",
          },
          {
            type: "image",
            src: "/images/claude-code/demo1-step5b.png",
          },
        ],
      },
      "Claude Code Modes": {
        slug: "claude-code-modes",
        title: "Claude Code Modes",
        body: null,
        example: null,
        sections: [
          {
            type: "heading",
            level: 2,
            text: "What Are Claude Code Modes?",
          },
          {
            type: "paragraph",
            text: "Think of modes like \"gears\" in a car. Just like you shift gears based on the road, Claude Code lets you shift modes based on your task. Each mode gives Claude a different level of freedom to act on your code. You can switch between modes anytime using Shift + Tab.",
          },
          {
            type: "paragraph",
            text: "The cycling order: Default Mode → Auto-Accept Mode → Plan Mode → (back to Default)",
          },
          {
            type: "paragraph",
            text: "The current mode is always visible at the bottom of the terminal, so you always know which \"gear\" you're in.",
          },
          {
            type: "table",
            headers: ["Mode", "What Claude can do", "Best For"],
            rows: [
              ["Default Mode", "Asks permission before every change", "Careful, step-by-step work"],
              ["Auto-Accept Mode", "Edits files without asking", "Fast, repetitive tasks"],
              ["Plan Mode", "Read-only – cannot change anything", "Research, planning, exploring"],
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Default Mode – The Safe Driver",
          },
          {
            type: "paragraph",
            text: "This is the standard mode you start with. Claude asks for your confirmation before editing any file or running any command. Think of it like a co-pilot who always checks with you before taking the wheel.",
          },
          {
            type: "paragraph",
            text: "When to use:",
          },
          {
            type: "list",
            items: [
              "When working on production code",
              "When you're new to Claude Code",
              "When making changes you want to review carefully",
              "When dealing with sensitive files or configurations",
            ],
          },
          {
            type: "paragraph",
            text: "How it works: Claude proposes a change → You review it → You approve or reject → Claude executes",
          },
          {
            type: "heading",
            level: 2,
            text: "Auto-Accept Mode – The Fast Lane",
          },
          {
            type: "paragraph",
            text: "Claude automatically applies file edits without waiting for your approval. The terminal shows \"auto-accept edit on\" when active. Some people call it \"Edit Mode,\" but the official name is Auto-Accept Mode.",
          },
          {
            type: "paragraph",
            text: "When to use:",
          },
          {
            type: "list",
            items: [
              "Repetitive refactoring across multiple files",
              "Code cleanup tasks",
              "Following a well-defined plan you've already reviewed",
              "When you want Claude to work while you grab a coffee",
            ],
          },
          {
            type: "paragraph",
            text: "Safety tip: Always commit your work before entering Auto-Accept Mode. If anything goes wrong, you can easily revert with git checkout.",
          },
          {
            type: "heading",
            level: 2,
            text: "Plan Mode – The Architect",
          },
          {
            type: "paragraph",
            text: "Claude enters a read-only state – it can look at your code but cannot change anything. Think of it as putting Claude in \"Architect Mode\" – observe, analyze, plan, but never execute. The terminal shows \"plan mode on\" when active.",
          },
          {
            type: "paragraph",
            text: "What Claude CAN do in Plan Mode:",
          },
          {
            type: "list",
            items: [
              "Read files and analyze code",
              "Search through your codebase",
              "Understand project structure and dependencies",
              "Build implementation strategies",
              "Ask you clarifying questions",
            ],
          },
          {
            type: "paragraph",
            text: "What Claude CANNOT do in Plan Mode:",
          },
          {
            type: "list",
            items: [
              "Edit or create files",
              "Run bash commands",
              "Install packages",
              "Make any modifications whatsoever",
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Plan Mode – The Recommended Workflow",
          },
          {
            type: "paragraph",
            text: "Step 1: Enter Plan Mode (Shift + Tab twice)",
          },
          {
            type: "list",
            items: [
              "Give your instruction: \"I want to add OAuth2 authentication. Create a detailed plan.\"",
              "Claude investigates the codebase and presents an implementation plan",
            ],
          },
          {
            type: "paragraph",
            text: "Step 2: Review and Refine",
          },
          {
            type: "list",
            items: [
              "Ask follow-up questions if anything is unclear",
              "Iterate until the plan looks good",
            ],
          },
          {
            type: "paragraph",
            text: "Step 3: Switch to Default or Auto-Accept Mode",
          },
          {
            type: "list",
            items: [
              "Press Shift + Tab to go back",
              "Say: \"Now implement this plan.\"",
              "Review changes as they are made",
            ],
          },
          {
            type: "paragraph",
            text: "Why this matters: Planning consumes fewer tokens than execution. Do your thinking in Plan Mode, then execute efficiently.",
          },
          {
            type: "heading",
            level: 2,
            text: "YOLO Mode – No Permission, No Limits",
          },
          {
            type: "paragraph",
            text: "Imagine you're cooking in your kitchen, and every time you want to chop a vegetable, someone asks — \"Are you sure you want to chop this?\" Annoying, right? YOLO Mode removes that annoying gatekeeper. Claude Code executes everything — bash commands, file changes, installations — without asking you a single permission.",
          },
          {
            type: "paragraph",
            text: "How to Enable It: Launch Claude Code with the flag:",
          },
          {
            type: "code",
            text: "claude --dangerously-skip-permissions",
          },
          {
            type: "paragraph",
            text: "Notice the word \"dangerously\" — it's a deliberate reminder that you're removing all safety nets.",
          },
          {
            type: "paragraph",
            text: "Why is it called YOLO? YOLO stands for \"You Only Live Once\" — a phrase that means \"just go for it, no second thoughts!\" That's exactly what this mode does. Claude Code just goes for it — runs commands, writes files, installs packages — no confirmation, no hesitation.",
          },
          {
            type: "paragraph",
            text: "When to Use YOLO Mode:",
          },
          {
            type: "list",
            items: [
              "CI/CD pipelines and automated workflows",
              "Disposable environments (containers, sandboxes)",
              "When you fully trust the task and want maximum speed",
            ],
          },
          {
            type: "paragraph",
            text: "When NOT to Use YOLO Mode:",
          },
          {
            type: "list",
            items: [
              "On your main machine with important files",
              "When working with production databases",
              "If you're still learning what Claude Code does behind the scenes",
            ],
          },
          {
            type: "paragraph",
            text: "YOLO Mode = Maximum speed, zero interruptions, but zero safety net. Use it wisely – because you only live once, and so does your production server!",
          },
        ],
      },
      "Demo 2: Claude Code Modes": {
        slug: "demo2-claude-code-modes",
        title: "Demo 2: Modes",
        body: null,
        example: null,
        sections: [
          {
            type: "heading",
            level: 2,
            text: "Step 1 — Create a new project called color-explorer",
          },
          {
            type: "paragraph",
            text: "Create an empty project folder named color-explorer on your machine and open it in VS Code.",
          },
          {
            type: "heading",
            level: 2,
            text: "Step 2 — VS Code Settings: Change the Permission Mode",
          },
          {
            type: "paragraph",
            text: "Open VS Code Settings and search for Claude Code. Under Claude Code: Initial Permission Mode, change the dropdown to your desired mode — default, acceptEdits, or plan.",
          },
          {
            type: "image",
            src: "/images/claude-code/demo2-img1.png",
          },
          {
            type: "heading",
            level: 2,
            text: "Step 3 — Paste the Prompt & Run",
          },
          {
            type: "paragraph",
            text: "Open Claude Code and paste the following prompt:",
          },
          {
            type: "code",
            text: `Build me a beautiful "Color Palette Explorer" web app using Node.js and Express. The app should display a collection of 20 handpicked beautiful colors in a responsive grid layout. Each color should be shown as a large card with the color as its background, and on the card display the color name, HEX code, RGB values, and HSL values in contrasting text. When a user hovers over a card, it should scale up slightly with a smooth shadow effect. When a user clicks on any color card, the entire page background should smoothly transition to that color, and a toast notification should appear saying "Copied HEX to clipboard!". Include a search bar at the top that filters colors in real time by name or hex code. Add a dark mode toggle button in the top right corner. At the top of the page show a large hero section with the title "Color Palette Explorer" with a subtle gradient background animation. Use Google Fonts for typography — Poppins for headings and Inter for body text. Save every color click with timestamp to a local JSON file and show a "Recently Viewed" section with the last 5 clicked colors as small circular swatches. Make the design modern, clean and premium looking with rounded corners, soft shadows, and smooth transitions everywhere. Initialize the project, install all dependencies, create all files, and start the server.`,
          },
          {
            type: "image",
            src: "/images/claude-code/demo2-img2.png",
          },
          {
            type: "heading",
            level: 2,
            text: "Step 4 — Project Structure & Build Summary",
          },
          {
            type: "paragraph",
            text: "Claude Code will scaffold the full project — creating server.js, package.json, data/history.json, and the public/ folder with index.html, style.css, and script.js.",
          },
          {
            type: "image",
            src: "/images/claude-code/demo2-img3.png",
          },
          {
            type: "heading",
            level: 2,
            text: "Step 5 — App Running at localhost:3000",
          },
          {
            type: "paragraph",
            text: "Visit http://localhost:3000 in your browser to test the Color Palette Explorer app.",
          },
          {
            type: "image",
            src: "/images/claude-code/demo2-img4.png",
          },
          {
            type: "image",
            src: "/images/claude-code/demo2-img5.png",
          },
          {
            type: "heading",
            level: 2,
            text: "YOLO Mode — Same Project, No Permissions",
          },
          {
            type: "list",
            items: [
              "Type /exit to exit the current session",
              "Delete all the project files created previously",
              "To open Claude Code in YOLO mode, type: claude --dangerously-skip-permissions",
              "Paste the same prompt — this time Claude will not ask for any permissions",
            ],
          },
          {
            type: "image",
            src: "/images/claude-code/demo2-img6.png",
          },
          {
            type: "heading",
            level: 2,
            text: "Plan Mode — Plan Without Executing",
          },
          {
            type: "list",
            items: [
              "Press SHIFT + TAB to switch to Plan Mode",
              "Paste the same prompt",
              "Claude will create the full plan but will not execute it",
            ],
          },
          {
            type: "image",
            src: "/images/claude-code/demo2-img7.png",
          },
          {
            type: "image",
            src: "/images/claude-code/demo2-img8.png",
          },
        ],
      },
    },
  }
}

export const sidebarCategories = {
  "Context,Sessions & Checkpoints": {
    slug: "ai-tools",
    icon: "",
    subs: {
      "Claude.MD": {
        slug: "claude-md",
        title: "CLAUDE.md",
        body: null,
        example: null,
        sections: [
          { type: "heading", level: 2, text: "The Real Problem" },
          { type: "paragraph", text: "Suppose you're building a frontend project with HTML, CSS, and JavaScript. You always use semantic HTML tags like <section>, <article>, <nav> — never just <div> for everything. You follow BEM naming convention for your CSS classes. You prefer vanilla JavaScript — no jQuery. You always use const and let, never var. You keep your CSS in a separate stylesheet, never inline styles." },
          { type: "paragraph", text: "Every time you ask Claude Code to generate a page or a component, you'd have to repeat these preferences. \"Use semantic HTML.\" \"Follow BEM naming.\" \"Don't use var.\" \"No inline styles please.\" Again and again and again." },
          { type: "paragraph", text: "Similarly, when we ask AI to \"add an endpoint\" or \"refactor a service,\" it often responds confidently but incorrectly:" },
          { type: "list", items: [
            "It invents folder structures that don't exist",
            "It introduces patterns that are foreign to the codebase",
            "It ignores build and test workflows",
            "It breaks conventions the team spent months agreeing on",
          ]},
          { type: "paragraph", text: "Claude Code is not bad at coding — it is uninformed. This is not a capability problem — it is an onboarding problem. Even experienced human engineers struggle when dropped into an unfamiliar codebase without context. AI behaves the same way." },
          { type: "heading", level: 2, text: "The Fix Is Surprisingly Simple" },
          { type: "paragraph", text: "One file that explains how the project actually works. That file is called CLAUDE.md. Claude Code automatically loads this file into context at startup. With CLAUDE.md? You write it once, and Claude remembers it for the entire session. It's like training a new team member — but you only have to do it once, in one file." },
          { type: "heading", level: 3, text: "The Magic Analogy" },
          { type: "paragraph", text: "Imagine you own a restaurant. Every day, a new chef walks into your kitchen. Without any instructions, every chef will cook differently. Different spices, different plating, different style." },
          { type: "paragraph", text: "But what if you had a recipe book sitting on the kitchen counter? Every chef who walks in reads it first and follows your recipes, your plating style, your flavor profiles. The food is consistent every single day, no matter who's cooking." },
          { type: "paragraph", text: "CLAUDE.md is that recipe book. Claude Code is the chef. Every session is a new chef walking in — but the recipe book ensures consistency." },
          { type: "heading", level: 2, text: "What Is CLAUDE.md?" },
          { type: "paragraph", text: "It is not documentation. It is not a style guide. It is onboarding — like the notes you would hand to a senior engineer on day one. It tells Claude:" },
          { type: "list", items: [
            "What this system is trying to achieve",
            "Which patterns are allowed and which are banned",
            "How changes should be made",
            "How correctness is verified",
          ]},
          { type: "heading", level: 3, text: "Why Longer Prompts Don't Work" },
          { type: "paragraph", text: "Most teams try to fix AI mistakes by writing longer, more detailed prompts. That approach does not scale because prompts are:" },
          { type: "list", items: [
            "Rewritten constantly",
            "Easy to forget",
            "Inconsistent across team members",
          ]},
          { type: "paragraph", text: "CLAUDE.md flips the model — define the rules once, and every session carries them forward. Consistency improves immediately without any extra effort." },
          { type: "heading", level: 2, text: "Getting Started" },
          { type: "paragraph", text: "You don't have to manually create the CLAUDE.md file. Instead run /init. Claude Code analyzes your codebase and generates a starter CLAUDE.md. It detects build systems, test frameworks, and code patterns automatically. This gives you a solid foundation to refine and customize. No required format — keep it short, clear, and human-readable." },
          { type: "heading", level: 3, text: "Importing Other Files" },
          { type: "paragraph", text: "CLAUDE.md files can import additional files using @path/to/import syntax:" },
          { type: "code", text: "See @README.md for project overview\nSee @package.json for available commands\n\n# Additional Instructions\n- Git workflow: @docs/git-instructions.md\n- Personal overrides: @~/.claude/my-project-instructions.md" },
          { type: "paragraph", text: "This keeps CLAUDE.md lean while still giving Claude access to detailed context when needed." },
          { type: "heading", level: 2, text: "Where to Place CLAUDE.md" },
          { type: "paragraph", text: "You can place CLAUDE.md files in several locations:" },
          { type: "table", headers: ["Location", "Purpose"], rows: [
            ["Home folder (~/.claude/CLAUDE.md)", "Applies to all your Claude sessions globally"],
            ["Project root (./CLAUDE.md)", "Applies to a given project. Can be shared with the team via Git"],
            ["./CLAUDE.local.md", "Personal overrides, add to .gitignore"],
            ["Parent directories", "Useful for monorepos where both root/CLAUDE.md and root/foo/CLAUDE.md are pulled in automatically"],
            ["Child directories", "Claude pulls these in on demand when working in those folders"],
          ]},
          { type: "heading", level: 2, text: "What to Include (High Value)" },
          { type: "list", items: [
            "Exact technologies and versions used in the project",
            "Folder structure and what each folder is responsible for",
            "Build, run, and test commands",
            "Non-negotiable rules (expectations handling, code formatting rules, security standards)",
            "Patterns that are explicitly banned",
            "How the team expects changes to be made (branching, PR workflow, etc.)",
          ]},
          { type: "heading", level: 2, text: "What to Avoid (Low Value or Risky)" },
          { type: "list", items: [
            "Secrets, credentials, or API keys — never put these in CLAUDE.md",
            "Style rules already enforced by linters or formatters (ESLint, Prettier, Checkstyle)",
            "Large documentation blocks that Claude can look up on its own",
            "Too many instructions — if the file is too long, important rules get lost in the noise",
          ]},
          { type: "heading", level: 2, text: "Treat CLAUDE.md Like Code" },
          { type: "list", items: [
            "Check it into Git so your entire team can contribute",
            "Review it when Claude misbehaves — the fix is often in the file, not in the prompt",
            "Prune it regularly — remove rules that are no longer relevant",
            "Test changes by observing if Claude's behavior actually shifts",
            "If Claude keeps ignoring a rule — the file is probably too long and the rule is getting buried",
            "If Claude keeps asking questions already answered in CLAUDE.md — the phrasing might be ambiguous",
            "Use emphasis like \"IMPORTANT\" or \"YOU MUST\" for critical rules to improve adherence",
            "The file compounds in value over time — the more you refine it, the better Claude performs",
          ]},
        ],
      },
      "Demo 3: Claude.MD": {
        slug: "demo3-claude-md",
        title: "Demo 3: Claude.md file (zero config to full control)",
        body: null,
        example: null,
        sections: [
          { type: "heading", level: 2, text: "Step 1: Run /init command to create CLAUDE.md file" },
          { type: "paragraph", text: "Open your terminal inside the project folder and run the /init command. Claude Code will explore the codebase structure to understand what's there before writing the CLAUDE.md file. It searches for existing configuration files, detects build systems, test frameworks, and code patterns automatically." },
          { type: "paragraph", text: "You will see Claude Code analyzing the project — searching for patterns like *.md, *.toml, *.txt files, then harmonizing the findings into a starter CLAUDE.md." },
          { type: "heading", level: 2, text: "Step 2: CLAUDE.md is automatically applied" },
          { type: "paragraph", text: "Automatically whatever instructions written in CLAUDE.md file will apply to the application. The generated file provides guidance to Claude Code (claude.ai/code) when working with code in this repository." },
          { type: "paragraph", text: "The file appears in your project root (e.g., FUTURE-AI/CLAUDE.md) alongside your source files and is immediately active for the current and all future sessions in that directory." },
          { type: "heading", level: 2, text: "Key Tips" },
          { type: "list", items: [
            "Don't write more than 250 lines in one CLAUDE.md file — important rules get buried in long files",
            "Reference project created via CLAUDE.md: https://github.com/calcom/cal.diy (see AGENTS.md in that repo for a real-world example)",
            "After /init generates the file, open and refine it — remove anything irrelevant, sharpen the rules that matter most",
            "Commit CLAUDE.md to Git so the whole team benefits from the same onboarding rules",
          ]},
        ],
      },
      "Claude Code Settings": {
        slug: "claude-code-settings",
        title: "Claude Code Settings",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Claude Code settings exist to give developers and organizations programmatic control over Claude Code's behavior - what it's allowed to do, what it's restricted from, how it interacts with your codebase, and how it integrates with external tools. Think of it as the \"control panel\" that sits between Claude's AI capabilities and your actual development environment." },
          { type: "heading", level: 2, text: "Approach 1: The /config Command (Interactive UI)" },
          { type: "paragraph", text: "This is the most beginner-friendly way to control Claude Code. When you run /config inside the REPL, it opens a tabbed Settings interface right in your terminal - a one-stop shop to view status and change configuration options without touching any files manually." },
          { type: "heading", level: 3, text: "Related slash commands that complement /config" },
          { type: "table", headers: ["Command", "Description"], rows: [
            ["/status", "Shows all active settings sources and their origins (managed, user, project). This is your debugging tool when a setting doesn't seem to be working — it tells you exactly which layer is overriding what."],
            ["/permissions", "A dedicated interactive UI specifically for managing allow/deny/ask rules. Real-time changes, no restart needed."],
            ["/model", "Quick model switcher mid-session with an interactive menu."],
          ]},
          { type: "heading", level: 2, text: "Approach 2: CLI Arguments (Per-Session Overrides)" },
          { type: "paragraph", text: "CLI arguments let you override settings when launching Claude Code, without modifying any persistent files. These take effect only for that session." },
          { type: "paragraph", text: "Best for: Per-session overrides, automation/scripting, CI/CD pipelines, and testing different configurations without committing to them." },
          { type: "heading", level: 3, text: "Use cases and scenarios" },
          { type: "list", items: [
            "Quick model switching: You're on Sonnet for daily coding but want Opus for a complex architecture discussion - just pass --model <model-name> without changing any config.",
            "Multi-repo workflows: You're working on a frontend project but need Claude to also reference the backend repo - use --add-dir ../backend to bring it into scope for that session.",
            "CI/CD and scripting: In headless/non-interactive pipelines (like GitHub Actions), CLI args are the primary way to control behavior since there's no REPL to interact with.",
            "Testing with relaxed permissions: You want to try YOLO mode for a quick spike without permanently changing your settings - pass the flag, and your persistent config stays untouched.",
          ]},
          { type: "heading", level: 3, text: "Common CLI flags" },
          { type: "table", headers: ["Purpose", "Command"], rows: [
            ["Start with a specific model", "claude --model <model-name>"],
            ["Add additional directories to the session", "claude --add-dir /path/to/other/project"],
            ["Start with a specific permission mode", "claude --permission-mode default/acceptEdits/plan/dontAsk/bypassPermissions"],
            ["Append custom system instructions", "claude --append-system-prompt \"Always write tests first\""],
            ["Skip all permission prompts (use with caution!)", "claude --dangerously-skip-permissions"],
            ["One-shot print mode (no REPL, great for scripting)", "claude -p \"Explain this function\""],
            ["Pipe content into Claude", "cat error.log | claude -p \"What went wrong?\""],
          ]},
          { type: "heading", level: 2, text: "Approach 3: settings.json Files (Persistent Configuration)" },
          { type: "paragraph", text: "This is the most powerful and the most \"proper\" approach - structured JSON files at different scopes that persist across sessions. This is where you define your real configuration. The settings.json file is the official mechanism for configuring Claude Code through hierarchical settings." },
          { type: "table", headers: ["Scope", "Location", "Purpose"], rows: [
            ["Managed", "managed-settings.json", "Maintained inside Claude Code installation folder. Controlled by system administrators. Applies to everyone on the machine. Cannot be changed by users. Often used in company environments."],
            ["User", "~/.claude/settings.json", "Maintained inside the user home directory. Applies to all projects you work on. Only affects you. Not shared with teammates. Best for personal preferences."],
            ["Project", ".claude/settings.json", "Saved inside the project directory. Shared with everyone working on that project. Usually committed to Git. Useful when teams want consistent settings."],
            ["Local", ".claude/settings.local.json", "Saved inside the project directory. Exists only on your machine for a specific project. Not shared with others. Automatically ignored by Git. Perfect for temporary or experimental changes."],
          ]},
          { type: "heading", level: 3, text: "A typical settings.json structure" },
          { type: "code", text: `{
  "$schema": "https://json.schemastore.org/claude-code-settings.json",
  "permissions": {
    "allow": [
      "Bash(npm run lint)",
      "Bash(npm run test *)",
      "Read(~/.zshrc)"
    ],
    "deny": [
      "Bash(curl *)",
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)"
    ]
  },
  "env": {
    "CLAUDE_CODE_ENABLE_TELEMETRY": "1",
    "OTEL_METRICS_EXPORTER": "otlp"
  },
  "companyAnnouncements": [
    "Never commit secrets, tokens, or credentials to the repository.",
    "Write meaningful commit messages — future you will thank you."
  ]
}` },
          { type: "heading", level: 2, text: "Which Setting Wins? (Priority Order)" },
          { type: "paragraph", text: "When the same setting exists at multiple levels, the more specific one always wins. For example, if a feature is allowed in your personal settings but blocked in project settings, the project rule will be applied." },
          { type: "paragraph", text: "Priority order (highest to lowest):" },
          { type: "list", items: [
            "Managed — Highest priority — can't be overridden by anything",
            "Command Line Args — Temporary overrides for the current session only",
            "Local — Your personal rules for this specific repo",
            "Project — Team-shared rules committed in the repo",
            "User — Lowest priority — your global defaults",
          ]},
        ],
      },
      "Permissions in Claude Code": {
        slug: "permissions-in-claude-code",
        title: "Permissions in Claude Code",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "By default, Claude Code is powerful. It can read files, run shell commands, edit code, and fetch URLs. That's great for productivity, but in a team or production environment, you want control." },
          { type: "paragraph", text: "Permissions let you answer one simple question upfront: \"What should Claude be allowed to do in this project?\" You define the rules once. Claude follows them every time — no surprises." },
          { type: "heading", level: 2, text: "The Three-Tier Permission System" },
          { type: "paragraph", text: "Claude Code uses three levels of approval:" },
          { type: "table", headers: ["Tool Type", "Example", "Requires Approval?"], rows: [
            ["Read-only", "File reads, Grep", "Never"],
            ["Bash commands", "Shell execution", "Yes — remembered per project"],
            ["File modification", "Edit / Write files", "Yes — until session ends"],
          ]},
          { type: "paragraph", text: "The key idea: Low-risk actions (reading) are silent. High-risk actions (running commands, editing files) ask first - and remember your answer." },
          { type: "heading", level: 2, text: "Permission Modes" },
          { type: "paragraph", text: "Instead of writing individual rules, you can set a mode that controls Claude's overall behavior:" },
          { type: "table", headers: ["Mode", "What it does?"], rows: [
            ["default", "Asks for permission on first use of each tool"],
            ["acceptEdits", "Auto-approves all file edits for the session"],
            ["plan", "Claude can read and analyze — but cannot modify anything"],
            ["dontAsk", "Denies everything unless explicitly pre-approved"],
            ["bypassPermissions", "Skips all prompts — only safe in containers or VMs"],
          ]},
          { type: "paragraph", text: "Claude Code provides fine-grained permission controls, allowing you to define exactly what the agent is allowed to do and what actions it is restricted from performing. These permission settings can be stored in version control and shared across all developers in your organization, while still allowing individual developers to customize them based on their needs." },
          { type: "heading", level: 2, text: "Allow, Ask, and Deny" },
          { type: "paragraph", text: "Every permission rule is one of three types:" },
          { type: "list", items: [
            "Allow — Claude uses the tool without asking. You've pre-approved it.",
            "Ask — Claude pauses and prompts you every time it tries to use this tool.",
            "Deny — Claude cannot use this tool at all. Full stop.",
          ]},
          { type: "paragraph", text: "Rules are evaluated in this order: Deny → Ask → Allow. The first matching rule wins. Deny always beats everything else." },
          { type: "heading", level: 2, text: "Managing Permissions with /permissions" },
          { type: "paragraph", text: "You can manage and review Claude Code's tool permissions using the /permissions command. This interface displays all permission rules along with the settings.json file where they are defined." },
          { type: "paragraph", text: "The /permissions interface lets you cycle through Allow, Ask, Deny, and Workspace tabs (use ←/→ or tab to cycle). Under Allow: \"Claude Code won't ask before using allowed tools.\" You can add a new rule and see existing rules such as Bash(find:*)." },
          { type: "heading", level: 3, text: "Defining Permission Rules" },
          { type: "paragraph", text: "Rules follow a simple pattern: Tool or Tool(specifier)" },
          { type: "list", items: [
            "Bash → allows all bash commands",
            "Bash(*) is equivalent to Bash and matches all Bash commands",
            "Bash(npm run build) → only this exact command",
            "Read(./.env) → only this specific file",
            "WebFetch(domain:github.com) → only fetches to github.com",
            "Bash(npm run *) → any npm run command",
            "Bash(git * main) → git checkout main, git merge main, etc.",
          ]},
          { type: "heading", level: 3, text: "A Real-World Example" },
          { type: "paragraph", text: "Claude can run tests, commit code, and check versions — but it cannot push to remote. One line of config, enforced every time." },
          { type: "code", text: `{
  "permissions": {
    "allow": [
      "Bash(npm run *)",
      "Bash(git commit *)",
      "Bash(* --version)"
    ],
    "deny": [
      "Bash(git push *)"
    ]
  }
}` },
          { type: "heading", level: 2, text: "Working Directories in Claude Code" },
          { type: "paragraph", text: "By default, Claude Code can access files from the directory where it was launched. This directory becomes the primary workspace. But this can be changed or extended:" },
          { type: "list", items: [
            "At startup: --add-dir <path>",
            "During a session: /add-dir",
            "Permanently: additionalDirectories in settings",
          ]},
          { type: "heading", level: 3, text: "Practical Use Cases" },
          { type: "list", items: [
            "Multi-module projects",
            "Microservices repositories",
            "Shared config libraries",
            "Accessing documentation or scripts stored outside the main repo",
            "Teaching demos where code spans multiple directories",
          ]},
          { type: "heading", level: 3, text: "Permission Behavior for Additional Directories" },
          { type: "paragraph", text: "Additional directories follow the same permission rules as the main working directory:" },
          { type: "list", items: [
            "Files become readable without extra prompts.",
            "Editing permissions depend on the active permission mode.",
          ]},
        ],
      },
      "Output Styles": {
        slug: "output-styles",
        title: "Output Styles",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Output styles change Claude's personality and how it communicates - without affecting its core capabilities. By using the command /output-style, we can control this setting." },
          { type: "paragraph", text: "The /output-style command shows the preferred output style options. It changes how Claude Code communicates with you:" },
          { type: "list", items: [
            "Default — Claude completes coding tasks efficiently and provides concise responses",
            "Explanatory — Claude explains its implementation choices and codebase patterns",
            "Learning — Claude pauses and asks you to write small pieces of code for hands-on practice",
          ]},
          { type: "table", headers: ["Style", "Behavior", "Best for"], rows: [
            ["Default", "Concise, efficient, minimal explanations", "Experienced developers who want speed"],
            ["Explanatory", "Adds \"Insight\" blocks explaining why it made certain choices", "Understanding new codebases, learning patterns"],
            ["Learning", "Leaves TODO(human) markers for you to implement small pieces", "Junior devs, learning new languages, pair programming"],
          ]},
          { type: "heading", level: 2, text: "Create a Custom Output Style in Claude Code" },
          { type: "heading", level: 3, text: "What is a Custom Output Style?" },
          { type: "paragraph", text: "A custom output style lets you control how Claude responds. You define instructions in a small Markdown file. These instructions are automatically added to Claude's system prompt. This helps keep responses consistent across sessions." },
          { type: "heading", level: 3, text: "Structure of a Custom Output Style" },
          { type: "paragraph", text: "A style file uses frontmatter at the top (wrapped in ---) followed by your instructions." },
          { type: "paragraph", text: "Frontmatter — Contains the name and description of your style. This is like a label on a jar - it tells you what's inside without opening it." },
          { type: "paragraph", text: "Body — Contains the actual rules and behaviors you want Claude to follow. This is where you write your custom instructions in Markdown format." },
          { type: "code", text: `---
name: Custom
description: A short summary of what this style does, shown to the user
---

# Custom Style Instructions

You are an interactive CLI tool that helps users with software engineering tasks.

## Specific Behaviors

- Always explain in beginner-friendly language
- Focus on backend development` },
          { type: "heading", level: 3, text: "Where to Save Your Style Files" },
          { type: "paragraph", text: "You can save your style files in two locations:" },
          { type: "table", headers: ["Level", "Path", "Scope"], rows: [
            ["User Level", "~/.claude/output-styles/", "Applies the style across all your projects — like a global setting on your phone that works everywhere"],
            ["Project Level", ".claude/output-styles/", "Applies the style only to one specific project — like a rule that only applies inside one classroom"],
          ]},
          { type: "heading", level: 2, text: "Practical Use Cases" },
          { type: "list", items: [
            "Concise Reviewer — A style that tells Claude to give short, direct code review comments with no extra explanation.",
            "Beginner-Friendly Helper — A style where Claude explains everything step by step using simple words and analogies.",
            "Strict Linter — A style where Claude only points out code issues and suggests fixes without any casual conversation.",
          ]},
        ],
      },
      "Context Window in Claude Code": {
        slug: "context-window-in-claude-code",
        title: "The Context Window in Claude Code",
        body: null,
        example: null,
        sections: [
          { type: "heading", level: 2, text: "What is the Context Window?" },
          { type: "paragraph", text: "The context window is Claude's working memory during a session. It contains everything Claude needs to understand your project and respond accurately:" },
          { type: "list", items: [
            "Your conversation history",
            "Project file contents",
            "Command outputs",
            "CLAUDE.md instructions",
            "Loaded skills and system rules",
          ]},
          { type: "paragraph", text: "As you keep working, more information gets added and the context fills up. Think of it like a temporary workspace that stores everything Claude needs to understand your project." },
          { type: "paragraph", text: "A typical breakdown for a Total Context of 1,000,000 tokens:" },
          { type: "table", headers: ["Context Component", "Tokens"], rows: [
            ["System Prompt", "100,000 tokens"],
            ["Conversation History", "400,000 tokens"],
            ["Tool Call Results", "50,000 tokens"],
            ["Skills", "50,000 tokens"],
            ["Available to work", "400,000 tokens"],
          ]},
          { type: "heading", level: 3, text: "The /context command" },
          { type: "paragraph", text: "The /context command shows what is currently using space in the context window. It displays a visual breakdown by category — system prompt, system tools, memory files, skills, messages, free space, and autocompact buffer — along with percentage usage. This helps you understand why context fills quickly and when to take action." },
          { type: "paragraph", text: "Large context means more tokens to process and reduced efficiency — use fresh sessions to maintain speed and accuracy." },
          { type: "heading", level: 2, text: "What Happens When Context Fills Up?" },
          { type: "list", items: [
            "Claude manages space automatically",
            "First, it removes older tool outputs",
            "If more space is needed, it summarizes parts of the conversation using the compact process",
            "Important things like your requests and key code snippets are usually kept",
            "Very old or detailed instructions may get shortened or lost",
          ]},
          { type: "heading", level: 2, text: "The /compact command" },
          { type: "paragraph", text: "You can guide Claude during compaction in two ways:" },
          { type: "list", items: [
            "Add a \"Compact Instructions\" section inside CLAUDE.md so every compaction follows your rules automatically",
            "Run the command with a hint, e.g.: /compact \"make sure to retain security related instructions\"",
          ]},
          { type: "paragraph", text: "This tells Claude what information is most important to keep during compression." },
          { type: "paragraph", text: "Always use CLAUDE.md for important rules. Don't rely only on chat history for long-term instructions. This ensures important rules stay available even after compaction or across sessions." },
          { type: "paragraph", text: "Examples of persistent rules to anchor in CLAUDE.md: coding standards, folder structure, naming conventions, and architecture decisions." },
          { type: "heading", level: 2, text: "Seeing Context in Action" },
          { type: "paragraph", text: "Running a review prompt like \"pls review the code present inside this project and give me candid feedback\" causes Claude to read all project files in parallel. After this, the context usage visibly increases — for example jumping from 10% to 24% (48k/200k tokens) as the conversation history grows from file reads and the AI response." },
          { type: "paragraph", text: "The /context output at this point shows the estimated usage by category: System prompt ~3.2%, System tools ~6.2%, Memory files ~0.3%, Skills ~0.5%, Messages ~14.2%, with Free space ~59% and Autocompact buffer ~16.5%." },
          { type: "paragraph", text: "After running /compact, Claude compresses the conversation — referencing key files like script.js, style.css, and index.html rather than keeping every raw output. The context drops back down, for example from 24% to 16% (31.6k/200k tokens), restoring significant free space (67.7%) while preserving the essential knowledge from earlier in the session." },
          { type: "paragraph", text: "Note: the more you run /compact, the more quality of responses can be impacted — each compaction loses some conversational detail. Use it deliberately at natural task breakpoints rather than continuously." },
          { type: "heading", level: 2, text: "Smart Session Habits" },
          { type: "table", headers: ["Habit", "What to do", "Why it helps"], rows: [
            ["Clear Between Tasks", "Run /clear after finishing a bug fix before starting a new feature", "Prevents leftover context from one task polluting the next"],
            ["Compact at Breakpoints", "Run /compact after finishing a subtask, before starting a new phase", "You control what's kept rather than waiting for autocompact at 80–85%"],
            ["Name Your Sessions", "Type /rename <session-name> at the start of meaningful work", "Makes it easy to find and resume sessions from a long list"],
            ["Monitor Context", "Run /context periodically — treat it like checking a fuel gauge", "Lets you compact or clear proactively before performance degrades"],
            ["Document & Clear Pattern", "Ask Claude to write its plan/progress into a .md file, then /clear and start fresh", "Gives you fresh context while preserving knowledge across sessions"],
          ]},
        ],
      },
      "Session Management in Claude Code": {
        slug: "session-management-in-claude-code",
        title: "Session Management in Claude Code",
        body: null,
        example: null,
        sections: [
          { type: "heading", level: 2, text: "What Is a Session?" },
          { type: "paragraph", text: "Every time you start Claude Code, you begin a session — think of it as a conversation with a notebook. Claude saves everything in that notebook:" },
          { type: "list", items: [
            "Every message you type",
            "Every tool Claude uses",
            "Every result it produces",
            "Snapshots of files before Claude changes them (so you can undo)",
          ]},
          { type: "paragraph", text: "Each session is independent. When you start a new one, Claude begins with a fresh mind — it doesn't carry over what you talked about yesterday. Claude remembers across sessions in two ways:" },
          { type: "list", items: [
            "Auto Memory — Claude can persist key learnings on its own",
            "CLAUDE.md — Your project's permanent instruction file that loads every time",
          ]},
          { type: "heading", level: 2, text: "Naming a Session" },
          { type: "paragraph", text: "By default, Claude Code auto-generates a random session ID (like abc123) for every conversation. There's no descriptive name — just an ID, a timestamp, and an auto-summary. This makes it hard to identify sessions when you have many of them." },
          { type: "paragraph", text: "Give your session a meaningful name using the /rename command. Inside an active session, type:" },
          { type: "code", text: "/rename refactor-auth-system" },
          { type: "paragraph", text: "After renaming, the /resume command will show the session details with the name you provided, making it much easier to identify later." },
          { type: "heading", level: 2, text: "Resume a Session (Pick Up Where You Left Off)" },
          { type: "paragraph", text: "Closed the terminal by mistake? Need to continue yesterday's debugging? Use these commands:" },
          { type: "table", headers: ["Command", "What it does"], rows: [
            ["claude --continue  or  claude -c", "Resume your most recent session"],
            ["claude --resume <session-id>", "Resume a specific past session by its ID"],
          ]},
          { type: "paragraph", text: "When you resume a session:" },
          { type: "list", items: [
            "You get your full conversation history back",
            "New messages are added to the same session",
            "Session-scoped permissions reset — you'll need to re-approve them",
          ]},
          { type: "paragraph", text: "Think of it like reopening the same notebook — all your notes are there, but the \"access badges\" have expired." },
          { type: "heading", level: 2, text: "Fork a Session (Try a Different Path)" },
          { type: "paragraph", text: "What if you want to experiment with a different approach — without messing up your current session? That's what forking does:" },
          { type: "code", text: "claude --continue --fork-session" },
          { type: "paragraph", text: "This creates a new session but copies your entire conversation history up to that point. The original session stays untouched. It's like photocopying your notebook and writing in the copy — the original stays clean, the fork goes in its own direction. Just like resume, forked sessions don't inherit session-scoped permissions." },
          { type: "heading", level: 3, text: "What Happens If You Open the Same Session in Two Terminals" },
          { type: "paragraph", text: "It's technically possible — but not recommended. If you resume the same session in two terminals:" },
          { type: "list", items: [
            "Both terminals write to the same session file",
            "Messages from both get mixed together — like two people writing in the same notebook at the same time",
            "Nothing breaks or corrupts, but the conversation becomes jumbled",
            "Each terminal only sees its own messages during the session",
            "When you resume later, you'll see everything interleaved",
          ]},
          { type: "paragraph", text: "The fix: use --fork-session to give each terminal its own clean session with the same starting point but separate paths — no interference." },
          { type: "heading", level: 2, text: "Resume vs Fork" },
          { type: "table", headers: ["", "Resume", "Fork"], rows: [
            ["Session ID", "Same", "New"],
            ["History", "Continues from where you stopped", "Copies history, then branches off"],
            ["Original session", "Gets new messages added", "Stays unchanged"],
            ["Use when", "You want to continue the same work", "You want to try a different approach"],
            ["Permissions", "Need to re-approve", "Need to re-approve"],
          ]},
          { type: "paragraph", text: "--continue / --resume appends to the same session. With --fork-session, the original (e.g. session-x179a) stays intact and a new ID (e.g. session-k342f) branches off — like a Git branch from a shared commit." },
          { type: "heading", level: 2, text: "How Claude Code Manages Sessions Across Git Branches" },
          { type: "paragraph", text: "Each Claude Code conversation is a session tied to your current directory — not to a branch or a file:" },
          { type: "list", items: [
            "Every conversation you start in Claude Code is linked to the folder you're working in",
            "When you resume a session, Claude only shows you sessions from that same directory",
            "Switching branches does not start a new session — you stay in the same conversation",
          ]},
          { type: "paragraph", text: "Claude always reads the files from your active Git branch. If you switch branches, it immediately works with the new branch's code, while your conversation history remains unchanged. Claude still remembers everything you discussed earlier, even though the underlying files may be different." },
          { type: "paragraph", text: "Because sessions are directory-based, you can run multiple Claude sessions in parallel by using Git worktrees. Worktrees create separate folders for different branches, allowing each branch to have its own independent Claude session." },
          { type: "heading", level: 2, text: "The Smart Developer's Session Habits" },
          { type: "table", headers: ["Habit", "Action", "Why"], rows: [
            ["1 — Clear Between Tasks", "Run /clear after finishing a bug fix before starting a new feature", "Prevents leftover context from polluting the next task"],
            ["2 — Compact at Breakpoints", "Run /compact after a subtask, before a new phase — with an optional hint: /compact Keep only the test results and the current implementation plan", "You control what's kept rather than waiting for autocompact at 80–85%"],
            ["3 — Name Your Sessions", "Type /rename <name> as soon as you start meaningful work", "Future you will thank present you when staring at a list of 50 unnamed sessions"],
            ["4 — Monitor Your Context", "Run /context periodically — treat it like a car's fuel gauge; compact or clear if above 60% with lots of work left", "Proactive management prevents quality degradation mid-task"],
            ["5 — Document & Clear", "Ask Claude to write its plan/progress into a .md file, then /clear, then start a new session telling Claude to read that file", "Fresh context with preserved knowledge — the best of both worlds"],
          ]},
        ],
      },
      "Checkpoints in Claude Code": {
        slug: "checkpoints-in-claude-code",
        title: "Checkpoints in Claude Code",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "When Claude Code works on your project, it can touch dozens of files in a single prompt — refactoring a module, renaming methods across the codebase, restructuring folders. That's powerful. But what happens when it goes in the wrong direction?" },
          { type: "paragraph", text: "Checkpoints are your safety net. Claude Code automatically captures the state of your code before each edit, allowing you to quickly undo changes and rewind to previous states if anything gets off track." },
          { type: "heading", level: 2, text: "The Old Ways Were Not Built for AI Speed" },
          { type: "paragraph", text: "Without checkpoints, developers usually rely on a few traditional methods — but none of them fit well into a fast AI workflow:" },
          { type: "heading", level: 3, text: "Undo Isn't Always Reliable" },
          { type: "paragraph", text: "Keyboard undo works fine when you change a few lines in one file. But when Claude updates multiple files together, undoing becomes confusing — which file changed first? How many times should you undo? Did you just remove something important? Undo quickly turns into guesswork." },
          { type: "heading", level: 3, text: "Git Commits Interrupt Your Flow" },
          { type: "paragraph", text: "Version control is powerful, but it's not designed for constant micro-experiments. To create a safe point you need to stage files, write a message, and commit — this often leads to messy commits like \"test\", \"in-progress\", or \"ignore\", which clutter your history instead of helping you." },
          { type: "heading", level: 3, text: "Manual Backups Rarely Happen" },
          { type: "paragraph", text: "Yes, you could copy your project folder or make ZIP files. But in real development it takes time, breaks concentration, and most people simply forget to do it. By the time something breaks, there's no recent backup to restore." },
          { type: "heading", level: 2, text: "How Checkpoints Work" },
          { type: "paragraph", text: "As you work with Claude, checkpointing automatically captures the state of your code before each edit. You don't press a save button — every prompt you submit triggers a silent snapshot before Claude touches anything." },
          { type: "paragraph", text: "Checkpoints persist across sessions, so you can close your terminal and still rewind later. They don't disappear when you close Claude Code." },
          { type: "heading", level: 3, text: "Scenarios Where Checkpoints Are Essential" },
          { type: "list", items: [
            "Exploring risky approaches — You want Claude to try a completely different architectural pattern, but you're not sure it'll work",
            "When Claude misunderstands the prompt — You asked for a small refactor and Claude rewrote three modules. Before you even start figuring out what changed, checkpoints let you rewind in seconds",
            "When context gets polluted — You've corrected Claude twice on the same issue and it keeps making the same mistake. Rewind to before the first wrong attempt and try again with a better prompt — a clean prompt almost always outperforms a long session with accumulated corrections",
            "Direction changes mid-session — You were migrating to version 4 across multiple prompts, then requirements changed to version 5. Rewind both code and conversation to the pre-migration state and start fresh — without losing any work outside that scope",
          ]},
          { type: "heading", level: 2, text: "How to Rewind" },
          { type: "paragraph", text: "Press Esc twice or use the /rewind command to open the rewind menu. Pick a checkpoint and then decide what to restore:" },
          { type: "table", headers: ["Restore Option", "What it does", "Best for"], rows: [
            ["Restore Code Only", "Reverts file changes, keeps the conversation", "When the code went wrong but the context is still useful"],
            ["Restore Conversation Only", "Rewinds the chat, keeps the code", "When you want to re-prompt differently without throwing away changes you liked"],
            ["Restore Both", "Full reset — code and conversation go back together", "Complete do-over when both went in the wrong direction"],
            ["Summarize from here", "Doesn't restore anything — condenses messages from that point forward while keeping earlier context intact", "A surgical alternative to /compact that only compresses the part eating up space"],
          ]},
          { type: "heading", level: 2, text: "What Checkpoints Do NOT Track" },
          { type: "paragraph", text: "This is critical to understand:" },
          { type: "list", items: [
            "Checkpointing does not track files modified by bash commands — if Claude runs rm file.txt, mv old.txt new.txt, or cp source.txt dest.txt, these modifications cannot be undone through rewind",
            "Only direct file edits made through Claude's file editing tools are tracked",
            "Manual changes you make outside of Claude Code are not captured",
            "Checkpoints expire after 30 days",
          ]},
          { type: "heading", level: 2, text: "Checkpoints vs Git" },
          { type: "paragraph", text: "Think of checkpoints as \"local undo\" and Git as \"permanent history.\" They complement each other — checkpoints are not a replacement for version control." },
          { type: "table", headers: ["", "Checkpoints", "Git"], rows: [
            ["Speed", "Instant, automatic, zero friction", "Requires staging, message, commit"],
            ["Scope", "Only Claude's direct file edits", "All file changes including bash-modified files"],
            ["Persistence", "Expires after 30 days", "Permanent — travels with the repo"],
            ["Team sharing", "Local only", "Shared with the whole team"],
            ["Best for", "Fast AI-session undo within a session", "Long-term history, CI/CD, collaboration"],
          ]},
          { type: "heading", level: 3, text: "Git — For Permanent History" },
          { type: "paragraph", text: "Before giving Claude any large task, commit your current working state:" },
          { type: "code", text: "git checkout -b feature/refactor-auth\ngit add .\ngit commit -m \"before AI refactor\"" },
          { type: "paragraph", text: "If everything breaks, git reset --hard brings you back instantly. Unlike checkpoints, this survives beyond 30 days, travels with your repo, and works in team environments. Use Git when you need long-term history, team collaboration, or CI/CD traceability. Checkpoints cover the session; Git covers everything else." },
          { type: "heading", level: 2, text: "Voice Dictation in Claude Code" },
          { type: "paragraph", text: "Humans speak about three times faster than they type. Claude Code includes push-to-talk voice dictation so you can describe problems, context, and instructions verbally instead of typing — especially useful for long, detailed prompts." },
          { type: "paragraph", text: "Use /voice to activate it. Hold Space, speak, then release — your words land in the prompt as you say them." },
          { type: "list", items: [
            "Cloud-powered, not on-device — your voice is streamed to Anthropic's servers, transcribed there, and sent back as text",
            "Claude.ai login required — voice dictation only works when signed in with a Claude.ai account",
            "Not available when Claude Code is connected to: Anthropic API keys directly, Amazon Bedrock, Google Vertex AI, or Microsoft Foundry",
            "Free to use — transcription doesn't consume your messages or tokens and won't count toward the limits in /usage",
          ]},
        ],
      },
    },
  },
  "Claude Code for Github": {
    slug: "claude-code-github",
    icon: "",
    subs: {
      "Git Operations from the Terminal": {
        slug: "git-operations-from-the-terminal",
        title: "Git Operations from the Terminal",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Claude Code majorly connects with GitHub at three different levels:" },
          { type: "table", headers: ["Level", "Description"], rows: [
            ["Terminal (Local)", "You talk to Claude in your terminal. It runs git and gh commands for you. Think of it like pair programming with someone who never forgets Git syntax."],
            ["GitHub Actions (Remote)", "Claude lives inside your GitHub repo as a bot. Tag @claude in a PR or issue, and it responds — reviewing code, fixing bugs, or implementing features automatically."],
            ["Headless / Scripting (Automated)", "Use the -p flag to run Claude without an interactive session. Perfect for build scripts, CI/CD pipelines and batch processing."],
          ]},
          { type: "heading", level: 2, text: "Asking Claude for Git Operations" },
          { type: "paragraph", text: "When you open Claude Code in your project folder, you can simply ask it to do Git operations in plain English. Examples of what you can say:" },
          { type: "list", items: [
            "show me a summary of all uncommitted changes",
            "commit and push the changes with a descriptive message",
            "create a feature branch called ui-improvements and switch to it",
            "push this branch and create a PR with a summary of changes",
            "review the pull request and merge into main branch",
            "switch back to main branch and delete the ui-improvements branch both locally and remotely as I am done with the UI changes",
            "pls look at the issue 2 reported and fix the problem",
            "commit and push this fix, then close issue 2",
          ]},
          { type: "paragraph", text: "Claude runs the actual git and gh commands behind the scenes. You don't need to remember the exact syntax." },
        ],
      },
      "The CLAUDE.md File": {
        slug: "the-claude-md-file-for-github",
        title: "The CLAUDE.md File — Teaching Claude Your Team's Rules",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "CLAUDE.md is a special file in your project root that acts as Claude's project memory. It loads automatically every time a session starts." },
          { type: "heading", level: 2, text: "What to Put in CLAUDE.md" },
          { type: "list", items: [
            "Repository structure — A quick summary of important folders and their purpose, so Claude knows where to look.",
            "Git conventions — Your branching rules (e.g., feature/description), commit message format (e.g., Conventional Commits like feat:, fix:, docs:).",
            "Common commands — How to run tests, linters, or build scripts in your project.",
            "Coding standards — Style guides and patterns your team follows.",
          ]},
          { type: "paragraph", text: "When Claude creates commits, PRs, or reviews code, it reads this file and follows your team's conventions automatically. It's like onboarding a new developer who reads the team handbook before writing any code." },
        ],
      },
      "commit-commands plugin": {
        slug: "commit-commands-plugin",
        title: "commit-commands plugin",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "The Commit Commands Plugin automates common git operations, reducing context switching and manual command execution. Instead of running multiple git commands, use a single slash command to handle your entire workflow." },
          { type: "paragraph", text: "Install plugin: Run /plugin command and install commit-commands plugin which will provide the following commands that can be executed from Claude Code sessions." },
          { type: "table", headers: ["Command", "What it does"], rows: [
            ["/commit", "Reviews your changes, stages files, and creates a commit with a smart message"],
            ["/commit-push-pr", "Does everything — commits, pushes to a feature branch, and opens a PR in one step"],
            ["/clean_gone", "Removes local branches that were already deleted on the remote"],
          ]},
        ],
      },
      "How Claude Creates a Pull Request": {
        slug: "how-claude-creates-a-pull-request",
        title: "How Claude Creates a Pull Request (Behind the Scenes)",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "When you say \"create a PR for my changes\", Claude doesn't just blindly run commands. It follows a structured process:" },
          { type: "heading", level: 2, text: "Step 1 — Gather Context" },
          { type: "paragraph", text: "Claude runs git status, git diff, git log, and git diff main...HEAD all at once to understand what changed." },
          { type: "heading", level: 2, text: "Step 2 — Prepare the Branch" },
          { type: "paragraph", text: "It checks if you're on a feature branch, if changes are committed, and if the branch is pushed to the remote. If not, it handles all of that." },
          { type: "heading", level: 2, text: "Step 3 — Analyze Changes" },
          { type: "paragraph", text: "Claude internally reviews all commits since you branched off from main. It figures out whether this is a feature, a bug fix, or a refactor. It drafts a concise PR summary focused on why the changes were made, not just what changed." },
          { type: "heading", level: 2, text: "Step 4 — Create the PR" },
          { type: "paragraph", text: "It uses gh pr create to open the PR with a well-written title, description, and test plan." },
        ],
      },
      "Run Parallel Sessions with Git Worktrees": {
        slug: "run-parallel-sessions-with-git-worktrees",
        title: "Run Parallel Claude Code Sessions with Git Worktrees",
        body: null,
        example: null,
        sections: [
          { type: "heading", level: 2, text: "Why Do We Need Worktrees?" },
          { type: "paragraph", text: "Sometimes you may work on multiple tasks at the same time. For example, one task to build a new feature and another to fix a production bug. Running everything in the same folder can cause:" },
          { type: "list", items: [
            "File conflicts",
            "Mixed changes",
            "Confusion between branches",
          ]},
          { type: "paragraph", text: "Git worktrees help you avoid these problems." },
          { type: "heading", level: 2, text: "What is a Git Worktree?" },
          { type: "paragraph", text: "A worktree creates a separate working folder from the same repository. Each worktree:" },
          { type: "list", items: [
            "Has its own files",
            "Uses its own branch",
            "Shares the same Git history and remote repo",
          ]},
          { type: "paragraph", text: "Think of it like creating multiple workspaces for the same project." },
          { type: "heading", level: 2, text: "How Claude Uses Worktrees" },
          { type: "paragraph", text: "Use the --worktree (or -w) option. If you don't provide a name, Claude will generate a random name." },
          { type: "code", text: "claude --worktree feature-cache" },
          { type: "paragraph", text: "What happens:" },
          { type: "list", items: [
            "A new folder is created",
            "A new branch is created automatically",
            "Claude starts inside that isolated workspace",
          ]},
          { type: "heading", level: 2, text: "Running Multiple Sessions" },
          { type: "paragraph", text: "You can start multiple Claude sessions like this:" },
          { type: "code", text: "claude --worktree feature-cache\nclaude --worktree bugfix-performance" },
          { type: "paragraph", text: "Each session runs independently, has its own working directory, and uses its own branch." },
          { type: "heading", level: 2, text: "Where Are Worktrees Stored?" },
          { type: "paragraph", text: "Claude creates worktrees inside your repository: <repo>/.claude/worktrees/<name>" },
          { type: "paragraph", text: "Branch naming pattern: worktree-<name>" },
          { type: "heading", level: 2, text: "Creating Worktrees During a Session" },
          { type: "paragraph", text: "You don't always need to restart Claude. You can simply say:" },
          { type: "list", items: [
            '"Start a worktree"',
            '"Work in a worktree"',
          ]},
          { type: "paragraph", text: "Claude will create one automatically and move your work into it." },
        ],
      },
      "GitHub Actions Integration": {
        slug: "github-actions-integration",
        title: "GitHub Actions Integration (The @claude Bot)",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Claude Code has an official GitHub Action that turns it into a bot living inside your repository. What it can do:" },
          { type: "list", items: [
            "Answer questions about your code, architecture, and design decisions",
            "Review PRs and suggest improvements",
            "Implement simple fixes, refactoring, and even new features",
            "Work with GitHub issues — read them, implement solutions, create PRs",
            "Track progress with visual checkboxes that update in real time",
          ]},
          { type: "paragraph", text: "How it's triggered: Someone mentions @claude in a PR comment or issue comment, and GitHub Actions picks it up and runs Claude." },
          { type: "heading", level: 2, text: "How the @claude Trigger Works" },
          { type: "paragraph", text: "The process follows a clear flow:" },
          { type: "list", items: [
            "Someone tags @claude in a PR or issue comment — for example, \"@claude review this PR\" or \"@claude fix this bug\".",
            "GitHub Actions wakes up — The workflow file (claude.yml) detects the mention and starts a job.",
            "Claude reads the context — It looks at two main sources: the entire codebase and the CLAUDE.md file. This ensures Claude follows your project's rules and standards.",
            "Claude does the work — It might review code and leave comments, implement a fix and push commits, or create a new PR.",
            "Results appear on GitHub — You see Claude's response as a comment, a code review, or a new PR — just like any other team member.",
          ]},
          { type: "heading", level: 2, text: "Setting Up the GitHub Action — Quick Start" },
          { type: "paragraph", text: "The fastest way to set it up is through Claude Code itself in your terminal:" },
          { type: "list", items: [
            "Step 1: Open Claude Code and run /install-github-app",
            "Step 2: Follow the prompts — it installs the Claude GitHub App (from github.com/apps/claude) to your repo",
            "Step 3: It creates a PR with a workflow file (.github/workflows/claude.yml). Before merging, add your ANTHROPIC_API_KEY as a GitHub Secret (Settings → Secrets → Actions)",
            "Step 4: Merge the PR. Done!",
          ]},
          { type: "paragraph", text: "Test it: Go to any PR or issue and type @claude review this PR or @claude fix this bug." },
        ],
      },
      "Headless Mode for CI/CD": {
        slug: "headless-mode-for-ci-cd",
        title: "Headless Mode for CI/CD and Scripting",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Headless mode lets you run Claude Code without an interactive session — perfect for automation scripts and CI/CD pipelines." },
          { type: "heading", level: 2, text: "What is Headless Mode?" },
          { type: "paragraph", text: "Normally when you run Claude Code, you get an interactive session where you type questions and Claude replies. Headless mode runs Claude without opening that interactive chat. It just:" },
          { type: "list", items: [
            "Receives a task",
            "Executes it",
            "Finishes automatically",
          ]},
          { type: "paragraph", text: "Think of it like running a script instead of having a live discussion." },
          { type: "heading", level: 2, text: "Why Do We Need Headless Mode?" },
          { type: "paragraph", text: "Headless mode is mainly used for automation. For example:" },
          { type: "list", items: [
            "CI/CD pipelines",
            "Automated code reviews",
            "Running checks during builds",
            "Scripts that run without human input",
          ]},
          { type: "paragraph", text: "Instead of a developer typing commands, the system triggers Claude automatically. To interact with Claude using headless mode, use the key flag: -p (or --print)" },
          { type: "code", text: 'claude -p "Review this codebase for performance issues"' },
          { type: "heading", level: 2, text: "Simple Real-World Example" },
          { type: "paragraph", text: "Imagine your CI/CD pipeline: a developer pushes code to GitHub and the pipeline starts automatically. Claude runs in headless mode to:" },
          { type: "list", items: [
            "Check code quality",
            "Generate docs",
            "Update tests",
          ]},
          { type: "paragraph", text: "Nobody needs to sit and chat with Claude — it runs silently in the background." },
        ],
      },
      "Status Line": {
        slug: "status-line",
        title: "Status Line — Your Always-On Cockpit Dashboard",
        body: null,
        example: null,
        sections: [
          { type: "heading", level: 2, text: "The Pain" },
          { type: "paragraph", text: "You're deep in a Claude Code session. Three questions keep nagging at you:" },
          { type: "list", items: [
            "How much context have I burned through?",
            "How much has this session cost so far?",
            "What branch am I even on right now?",
          ]},
          { type: "paragraph", text: "Every time you want an answer, you break flow — type a command, read the output, get back to work." },
          { type: "heading", level: 2, text: "The Fix — A Customizable Status Line" },
          { type: "paragraph", text: "A persistent strip at the bottom of Claude Code that shows whatever you want, always visible, without lifting a finger. Think of it like the dashboard in your car. You don't ask \"how fast am I going?\" — you glance down. Speed, fuel, RPM, all there. The status line does the same thing for your Claude Code session." },
          { type: "paragraph", text: "It's not just a status line. It's your status line. You decide what shows up there, and Claude Code just runs your script and prints whatever you tell it to print." },
          { type: "heading", level: 2, text: "How the Status Line Works — JSON In, Text Out" },
          { type: "list", items: [
            "Claude Code sends JSON to your script via stdin — model name, cost, context %, git directory, session ID, everything",
            "Your script reads it, picks what it cares about, formats it — using bash, Python, Node.js, PowerShell, whatever you like",
            "Your script prints text to stdout — and Claude Code displays it at the bottom of the screen",
          ]},
          { type: "heading", level: 2, text: "The \"I Didn't Even Write a Script\" Path" },
          { type: "paragraph", text: "You don't have to write the script yourself. Just describe what you want:" },
          { type: "code", text: "/statusline show model name and context percentage with a progress bar" },
          { type: "paragraph", text: "Claude Code generates the script, drops it in ~/.claude/, updates your settings, and you're done." },
          { type: "heading", level: 2, text: "The Manual Path (~/.claude/settings.json)" },
          { type: "code", text: `{
  "statusLine": {
    "type": "command",
    "command": "~/.claude/statusline.sh",
    "padding": 2
  }
}` },
        ],
      },
    },
  },
  "Rules, Skills & Hooks": {
    slug: "rules-skills-hooks",
    icon: "",
    subs: {
      "Rules in Claude Code": {
        slug: "rules-in-claude-code",
        title: "Rules in Claude Code",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Imagine your CLAUDE.md has grown to 400 lines. It has React rules, API guidelines, database migration warnings, security policies, and testing conventions — all mixed together. When Claude is editing a React component, it's also carrying your database migration safety rules in context. When it's writing a SQL query, it's carrying your React patterns." },
          { type: "paragraph", text: "This is what one developer called \"priority saturation\" — when everything is high priority, nothing is. Claude's attention gets diluted across instructions that don't apply to the current task." },
          { type: "heading", level: 2, text: "Where Do Rules Live?" },
          { type: "code", text: `.claude/rules/
├── code-style.md     ← Always loaded (no path filter)
├── testing.md        ← Always loaded
├── security.md       ← Always loaded
├── api-rules.md      ← Only when working on API files
├── react-rules.md    ← Only when working on React files
└── database/
    ├── migrations.md ← Only when working on migration files
    └── queries.md    ← Only when working on SQL/query files` },
          { type: "paragraph", text: "You can also have personal rules at ~/.claude/rules/ that apply across all your projects." },
          { type: "heading", level: 2, text: "Two Types of Rules" },
          { type: "paragraph", text: "1. Always-loaded rules — No paths frontmatter. These load at startup with the same high priority as CLAUDE.md. Use them for rules that apply universally." },
          { type: "code", text: `# code-style.md (no frontmatter = always loaded)
- Use English for all comments
- Prefer functional approach where possible
- Use strict typing everywhere` },
          { type: "paragraph", text: "2. Path-scoped rules — With paths frontmatter. These load on demand only when Claude reads files matching the specified glob patterns." },
          { type: "code", text: `---
paths:
  - "src/api/**/*.ts"
  - "src/handlers/**/*.ts"
---

# API Design Rules
- Return consistent error shapes: { error: string, code: number }
- Log all requests with correlation IDs
- Rate limit headers on all routes` },
          { type: "paragraph", text: "This rule only activates when Claude works on files matching those paths." },
          { type: "heading", level: 2, text: "Think of It as the Difference Between:" },
          { type: "paragraph", text: "Old way: A 400-line CLAUDE.md = 400 lines always competing for attention" },
          { type: "paragraph", text: "New way: 50-line CLAUDE.md + 5 rule files of 50 lines each = only 100 lines active at any time (CLAUDE.md + the 1 relevant rule file)" },
          { type: "heading", level: 2, text: "Rules vs CLAUDE.md — When to Use Which" },
          { type: "table", headers: ["Put it in CLAUDE.md", "Put it in Rules"], rows: [
            ["Project overview / tech stack", "File-type-specific coding patterns"],
            ["Build and test commands", "Framework-specific guidelines (React, Spring, etc.)"],
            ["Architecture overview", "Security rules for sensitive directories"],
            ["Universal coding conventions", "Test-writing conventions"],
            ["Common gotchas that affect everything", "Migration safety rules"],
            ["Git workflow / branching strategy", "API design guidelines"],
          ]},
        ],
      },
      "Auto Memory in Claude Code": {
        slug: "auto-memory-in-claude-code",
        title: "Auto Memory in Claude Code",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Imagine this: You're working with Claude Code on your React project. You spend 20 minutes explaining that your project uses Vite, your tests live in src/__tests__/, you prefer named exports over default exports, and the dev server runs on port 5173. Claude helps you beautifully." },
          { type: "paragraph", text: "Next day, you open a new session… and Claude has zero memory of yesterday. It's like talking to a brilliant colleague who gets amnesia every night. You're back to square one — re-explaining the same things all over again." },
          { type: "paragraph", text: "That's the problem Auto Memory solves." },
          { type: "paragraph", text: "With Auto Memory, Claude Code quietly takes notes for itself as it works with you. Build commands, debugging tricks, your code style preferences, architecture decisions — it writes all of this down in the background. Next session? Claude already knows your project. You pick up right where you left off, like continuing a conversation with a colleague who actually remembers." },
          { type: "table", headers: ["", "CLAUDE.md", "Auto Memory (MEMORY.md)"], rows: [
            ["Who writes it?", "You (the developer)", "Claude (automatically)"],
            ["What's in it?", "Rules & instructions", "Learnings & observations"],
            ["Shared with team?", "Yes (via Git)", "No (machine-local)"],
            ["Analogy", "A textbook for students", "A student's personal notebook"],
          ]},
          { type: "heading", level: 2, text: "Two Memory Systems: The Textbook vs. The Notebook" },
          { type: "paragraph", text: "Claude Code has two complementary memory systems. Understanding the difference is the key to using them well." },
          { type: "paragraph", text: "1. CLAUDE.md — The Textbook (Written by YOU)" },
          { type: "paragraph", text: "Think of CLAUDE.md as a textbook you write for Claude. It contains your rules, your conventions, your \"do it this way\" instructions:" },
          { type: "list", items: [
            '"Use pnpm, not npm"',
            '"Follow Airbnb React Style Guide"',
            '"Never modify files in /generated/ or /dist/"',
            '"Run tests with pnpm test --coverage"',
          ]},
          { type: "paragraph", text: "You write it, you commit it to Git, your whole team shares it." },
          { type: "paragraph", text: "2. Auto Memory (MEMORY.md) — The Notebook (Written by CLAUDE)" },
          { type: "paragraph", text: "Auto Memory is like a student's personal notebook. Claude writes it for itself as it works with you:" },
          { type: "list", items: [
            '"Build command for this project is pnpm build"',
            '"The hydration mismatch was caused by using window object during SSR without a useEffect guard"',
            '"User prefers custom hooks over render props for shared logic"',
            '"E2E tests use Playwright and require the dev server running on port 5173"',
          ]},
          { type: "paragraph", text: "It's stored locally on your machine, never committed to Git, and is unique to your personal workflow." },
          { type: "heading", level: 2, text: "How Auto Memory Works Under the Hood" },
          { type: "paragraph", text: "It's ON by Default. Auto Memory is enabled by default. You don't need to install anything or flip any switch. Claude just starts remembering." },
          { type: "heading", level: 3, text: "Where Does Claude Store Its Notes?" },
          { type: "paragraph", text: "Each project gets its own memory directory:" },
          { type: "code", text: `~/.claude/projects/<project>/memory/
├── MEMORY.md          # The main index — loaded every session
├── debugging.md       # Detailed notes on debugging patterns
└── api-conventions.md # API design decisions` },
          { type: "paragraph", text: "The <project> path is derived from your git repository. So all branches, worktrees, and subdirectories within the same repo share one memory directory. Think of it as one notebook per project, not per branch. Outside a git repo? Claude uses the project root directory instead." },
          { type: "paragraph", text: "When Claude is interacting with its memory, you'll see status messages in the Claude Code interface:" },
          { type: "list", items: [
            '"Writing memory" — Claude is saving something it learned',
            '"Recalled memory" — Claude is reading from its saved notes',
          ]},
          { type: "paragraph", text: "These are your visual cues that Auto Memory is working in the background." },
          { type: "heading", level: 2, text: "The /memory Command" },
          { type: "paragraph", text: "The /memory command is your control panel for all things memory in Claude Code. Type it inside any session to bring up an interactive selector that shows you:" },
          { type: "list", items: [
            "All CLAUDE.md files currently loaded in your session (project, user, rules, etc.)",
            "The Auto Memory toggle — ON/OFF switch",
            "A link to open the auto memory folder — so you can browse what Claude has saved",
          ]},
          { type: "paragraph", text: "You can also use /memory to toggle auto memory on or off, open any memory file in your editor, or browse Claude's saved notes." },
          { type: "heading", level: 3, text: "Telling Claude What to Remember" },
          { type: "paragraph", text: "Auto Memory doesn't only rely on Claude's own judgment. You can tell Claude to remember things explicitly:" },
          { type: "list", items: [
            '"remember that we use pnpm, not npm"',
            '"save to memory that the API tests require a local Redis instance"',
            '"note that the staging environment uses port 3001"',
          ]},
          { type: "heading", level: 2, text: "The Three Memory Layers — The Complete Picture" },
          { type: "paragraph", text: "Claude Code actually has three memory systems that work together. Think of it as a hierarchy:" },
          { type: "paragraph", text: "Layer 1: CLAUDE.md Files (Your Instructions). Analogy: The company handbook every employee must follow" },
          { type: "list", items: [
            "Written by you",
            "Loaded at every session start",
            "Shared with the team via Git",
          ]},
          { type: "paragraph", text: "Layer 2: Auto Memory / MEMORY.md (Claude's Learnings). Analogy: A developer's personal sticky notes on their monitor" },
          { type: "list", items: [
            "Written by Claude automatically",
            "First 200 lines loaded at session start; topic files read on demand",
            "Machine-local, NOT shared",
          ]},
          { type: "paragraph", text: "Layer 3: Session Memory (Conversation Continuity). Analogy: The \"last conversation\" context, like remembering where you left off in a meeting" },
          { type: "list", items: [
            "Saves conversation-level summaries",
            "Helps with cross-session recall within recent conversations",
          ]},
          { type: "paragraph", text: "The strongest setup uses all three. CLAUDE.md provides authoritative rules. Auto Memory captures what Claude learns while working. Session Memory maintains recent conversation continuity." },
          { type: "heading", level: 2, text: "Configuring Auto Memory" },
          { type: "paragraph", text: "Toggle Via /memory — The simplest way: open a session, type /memory, and flip the toggle." },
          { type: "paragraph", text: "Toggle Via Settings — In your project settings (.claude/settings.json):" },
          { type: "code", text: `{
  "autoMemoryEnabled": false
}` },
          { type: "paragraph", text: "Disable Via Environment Variable — Perfect for CI/CD pipelines where you don't want Claude accumulating notes about your build environment:" },
          { type: "code", text: "export CLAUDE_CODE_DISABLE_AUTO_MEMORY=1" },
          { type: "paragraph", text: "Custom Memory Directory — Want to store auto memory somewhere else? Set autoMemoryDirectory in your user or local settings:" },
          { type: "code", text: `{
  "autoMemoryDirectory": "/path/to/custom/memory"
}` },
          { type: "heading", level: 2, text: "How It Works" },
          { type: "paragraph", text: "Only the first 200 lines of MEMORY.md are loaded at the beginning of each conversation. Anything beyond that is ignored during startup. To keep things efficient, Claude shifts detailed information into separate topic-based files." },
          { type: "paragraph", text: "This 200-line limit applies only to MEMORY.md. Files like CLAUDE.md are always loaded, regardless of size — though keeping them shorter helps improve accuracy and consistency." },
          { type: "paragraph", text: "Topic-specific files (e.g., debugging.md, patterns.md) are not loaded by default. Claude accesses them only when needed, using its file-reading capabilities." },
          { type: "paragraph", text: "During a session, Claude can read from and write to memory files. When you see messages like \"Writing memory\" or \"Recalled memory\", it means Claude is actively interacting with files located at: ~/.claude/projects/<project>/memory/" },
        ],
      },
      "Skills": {
        slug: "skills",
        title: "Skills",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "We know about CLAUDE.md — that markdown file where you dump all your project rules, coding conventions, and preferences. Claude loads it automatically every session, which sounds great, right? But here's the problem — think of it like carrying your entire toolbox everywhere you go. Going to fix a leaky tap? You're still lugging around the chainsaw, the welding kit, and the paint brushes. That's what CLAUDE.md does — it shoves everything into Claude's context window every single time, whether it's needed or not. And context window tokens are expensive real estate." },
          { type: "paragraph", text: "Skills work completely differently. Think of them like apps on your phone. Your phone doesn't load every app into memory at startup — it just knows what apps are installed by reading their names and descriptions. When you tap on one, only then does it fully load. Skills follow the same pattern — Claude always sees a lightweight YAML description, like an app icon with a label, so it knows what's available. But the full instructions, templates, and scripts inside the skill? Those load only when Claude decides they're actually relevant to what you're asking." },
          { type: "paragraph", text: "This is what Anthropic calls progressive disclosure — show the menu first, serve the meal only when ordered." },
          { type: "heading", level: 2, text: "How Progressive Disclosure Works" },
          { type: "paragraph", text: "Skills metadata details will always be loaded into context during the session creation. When a task arrives, Claude checks: \"Is this skill required?\" If yes (Match), the full skill loads — instructions + scripts." },
        ],
      },
      "What are Skills?": {
        slug: "what-are-skills",
        title: "What are Skills?",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Skills help expand what Claude can do. By creating a SKILL.md file with specific instructions, you can add new capabilities to Claude's toolkit. Claude will automatically use these skills when they are relevant, or you can run them manually using commands like /skill-name." },
          { type: "paragraph", text: "Claude Code skills are based on the Agent Skills open standard, which is designed to work across different AI tools. On top of that, Claude Code adds extra features such as better control over when skills run, support for sub-agents, and the ability to inject context dynamically during execution." },
          { type: "paragraph", text: "You can create your own reusable skills by adding Markdown files in .claude/skills/ (project-level) or ~/.claude/skills/ (personal)." },
          { type: "paragraph", text: "For example, if you create a skill with the name analyze-issue <issue #>, when you type /analyze-issue 123 → Claude will behave based on your instructions defined in skill document. For example, it will:" },
          { type: "list", items: [
            "Fetch issue #123 from your GitHub repo",
            "Explore the relevant codebase",
            "Generate a complete technical specification",
          ]},
        ],
      },
      "Build Your Own Skill": {
        slug: "build-your-own-skill",
        title: "Build Your Own Skill",
        body: null,
        example: null,
        sections: [
          { type: "heading", level: 2, text: "Steps to Create a Custom Skill" },
          { type: "heading", level: 3, text: "1) Create the Skill Directory" },
          { type: "paragraph", text: "Create a directory for the skill in .claude/skills/analyze-issue (project-level) or ~/.claude/skills/analyze-issue (personal)." },
          { type: "code", text: "mkdir -p .claude/skills/analyze-issue" },
          { type: "heading", level: 3, text: "2) Write a SKILL.md File" },
          { type: "paragraph", text: "Every skill requires a SKILL.md file. This file has two main sections:" },
          { type: "paragraph", text: "i) YAML frontmatter (placed between --- lines)" },
          { type: "list", items: [
            "Defines when and how Claude should use the skill.",
            "The name field becomes the /slash-command.",
            "The description helps Claude understand when to automatically load the skill.",
          ]},
          { type: "paragraph", text: "ii) Markdown instructions — Contains the steps and guidance Claude should follow when the skill runs. For example, you can create a skill file at .claude/skills/analyze-issue/SKILL.md. This file tells Claude how to execute the analyze-issue skill and when it should be triggered." },
          { type: "heading", level: 3, text: "3) Test the Skill" },
          { type: "paragraph", text: "You can try your skill in two different ways:" },
          { type: "paragraph", text: "i) Let Claude Use It Automatically — Ask a question that matches the skill's description, for example: Analyze the issue 123. If the request fits the skill, Claude will automatically load and use it." },
          { type: "paragraph", text: "ii) Run the Skill Manually — You can also trigger the skill directly using its slash command: /analyze-issue 123. This forces Claude to execute the specific skill you created." },
          { type: "paragraph", text: "No matter how the skill is triggered, Claude Code will follow the instructions inside the SKILL.md file — for example, it analyzes issue 123 and generates a specification about the proposed fixes." },
          { type: "link", href: "https://code.claude.com/docs/en/skills", text: "More details: https://code.claude.com/docs/en/skills" },
        ],
      },
      "Skills Layout": {
        slug: "skills-layout",
        title: "Skills Layout",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Every skill follows this canonical layout:" },
          { type: "table", headers: ["Path", "Status", "Purpose"], rows: [
            [".claude/skills/<skill-name>", "", "The skill directory"],
            ["SKILL.md (Instructions)", "REQUIRED", "The brain of the skill"],
            ["scripts/ — python scripts, Bash scripts", "Optional", "Executable code for deterministic tasks"],
            ["references/ — Documentation, API guides", "Optional", "Docs loaded into context as needed"],
            ["assets/ — Templates, images", "Optional", "Templates, icons, fonts used in output"],
          ]},
          { type: "paragraph", text: "This structure is elegant because it mirrors how a human expert thinks: you have your general approach (SKILL.md), your specialized knowledge (references/), your tools (scripts/), and your raw materials (assets/). The progressive disclosure keeps things efficient." },
        ],
      },
      "CLAUDE.md vs Skills": {
        slug: "claude-md-vs-skills",
        title: "CLAUDE.md vs Skills at a Glance",
        body: null,
        example: null,
        sections: [
          { type: "table", headers: ["Feature", "Purpose", "Best suited for", "Example"], rows: [
            ["CLAUDE.md", "Stores long-term guidance that should be applied consistently across chats", "Team standards, coding preferences, recurring project rules", "\"Follow our layered architecture. Prefer constructor injection. Use Maven wrapper for all builds.\""],
            ["Skill", "Provides task-specific know-how, workflows, or reference material Claude can apply when needed", "Repeatable procedures, domain playbooks, internal documentation", "A release skill that walks through version bumping, changelog updates, tagging, and publishing artifacts"],
          ]},
          { type: "heading", level: 2, text: "Context Usage by Feature" },
          { type: "table", headers: ["Feature", "Load timing", "Loaded content", "Context usage"], rows: [
            ["CLAUDE.md", "At the beginning of every session", "Entire file content", "High (included in every request)"],
            ["Skills", "At session start and when triggered", "Only summaries initially; full details when invoked", "Low (only summaries included per request)"],
          ]},
          { type: "paragraph", text: "In the context window: at session start, CLAUDE.md has its full content always in context and used for every prompt, while Skills Metadata loads only the name and description. On use of a skill, the full content is loaded into context." },
          { type: "paragraph", text: "Skills marked with disable-model-invocation: true are not loaded into context unless explicitly invoked using a command." },
        ],
      },
      "CLAUDE.md vs Rules vs Skills": {
        slug: "claude-md-vs-rules-vs-skills",
        title: "CLAUDE.md vs Rules vs Skills: Quick Comparison",
        body: null,
        example: null,
        sections: [
          { type: "heading", level: 2, text: "How Skills Differ from CLAUDE.md and Rules" },
          { type: "paragraph", text: "CLAUDE.md and Rules are about \"how should Claude behave?\" — they set the context, the guardrails, the coding standards. Claude reads them passively and follows them while doing whatever task you've asked." },
          { type: "paragraph", text: "Skills are about \"how should Claude do a specific task?\" — they're step-by-step playbooks for particular operations. They're active, not passive. They define a workflow." },
          { type: "table", headers: ["", "CLAUDE.md", "Rules", "Skills"], rows: [
            ["Purpose", "General project context", "File-scoped guidelines", "Task-specific workflows"],
            ["Analogy", "Onboarding doc", "Coding standards handbook", "Playbook / SOP"],
            ["When loaded", "Always (every session)", "Always OR when file pattern matches", "When task matches OR user invokes /skill"],
            ["Who triggers", "Automatic", "Automatic", "User (/skill) OR Claude (auto-discovery)"],
            ["Structure", "Single file", "Single files in a directory", "Directory with SKILL.md + supporting files"],
            ["Priority", "High (authoritative)", "High (authoritative)", "Lower until triggered, then high"],
            ["Token cost", "Always consuming tokens", "Always OR on-demand", "Only when needed"],
          ]},
        ],
      },
      "Commands (Legacy)": {
        slug: "commands-legacy",
        title: "Commands in Claude Code (Legacy)",
        body: null,
        example: null,
        sections: [
          { type: "heading", level: 2, text: "What is a Command?" },
          { type: "paragraph", text: "A command is simply a Markdown file containing natural language instructions. You save it in a special directory, and Claude Code automatically recognizes it as a slash command. The filename (minus .md) becomes the command name." },
          { type: "code", text: `.claude/commands/review.md  → /review
.claude/commands/commit.md  → /commit
.claude/commands/deploy.md  → /deploy` },
          { type: "paragraph", text: "That's it. No code compilation, no registration, no configuration file to edit. Drop a markdown file in the right folder and you have a command." },
          { type: "heading", level: 2, text: "The Evolution" },
          { type: "paragraph", text: "Skills are the next generation of commands. While commands were always user-initiated (you explicitly type /command), skills introduce a fundamentally different concept — Claude can discover and invoke them automatically when the task matches the skill's description." },
          { type: "paragraph", text: "Unlike commands (single markdown files), a skill is a directory with SKILL.md as the entry point, plus optional supporting files." },
          { type: "heading", level: 2, text: "Are Commands Deprecated?" },
          { type: "paragraph", text: "Yes, commands are officially deprecated in favor of skills. From the official Claude Code documentation:" },
          { type: "paragraph", text: "\"Custom commands have been merged into skills. A file at .claude/commands/review.md and a skill at .claude/skills/review/SKILL.md both create /review and work the same way. Your existing .claude/commands/ files keep working. Skills add optional features.\"" },
          { type: "heading", level: 2, text: "What This Means in Practice" },
          { type: "list", items: [
            "Your existing commands still work — files in .claude/commands/ continue to function and support the same frontmatter as skills. There's backward compatibility.",
            "Skills take precedence — if a skill and a command share the same name, the skill wins.",
            "New work should use skills — the skills format is the recommended approach going forward because it supports additional features.",
            "The community is migrating — even the official Claude plugins repository has an open issue about multiple plugins still using deprecated commands instead of skills.",
          ]},
        ],
      },
      "Commands vs Skills": {
        slug: "commands-vs-skills",
        title: "Commands vs Skills — Side-by-Side Comparison",
        body: null,
        example: null,
        sections: [
          { type: "table", headers: ["Aspect", "Commands (Legacy)", "Skills (Current)"], rows: [
            ["Location", ".claude/commands/file.md", ".claude/skills/name/SKILL.md"],
            ["Structure", "Single markdown file", "Directory with supporting files"],
            ["Invocation", "User-only (/command)", "User AND/OR Claude auto-discovery"],
            ["Supporting files", "Not supported", "Templates, scripts, examples, references"],
            ["Auto-loading", "Never — only when user types /", "Yes — based on description matching"],
            ["Subagent support", "No", "Yes (via agent: true frontmatter)"],
            ["Status", "Deprecated (still functional)", "Recommended approach"],
          ]},
        ],
      },
      "Hooks": {
        slug: "hooks",
        title: "Hooks",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Have you ever told someone, \"Please make sure you lock the door when you leave\"? They say, \"Sure, I will.\" And most days, they do. But that one day, they forget. Now imagine instead of relying on their memory, you installed an auto-lock — the door locks itself the moment it closes. No remembering, no forgetting, no hoping. It just works." },
          { type: "paragraph", text: "That's the difference between giving Claude Code an instruction — and giving it a hook." },
          { type: "paragraph", text: "In simple terms, hooks are user-defined shell commands/scripts that run automatically at specific points during Claude Code's lifecycle. Think of hooks like event listeners in JavaScript — you register a command, and it fires when a specific event happens." },
          { type: "paragraph", text: "You define the rules, and Claude Code enforces them — not because the AI chose to, but because the system is wired to execute them. Every single time. No exceptions." },
          { type: "paragraph", text: "The critical word to remember — deterministic. When you write something in CLAUDE.md or tell Claude, \"Always run the formatter after editing,\" that's a suggestion. Hooks flip that completely. They're not suggestions — they're code. They execute with certainty, just like a CI pipeline runs on every commit whether the developer remembers or not." },
          { type: "paragraph", text: "Why do hooks exist? Think about three things you'd want to guarantee when working with an AI coding agent:" },
          { type: "list", items: [
            "Automation — You want certain actions to happen every time, like formatting code after every edit.",
            "Protection — You want to block certain actions entirely, like preventing edits to your production config files or your .env with secrets.",
            "Awareness — You want to know what's happening, like getting a desktop notification the moment Claude finishes a task and is waiting for your input.",
          ]},
          { type: "paragraph", text: "Hooks are the bridge between hoping Claude does the right thing and guaranteeing it. They turn your preferences into enforceable rules." },
          { type: "heading", level: 2, text: "The Pain Point Without Hooks" },
          { type: "paragraph", text: "You're working with Claude Code. It just edited five files for you — brilliant. But now your code formatting is all messed up. Prettier didn't run. You fix it manually. Next time, same thing happens. You think, \"I wish Claude would just run Prettier every time it edits a file.\" But here's the thing — Claude is an AI. It might run Prettier. It might forget. There's no guarantee." },
          { type: "paragraph", text: "Or here's another scenario. You have a .env file with secrets — API keys, database passwords. You've told Claude, \"Don't touch that file.\" But what if it does? What if in the middle of a long session, it decides to helpfully \"fix\" your .env? You'd have no safety net." },
          { type: "paragraph", text: "And one more. Claude finishes a task, and you're off making coffee, not watching the terminal. Five minutes go by before you realize it's been sitting there waiting for you. Wouldn't it be nice to get a notification — like a tap on the shoulder — saying \"Hey, I'm done, come back\"?" },
          { type: "paragraph", text: "All three problems have one thing in common: you're hoping the AI does the right thing instead of guaranteeing it." },
          { type: "heading", level: 2, text: "Why Hooks Are Important" },
          { type: "paragraph", text: "AI coding assistants sometimes forget instructions like:" },
          { type: "list", items: [
            "Run tests after writing code",
            "Format the code after editing",
            "Don't read the .env content",
          ]},
          { type: "paragraph", text: "Hooks solve this problem by guaranteeing actions always run automatically. Benefits of Hooks:" },
          { type: "list", items: [
            "Automate repetitive tasks",
            "Maintain coding standards",
            "Improve workflow consistency",
            "Reduce human errors",
            "Integrate AI with development tools",
          ]},
          { type: "heading", level: 3, text: "Where Are Hooks Stored?" },
          { type: "paragraph", text: "Hooks are primarily stored as JSON configuration in the following locations:" },
          { type: "list", items: [
            "User Settings (~/.claude/settings.json) — Applies to ALL projects",
            "Project Settings (.claude/settings.json) — Applies only to that specific project",
            "Local settings (.claude/settings.local.json) — Not sharable and applied for single project",
          ]},
          { type: "heading", level: 2, text: "Creating a Hook" },
          { type: "paragraph", text: "The fastest way to create a hook is through the /hooks interactive menu in Claude Code. Follow these steps:" },
          { type: "list", items: [
            "Open the hooks menu by typing /hooks",
            "Configure the matcher",
            "Select + Add new hook and provide your shell command",
            "Choose a storage location (Project/User level)",
          ]},
          { type: "paragraph", text: "Hooks turn suggestions into guaranteed actions." },
        ],
      },
      "Hook Configuration Structure": {
        slug: "hook-configuration-structure",
        title: "Hook Configuration Structure",
        body: null,
        example: null,
        sections: [
          { type: "code", text: `{
  "hooks": {
    "<EventName>": [
      {
        "matcher": "<ToolName or Pattern>",
        "hooks": [
          {
            "type": "command",
            "command": "<shell command to execute>"
          }
        ]
      }
    ]
  }
}` },
          { type: "paragraph", text: "Each hook includes a type that defines how it should be executed. Most hooks use \"type\": \"command\", which simply runs a given command. Other valid values include \"http\", \"prompt\", \"agent\"." },
        ],
      },
      "Notification Hook": {
        slug: "notification-hook",
        title: "Hook to Receive a Notification When Claude Requires User Input",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "This hook fires a desktop notification whenever Claude Code needs your attention:" },
          { type: "code", text: `{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"Claude Code needs your attention\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ]
  }
}` },
        ],
      },
      "How Hooks Work": {
        slug: "how-hooks-work",
        title: "How Hooks Work",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Hooks are triggered at certain points during the Claude Code workflow. When one of these events occurs, all hooks that match that event run at the same time (in parallel). If multiple hooks contain the same command, Claude Code automatically removes the duplicates so the command runs only once." },
          { type: "table", headers: ["Event Name", "When it triggered?"], rows: [
            ["SessionStart", "Triggered when a Claude Code session starts or resumes"],
            ["UserPromptSubmit", "Triggered when a user submits a prompt, before Claude begins processing it"],
            ["PreToolUse", "Runs before Claude executes a tool call. This hook can also block the tool from running if needed"],
            ["PermissionRequest", "Triggered when Claude displays a permission request dialog"],
            ["PostToolUse", "Runs after a tool call completes successfully"],
            ["PostToolUseFailure", "Runs when a tool call fails"],
            ["Notification", "Triggered when Claude Code sends a notification"],
            ["SubagentStart", "Runs when a subagent is created"],
            ["SubagentStop", "Runs when a subagent completes its task"],
            ["Stop", "Triggered when Claude finishes generating its response"],
            ["TeammateIdle", "Runs when an agent team member is about to become idle"],
            ["TaskCompleted", "Triggered when a task is marked as completed"],
            ["ConfigChange", "Runs when a configuration file is modified during a session"],
            ["WorktreeCreate", "Triggered when a Git worktree is created using --worktree or isolation settings"],
            ["WorktreeRemove", "Runs when a worktree is removed, either when a session ends or when a subagent finishes"],
            ["PreCompact", "Triggered before Claude performs context compaction"],
            ["SessionEnd", "Runs when the Claude Code session ends"],
          ]},
        ],
      },
      "Node or Python for Hooks?": {
        slug: "node-or-python-for-hooks",
        title: "Node or Python for Hooks?",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "You can write hooks in any language, but startup time is an important factor." },
          { type: "paragraph", text: "Most of the time, hooks run synchronously, meaning Claude Code waits for them to finish before continuing. If a hook takes 500ms to start, every tool call becomes 500ms slower. This matters especially for events like PreToolUse, which can run dozens of times in a single session." },
          { type: "paragraph", text: "Here's the practical comparison:" },
          { type: "list", items: [
            "Node.js: Fast startup (~50–100ms). Best for high-frequency hooks like PreToolUse and PostToolUse.",
            "Python: Slower startup (~200–400ms). Suitable for less frequent hooks such as SessionStart, or for debugging and experimentation.",
            "Bash: Fastest startup (~10–20ms). Ideal for very simple tasks.",
          ]},
          { type: "paragraph", text: "Recommendation: Use Node.js for hooks that run frequently, Python for debugging or exploration, and Bash for simple operations." },
        ],
      },
    },
  },
  "MCP-Model Context Protocol": {
    slug: "mcp-model-context-protocol",
    icon: "",
    subs: {
      "MCP in Claude Code": {
        slug: "mcp-in-claude-code",
        title: "MCP in Claude Code",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Let me ask you something. Imagine you hire the smartest developer in the world. Brilliant. Knows every language, every framework, every algorithm. You bring them in and sit them at a desk." },
          { type: "paragraph", text: "But here's the catch — that desk has no internet. No access to your company's database. No connection to your Jira tickets, your GitHub issues, your Slack messages. Just a blank terminal and a text editor." },
          { type: "paragraph", text: "How useful are they now? Still smart - but limited. Frustratingly limited." },
          { type: "paragraph", text: "That's Claude Code without MCP." },
          { type: "heading", level: 2, text: "Claude Code without MCP" },
          { type: "paragraph", text: "When you install Claude Code and launch it for the first time - it's already powerful. Out of the box, Claude comes with a set of built-in tools it can use on its own." },
          { type: "paragraph", text: "It can read and write files in your project. It can execute shell commands. It can search your codebase, make Git commits, even browse the web to look something up." },
          { type: "paragraph", text: "These are Claude's native hands. The things it can do without any setup from you." },
          { type: "paragraph", text: "By default, Claude Code can't talk to your database, can't query your Jira board and so on. Because it doesn't have enough tools to perform these actions." },
        ],
      },
      "How Claude Code Works Internally": {
        slug: "how-claude-code-works-internally",
        title: "How Claude Code Works Internally",
        body: null,
        example: null,
        sections: [
          { type: "heading", level: 2, text: "What are LLM models?" },
          { type: "paragraph", text: "An LLM (Large Language Model) is the AI brain that understands and generates text. For example, models from Claude, Open AI, or Gemini read your prompt and produce responses based on their training. But they are not directly useful for day to day activities." },
          { type: "paragraph", text: 'Example interaction: A User asks an LLM, "Can you explain the code present in complex.py file." The LLM responds, "I am Sorry. I don\'t have ability to read a given file. I can only help you, if you feed me the input directly."' },
          { type: "heading", level: 2, text: "How Claude Code different from LLM models?" },
          { type: "paragraph", text: "Claude Code, on the other hand, is a tool or interface built on top of an LLM that helps developers work with code more effectively. It connects the LLM to your files, terminal, and development environment, so the AI can read code, modify files, run commands, and help build or fix applications." },
          { type: "paragraph", text: "Example flow with a Coding Assistant:" },
          { type: "list", items: [
            'User asks: "Can you explain the code present in complex.py file"',
            'The Coding Assistant tells the LLM: "Can you explain the code present in complex.py file. If you need any help, let me know. I have various tools that allow you to READ, EDIT, WEB SEARCH etc."',
            'The LLM requests: "Help me READING the file complex.py"',
            'The Coding Assistant responds: "Here is the content of complex.py"',
            'The LLM answers the user: "The complex.py has code related to authenticating the user ......"',
          ]},
          { type: "heading", level: 2, text: "What Can Claude Code Do?" },
          { type: "paragraph", text: "Claude Code is built for coding tasks, but it's not limited to just writing code. Since it runs directly in your terminal, it can handle pretty much anything you'd do from the command line - writing documentation, running build processes, searching through files, or even looking up information online." },
          { type: "paragraph", text: 'When a task comes from the user (e.g., "I am new to this project. Can you help me to understand on how Authentication works?"), the LLM works through an agentic loop with tools like READ and EDIT: Gather Context → Take an Action → Verify Results → iterate.' },
          { type: "heading", level: 2, text: "With MCP" },
          { type: "paragraph", text: "Your real-world workflows don't live just in files. They live in databases, in project management tools, in cloud APIs, in documentation systems. All the places Claude simply cannot reach — not because it's not smart enough, but because it has no connection to them." },
          { type: "paragraph", text: "This is exactly the problem MCP was built to solve." },
          { type: "paragraph", text: "With MCP, the coding assistant's agentic loop (Gather Context → Take an Action → Verify Results) can use External Tools via MCP such as GitHub, DB, JIRA, etc., in addition to built-in tools like READ and EDIT." },
        ],
      },
      "What is MCP?": {
        slug: "what-is-mcp",
        title: "What is MCP?",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "MCP - the Model Context Protocol is a standard, open protocol that lets Claude connect to external tools, databases, APIs, and services - in real time. Not through copy-paste. Not through uploading files. But through live, two-way connections." },
          { type: "paragraph", text: "Think of it as USB for AI. Just like USB lets you plug any device into any computer, MCP lets you plug any tool or service into Claude Code. A database? Plug it in. GitHub? Plug it in. Your company's internal documentation server? Plug it in." },
          { type: "paragraph", text: "MCP servers are extensions — extra tools you hand to Claude. Once connected, Claude doesn't just know about your database - it can actually talk to it." },
          { type: "paragraph", text: "Think of it this way. Claude's built-in tools are like the apps that come pre-installed on a brand new phone. Useful from day one. But the real power? That comes when you start installing the apps you need for your workflow. MCP servers are those apps." },
        ],
      },
      "MCP in Action: Claude Meets the Browser": {
        slug: "mcp-in-action-claude-meets-the-browser",
        title: "MCP in Action: Claude Meets the Browser",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Giving Claude a Window to the Browser. One command. One new superpower." },
          { type: "code", text: "claude mcp add chrome-devtools --scope project -- npx chrome-devtools-mcp@latest" },
          { type: "paragraph", text: "Three things this does:" },
          { type: "list", items: [
            "Connects Claude to Chrome DevTools via MCP",
            "Scopes it to this project only",
            "Runs the MCP server automatically via npx — no install needed",
          ]},
          { type: "paragraph", text: "You added the server. But is Claude actually using it? Run this inside Claude Code to confirm the MCP server connection and list of tools it exposes:" },
          { type: "code", text: "/mcp" },
          { type: "paragraph", text: "Example /mcp output:" },
          { type: "code", text: `Chrome-devtools MCP Server

Status:         connected
Command:        npx
Args:           chrome-devtools-mcp@latest
Config location: /Users/<user>/Documents/
Capabilities: tools
Tools: 29 tools

1. View tools
2. Reconnect
3. Disable` },
          { type: "paragraph", text: 'This time, if you send the following prompt to Claude code, "My React app at localhost:5173 has a login form that always fails. Open it, try to test with test data, figure out what\'s broken, and fix it"' },
          { type: "paragraph", text: "With MCP Chrome DevTools: Claude opens the browser, fills the form, clicks Submit, reads the console errors, inspects network requests — and then fixes the code." },
          { type: "paragraph", text: "Without MCP Chrome DevTools: Claude reads source files. Makes educated guesses. You go back and forth." },
          { type: "heading", level: 2, text: "What Claude Actually Does with MCP?" },
          { type: "list", items: [
            "Opens localhost:5173 in Chrome",
            "Navigates to the login form",
            "Fills in credentials",
            "Clicks Submit",
            "Reads console errors & network response",
            "Traces the bug back to the source code",
            "Fixes it",
          ]},
          { type: "paragraph", text: "This is the difference between reading a map and actually driving the road." },
        ],
      },
      "Playwright MCP: Claude Gets a Testing Superpower": {
        slug: "playwright-mcp-claude-gets-a-testing-superpower",
        title: "Playwright MCP: Claude Gets a Testing Superpower",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Playwright is Microsoft's open-source browser automation framework. Built for one purpose - controlling browsers programmatically." },
          { type: "list", items: [
            "Used by teams worldwide for end-to-end testing",
            "Supports Chrome, Firefox, and Safari — all three",
            "Can run headless (invisible) or headed (visible browser)",
            "Handles clicks, forms, navigation, screenshots, network interception",
            "Battle-tested at enterprise scale",
          ]},
          { type: "paragraph", text: "One Command to wire Claude Code to Playwright:" },
          { type: "code", text: "claude mcp add playwright --scope project npx @playwright/mcp@latest" },
          { type: "paragraph", text: "Once connected, Claude can:" },
          { type: "list", items: [
            "Navigate to any URL — local or live",
            "Click buttons, links, checkboxes",
            "Fill forms with real data",
            "Take screenshots at any step",
            "Wait for elements, animations, API responses",
            "Intercept network requests — see exactly what's being sent",
            "Generate Playwright test files from its own actions",
            "Run across browsers — not just Chrome",
          ]},
        ],
      },
      "Prompts that can be used with Playwright": {
        slug: "prompts-that-can-be-used-with-playwright",
        title: "Prompts that can be used with Playwright",
        body: null,
        example: null,
        sections: [
          { type: "list", items: [
            "\"A user reported that clicking 'Add to Cart' on the product page sometimes shows a 500 error. Go to localhost:5173/products/123, click Add to Cart 10 times, capture network requests and console errors, and tell me what's actually happening.\"",
            "\"Navigate through the main user flows of my app at localhost:5173 (signup, login, dashboard, settings). Collect every console error and warning. Then look at the source code and propose fixes for each one, ranked by severity.\"",
            "\"Take screenshots of every page in my app at 1920x1080, 768x768, and 375x667. Compare against the screenshots in ./baseline/. Tell me which pages have visual regressions and what changed.\"",
            "\"Walk through my checkout flow at localhost:5173 as a real user would. Record what you do, then generate a Playwright test file that covers this flow with proper assertions and waits. Save it to tests/e2e/checkout.spec.ts.\"",
            "\"The tests in tests/e2e/login.spec.ts are failing. Run them, use the browser to inspect the actual current DOM at localhost:5173/login, figure out whether the test is wrong or the app is broken, and fix whichever side is actually broken.\"",
            "\"Crawl every page linked from my homepage at localhost:5173 (up to 2 levels deep). For each page, capture: page title, meta description, H1, word count, broken links, and load time. Give me a table sorted by problems found.\"",
            "\"Test the signup form at localhost:5173/signup with these edge cases: empty fields, SQL injection strings, extremely long inputs, unicode/emoji, passwords that don't match, already-taken emails. For each, report what happened and whether the app handled it gracefully. Fix any issues you find in the validation logic.\"",
            "\"Walk through the first-time user onboarding at localhost:5173. Screenshot each step, document what the user sees and does, and produce a getting-started guide with screenshots in docs/getting-started.md.\"",
          ]},
        ],
      },
      "Context7 MCP: Claude Gets Up-to-Date Docs": {
        slug: "context7-mcp-claude-gets-up-to-date-docs",
        title: "Context7 MCP: Claude Gets Up-to-Date Docs",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Claude was trained on data up to a certain point in time. That means when you ask Claude about a library or framework —" },
          { type: "list", items: [
            "It might know React 18 but not React 19",
            "It might suggest deprecated APIs that no longer exist",
            "It might miss new features released last month",
            "It might confidently give you code that doesn't work anymore",
          ]},
          { type: "paragraph", text: "This isn't Claude being careless. This is just how LLMs work. Training data has a cutoff. The problem isn't Claude's intelligence. It's that documentation moves faster than training cycles." },
          { type: "paragraph", text: "Context7 is a documentation intelligence service that:" },
          { type: "list", items: [
            "Indexes official documentation for thousands of libraries",
            "Keeps docs continuously updated — always latest version",
            "Serves docs in a format optimized for LLMs — not humans",
            "Pulls only the relevant section — not the entire docs site",
          ]},
          { type: "paragraph", text: "Normal docs are written for humans to browse. Context7 docs are structured for AI to use. Think of it as a live, always-fresh documentation feed that Claude can query on demand — for any library, any version, right now." },
          { type: "heading", level: 2, text: "One Command. Always-Fresh Docs for Claude." },
          { type: "code", text: "claude mcp add --transport http context7 --scope project https://mcp.context7.com/mcp" },
          { type: "paragraph", text: "Notice something different here vs Playwright? No npx. No local process. This is a remote MCP server — hosted on the internet. Claude reaches out to it over HTTP, live." },
          { type: "paragraph", text: "Here's a real problem worth solving with context7:" },
          { type: "paragraph", text: "Problem: App.jsx eagerly imports all 18 page components at the top — admin pages, employer pages, everything — all bundled into the initial JS chunk. Most users (job seekers) never visit admin or employer routes, but they pay the load cost anyway." },
          { type: "paragraph", text: "Fix: Lazy-load routes with React's lazy() + Suspense. React Router 7 (you're on v7.8) has specific patterns for this that differ from v6." },
          { type: "paragraph", text: "context7 is the right tool here — React Router 7's lazy API changed from v6 and the docs will give us the exact current approach." },
          { type: "paragraph", text: "Sample Prompt:" },
          { type: "paragraph", text: "Using context7, look up the React Router DOM v7 docs for lazy-loading routes with React.lazy() and Suspense. Then refactor src/App.jsx in this job portal to lazy-load all page components instead of eagerly importing them. Keep the provider nesting order and route structure intact. Add a simple fallback (a centered spinner or \"Loading...\" text) for the Suspense boundary. Use the exact API from the fetched docs — don't rely on v6 patterns." },
        ],
      },
      "Other common scenarios with MCP": {
        slug: "other-common-scenarios-with-mcp",
        title: "Other common scenarios with MCP",
        body: null,
        example: null,
        sections: [
          { type: "table", headers: ["Scenario", "Problem solved", "Key MCP Servers", "Sample prompt", "Expected outcome"], rows: [
            ["Ticket → Code → PR", "Manual Jira → coding → GitHub switching kills velocity", "Jira (or Linear) + GitHub + Filesystem", "\"Implement the exact feature described in JIRA issue ENG-4521. Read the full ticket details, write the code, run tests, commit, and open a PR on GitHub with proper description and link back to the ticket.\"", "Full feature implemented + PR created automatically"],
            ["Production Data → Code Insights", "Developers guess user impact because they can't easily query prod DB", "Postgres (or any DB) + Filesystem", "\"Query our PostgreSQL DB for the last 30 days of usage data for feature X. Cross-reference with the relevant code modules in our repo. Suggest and implement 2 optimizations based on the data. Create a branch and commit the changes.\"", "Data-driven code changes with proof (DB query results shown)."],
            ["Monitoring → Auto-Fix", "Bug triage from Sentry is slow and error-prone", "Sentry (or similar monitoring MCP) + GitHub", "Check recent errors in Sentry related to the authentication module. Analyze the stack traces against our codebase, fix the root cause, run tests, and create a PR with before/after metrics", "Real bugs fixed live in the demo."],
            ["Cross-Tool Automation (e.g., Notion → Slack → Code)", "Team updates scattered across docs, chat, and code", "Notion + Slack + GitHub + Filesystem", "\"Read the latest product spec from Notion page [link]. Update the README and relevant code files. Post a summary to our #engineering Slack channel and create a tracking issue in GitHub.\"", "Complete workflow across 4 tools with zero manual steps."],
          ]},
        ],
      },
      "MCP Tools and Context Window": {
        slug: "mcp-tools-and-context-window",
        title: "MCP Tools and Context Window",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "The moment your session starts, Claude Code fetches just the tool names from all connected MCP servers — not the full schemas. Think chapter titles, not full chapters. The complete JSON schema for a tool only loads when Claude actually needs it to handle your prompt." },
          { type: "heading", level: 2, text: "How Tool Search works:" },
          { type: "paragraph", text: "It's on by default. Claude scans the lightweight list of tool names, matches what your prompt needs, and pulls in only that tool's full definition. Everything else stays as a one-line reference in the background." },
          { type: "heading", level: 2, text: "What this means for your context window:" },
          { type: "paragraph", text: "Idle tools cost almost nothing. Context only grows when a tool is actually used — and only for that one tool. This is why you can connect 10+ MCP servers without blowing up your context. Roughly 95% less context consumption compared to loading everything upfront." },
          { type: "paragraph", text: "In the context window: at Session start, Claude.md is full content always in context & used for every prompt; Skills Metadata loads only name and description; MCP Servers load only tool names with schemas on demand. On use, Skills load full content into context. Isolated: Hooks run externally, zero cost unless the hook returns additional context." },
        ],
      },
      "Running prompts on a schedule": {
        slug: "running-prompts-on-a-schedule",
        title: "Running prompts on a schedule",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Many times we want to check status of a external task while working with Claude Code. Like," },
          { type: "list", items: [
            "You kicked off a deployment 10 minutes ago. Is it done?",
            "You pushed a PR. Did CI pass? Any review comments?",
            "A long build is running. You keep Cmd+Tab-ing back to check.",
          ]},
          { type: "paragraph", text: "The problem: You're either babysitting Claude Code, or you've walked away and forgotten about it." },
          { type: "heading", level: 2, text: "/loop — Run a prompt on repeat, hands-free" },
          { type: "paragraph", text: "A bundled skill in Claude Code that re-runs your prompt automatically at a chosen interval, while your session stays open." },
          { type: "table", headers: ["What you provide", "Example", "What happens"], rows: [
            ["Interval + Prompt", "/loop 5m check the deploy", "Runs your prompt on a fixed schedule"],
            ["Prompt only", "/loop check the deploy", "Claude picks the interval smartly each time"],
            ["Nothing", "/loop", "Runs the built-in maintenance prompt"],
          ]},
          { type: "paragraph", text: "You can even loop another command → /loop 20m /review-pr 1234" },
          { type: "heading", level: 2, text: "Smart interval (/loop … with no time)" },
          { type: "list", items: [
            "Claude picks 1 min to 1 hour based on what it sees",
            "Active build? Short waits. Quiet PR? Longer waits.",
            "Prints the chosen delay + reason after each iteration",
          ]},
          { type: "heading", level: 2, text: "The Built-in Maintenance Prompt" },
          { type: "paragraph", text: "Just type /loop — Claude becomes your project caretaker. When you give it nothing, Claude auto-runs a maintenance routine:" },
          { type: "list", items: [
            "Continues any unfinished work from the conversation",
            "Tends to the current branch's PR — review comments, failed CI, merge conflicts",
            "Runs cleanup passes — bug hunts, simplifications — when nothing's pending",
          ]},
          { type: "paragraph", text: "Important: Claude won't start new initiatives or push/delete unless the conversation already authorized it." },
          { type: "paragraph", text: "Customize it: Drop a loop.md file to define your own default prompt:" },
          { type: "list", items: [
            ".claude/loop.md → project-level (wins if both exist)",
            "~/.claude/loop.md → user-level (applies everywhere)",
          ]},
          { type: "heading", level: 2, text: "Things to keep in mind" },
          { type: "paragraph", text: "To stop a loop: Press Esc while it's waiting for the next iteration." },
          { type: "paragraph", text: "Key limits:" },
          { type: "list", items: [
            "Tasks only fire while Claude Code is running and idle — close the terminal, they stop",
            "Recurring tasks auto-expire after 7 days (one final fire, then gone)",
            "A fresh conversation clears all session-scoped tasks",
            "Resume with claude --resume to restore unexpired tasks",
          ]},
          { type: "paragraph", text: "Need durable scheduling? Look at Routines, Desktop scheduled tasks, or GitHub Actions — /loop is for in-session polling." },
        ],
      },
    },
  },
  "Agent, SubAgent, MultiAgents": {
    slug: "agent-subagent-multiagents",
    icon: "",
    subs: {
      "What Are Sub-Agents?": {
        slug: "what-are-sub-agents",
        title: "What Are Sub-Agents?",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "You're working on a large codebase. You ask Claude Code: \"Run the full test suite, explore the authentication module, fetch the latest API docs, and then fix the failing tests.\" Claude gets to work. And within minutes… your context window is drowning. Hundreds of lines of test logs. Walls of documentation. File contents you'll never look at again — all piling up in your main conversation, pushing out the things that actually matter." },
          { type: "paragraph", text: "This is exactly the problem that Sub Agents were built to solve." },
          { type: "paragraph", text: "Think of it like this. You're the architect on a building project. You don't personally lay every brick, run every wire, and install every pipe. You have specialists — an electrician, a plumber, a structural engineer — each focused on their domain, each reporting back to you with just the summary you need. That's exactly how Sub Agents work in Claude Code." },
          { type: "heading", level: 2, text: "What are Sub Agents?" },
          { type: "paragraph", text: "Sub-agents are specialized AI assistants that Claude Code can delegate tasks to. Think of it like a team lead assigning tasks to specialists — instead of doing everything itself, Claude Code sends specific tasks to the right expert." },
          { type: "paragraph", text: "Each sub-agent:" },
          { type: "list", items: [
            "Has a specific purpose and area of expertise",
            "Gets its own separate context window (doesn't pollute main conversation)",
            "Can be configured with specific tools it is allowed to use",
            "Follows a custom system prompt that guides its behavior",
          ]},
          { type: "paragraph", text: "Claude Code comes with built-in sub-agents like General-Purpose Agent, Plan Agent, Explore Agent." },
          { type: "heading", level: 2, text: "Why Use Sub-Agents?" },
          { type: "paragraph", text: "Sub-agents help solve common AI workflow problems:" },
          { type: "list", items: [
            "Better Context Management — Large outputs stay inside the sub-agent instead of cluttering the main conversation.",
            "Specialized Behavior — Each agent can be trained for a single responsibility.",
            "Cost Optimization — Tasks can be routed to faster or cheaper models.",
            "Controlled Permissions — You can restrict which tools or actions a sub-agent is allowed to use.",
            "Reusability — User-level sub-agents can be reused across projects.",
          ]},
          { type: "paragraph", text: "Every Sub Agent starts with a blank slate — its own fresh context, cut off from the main session, armed only with the specific tools and skills you hand it." },
        ],
      },
      "Creating a Sub-Agent": {
        slug: "creating-a-sub-agent",
        title: "Creating a Sub-Agent",
        body: null,
        example: null,
        sections: [
          { type: "list", items: [
            "Step 1: Run /agents in Claude Code",
            "Step 2: Select \"Create New Agent\" — choose project-level or user-level",
            "Step 3: Select \"Generate with Claude (recommended)\"",
            "Step 4: Provide a brief description on what your sub agent is supposed to do",
            "Step 5: Select the tools it needs, model, color and other configurations",
          ]},
          { type: "paragraph", text: "Claude Code will generate your sub-agent inside .claude/agents/ or ~/.claude/agents/. You can further customize it based on your requirements." },
          { type: "paragraph", text: "Alternatively, you can also create the markdown file directly inside .claude/agents/ or ~/.claude/agents/." },
          { type: "paragraph", text: "Subagent files are written using YAML frontmatter followed by instructions in Markdown. The frontmatter section defines how the subagent behaves, while the content below it becomes the system prompt that guides the agent's actions." },
          { type: "code", text: `---
name: api-documentation-helper
description: Generates clear API documentation from source code
tools: Read, Glob
model: sonnet
---

You are an API documentation specialist. When triggered, scan the
available source files and produce concise, developer-friendly
documentation that explains endpoints, request structures, and
responses.` },
          { type: "paragraph", text: "The frontmatter (the section between ---) contains configuration details such as: the subagent's name, a short description explaining when it should be used, which tools it is allowed to access, the model it should run on. The Markdown content below acts as the subagent's system prompt. It defines the role, behavior, and output style of the subagent." },
          { type: "paragraph", text: "When Claude activates this subagent, it only receives: this system prompt and basic environment information (like the working directory). It does not inherit the full main assistant instructions, which keeps the subagent focused and specialized." },
        ],
      },
      "Persistent Memory in Sub-Agents": {
        slug: "persistent-memory-in-sub-agents",
        title: "Persistent Memory in Sub-Agents",
        body: null,
        example: null,
        sections: [
          { type: "paragraph", text: "Sub-agents can be given persistent memory, which allows them to remember information across different conversations. When memory is enabled, the agent stores useful knowledge such as:" },
          { type: "list", items: [
            "Common patterns in the codebase",
            "Repeated issues it discovers",
            "Important design decisions",
            "Helpful debugging insights",
          ]},
          { type: "paragraph", text: "This makes the sub-agent smarter over time because it learns from previous tasks." },
          { type: "code", text: `---
name: test-analysis-agent
description: Analyzes test cases and tracks recurring failures
memory: user
---

You are a testing specialist. While reviewing test files, record repeated
failures, flaky tests, and common patterns into your agent memory so you
can recognize them in future reviews.` },
          { type: "paragraph", text: "You can control where the memory is stored depending on how broadly it should be used. The allowed valid values are user, project, local." },
          { type: "heading", level: 2, text: "What Happens When Memory Is Enabled?" },
          { type: "paragraph", text: "When a sub-agent uses memory:" },
          { type: "list", items: [
            "Its system prompt includes instructions for reading and updating memory files.",
            "The first 200 lines of MEMORY.md are automatically provided to the agent.",
            "If the file grows too large, the agent is guided to keep it concise.",
            "The tools Read, Write, and Edit are automatically enabled so the agent can manage its memory.",
          ]},
          { type: "heading", level: 2, text: "How to Use Memory Effectively" },
          { type: "paragraph", text: "You can guide the sub-agent with simple instructions:" },
          { type: "list", items: [
            "Before starting work → \"Check your memory for similar issues before analyzing this code.\"",
            "After finishing work → \"Save the important findings to your memory.\"",
          ]},
          { type: "paragraph", text: "Over time, this creates a growing knowledge base that improves the agent's performance." },
        ],
      },
      "Working with Sub-Agents": {
        slug: "working-with-sub-agents",
        title: "Working with Sub-Agents",
        body: null,
        example: null,
        sections: [
          { type: "heading", level: 2, text: "Automatic Delegation" },
          { type: "paragraph", text: "Claude decides when to use a sub-agent based on:" },
          { type: "list", items: [
            "The wording of your request",
            "The description defined inside the sub-agent file",
            "The current working context",
          ]},
          { type: "paragraph", text: "If a task matches a sub-agent's purpose, Claude can delegate the work automatically. To encourage this behavior, you can add phrases like \"use proactively\" in the sub-agent's description so Claude knows it should be selected whenever relevant." },
          { type: "heading", level: 2, text: "Foreground vs Background Execution" },
          { type: "paragraph", text: "Sub-agents can run in two different modes depending on how you want them to behave." },
          { type: "paragraph", text: "Foreground Execution (Blocking): The main conversation waits until the sub-agent finishes. Any permission prompts or clarification questions are shown directly to you. Best for tasks where you want full visibility and control." },
          { type: "paragraph", text: "Background Execution (Concurrent): The sub-agent runs while you continue working. Before starting, Claude asks for all required tool permissions. After approval, the sub-agent automatically uses only those permissions." },
        ],
      },
    },
  },
}

export default data
