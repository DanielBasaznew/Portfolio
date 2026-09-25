# Daniel Basaznew — Full Stack AI Engineer

Personal engineering portfolio showcasing production-grade autonomous agent systems, full-stack applications, and enterprise workflow automation pipelines.

> **Positioning:** Full Stack AI Engineer architecting production-grade autonomous agent systems, high-performance web applications, and enterprise workflow automation pipelines.

---

## About

Daniel Basaznew is an engineer who bridges physical engineering discipline with autonomous software architecture. 

- **Mechanical Engineering Foundation:** Graduated with Great Distinction from Adama Science and Technology University (ASTU). Trained in thermodynamics, multivariable physical dynamics, structural tolerances, and predictive modeling before writing production code.
- **Enterprise Operations & Automation:** Engineered automated reporting pipelines across 25+ regional distribution channels at PKF Ethiopia, Heineken, and Twinkle, reducing manual processing overhead by over 80%.
- **Full-Stack & Systems Architecture:** Formalized rigorous full-stack software engineering at IBT College Canada, building streaming APIs, deterministic schema validation layers, and distributed cloud applications.
- **Agentic AI & LLMs:** Specializes in Model Context Protocol (MCP), multi-agent orchestration, retrieval-augmented generation (RAG), vector embeddings, and deterministic reliability guardrails.

---

## Featured Systems

### 01. AI Engineering Assistant
Production-oriented agentic runtime integrating Model Context Protocol (MCP) stdio transports, Google Gemini function calling, persistent ChromaDB vector retrieval, and Langfuse distributed tracing.
- **Capabilities:** Autonomous tool execution, schema verification, session memory, Tenacity retry guardrails, circuit breakers.
- **Stack:** Python, FastAPI, Model Context Protocol (MCP), Google Gemini API, ChromaDB, Langfuse, Pydantic, Docker.
- **Repository:** [github.com/DanielBasaznew/AI-Engineering-Assistant](https://github.com/DanielBasaznew/AI-Engineering-Assistant)

### 02. Azmera-Hub
Cursor AI Hackathon agritech marketplace monorepo designed for agricultural supply-chain coordination and decentralized grain distribution.
- **Capabilities:** Autonomous dispatch coordination, geospatial query resolution, sub-50ms API responses, type-safe transactions.
- **Stack:** Next.js 14 (App Router), React 18, Fastify, TypeScript, PostGIS, Neon Serverless PostgreSQL, Drizzle ORM, Tailwind CSS.
- **Repository:** [github.com/DanielBasaznew/Azmera-Hub](https://github.com/DanielBasaznew/Azmera-Hub)

### 03. Retail Photo, Location & Summary Combiner
Enterprise automated intelligence pipeline transforming disparate Telegram channel media into verified, structured multi-market audit matrices.
- **Capabilities:** Telegram MTProto scraping, multimodal visual verification via Gemini 1.5 Flash Vision, fuzzy entity resolution (>85% matching threshold), automated Excel audit reports.
- **Stack:** Python, Telethon, Google Gemini 1.5 Flash Vision, RapidFuzz, Pandas, OpenPyXL.
- **Repository:** [github.com/DanielBasaznew/Retail-photo-location-and-summary-combiner](https://github.com/DanielBasaznew/Retail-photo-location-and-summary-combiner)

### 04. Asset Verification Dashboard
High-throughput operational telemetry and asset audit console engineered for logistics monitoring and real-time field status tracking.
- **Capabilities:** Dynamic query filtering, interactive status distributions, sub-second relational queries with zero cold-starts.
- **Stack:** Next.js 14, React 18, Tailwind CSS, Recharts, Neon Serverless PostgreSQL, Drizzle ORM.
- **Repository:** [github.com/DanielBasaznew/asset-verification-dashboard](https://github.com/DanielBasaznew/asset-verification-dashboard)

### 05. AquaSense AI / Smart Irrigation Automation
Multi-sensor IoT precision agriculture controller and predictive irrigation scheduling system (ASTU Mechanical Engineering Capstone, Grade A+).
- **Capabilities:** Sensor telemetry processing, predictive soil-moisture inference (96.88% accuracy), automated actuator relay control.
- **Stack:** Python, Scikit-Learn (Random Forest), ESP32 Microcontroller, C++, Wokwi IoT Simulation, SolidWorks CAD.
- **Repository:** [github.com/DanielBasaznew/AquaSense-AI](https://github.com/DanielBasaznew/AquaSense-AI)

### 06. Whisper Speech Fine-Tuning for Amharic Shewa Dialect
Domain-adapted automatic speech recognition model tailored for regional low-resource phonetic variants of Ethiopian Semitic languages.
- **Capabilities:** Phonetic transcription normalization, audio feature extraction, seq2seq fine-tuning.
- **Stack:** PyTorch, Hugging Face Transformers, OpenAI Whisper-Small, Amharic Speech Corpus, Librosa.
- **Repository:** [github.com/DanielBasaznew/Whisper-Amharic-Shewa-FineTuning](https://github.com/DanielBasaznew/Whisper-Amharic-Shewa-FineTuning)

---

## Technology Stack

| Domain | Technologies & Systems |
| :--- | :--- |
| **AI & Agentic Systems** | Model Context Protocol (MCP), CrewAI Multi-Agent, LangChain, RAG Architecture, ChromaDB, SentenceTransformers, Gemini/OpenAI/Anthropic APIs, Tenacity Guardrails, Langfuse Tracing |
| **Frontend Engineering** | React 19, JavaScript (ES2024), JSX, Vite, Tailwind CSS, Lucide React, Space Grotesk, JetBrains Mono |
| **Backend & Databases** | Python 3.11+, FastAPI, Fastify, PostgreSQL (Neon Serverless), SQLite, Pydantic, REST & SSE Streaming APIs |
| **Enterprise Automation** | Playwright, Selenium, Telethon (MTProto), RapidFuzz, Pandas, NumPy, OpenPyXL, n8n |
| **DevOps & Infrastructure** | Git, GitHub, Docker, GitHub Actions, Vercel Edge, Linux Shell |

---

## Portfolio Architecture

The portfolio application is built from the ground up without heavy external animation or 3D runtimes:

- **Framework:** React 19 + Vite + JavaScript/JSX (strictly zero TypeScript).
- **Styling Engine:** Tailwind CSS + CSS custom property tokens (`src/styles/tokens.css`).
- **Interactive HUD Cursor:** Layered velocity-responsive cursor calculating movement vectors in `requestAnimationFrame` with rotational inertia, velocity-based stretch, and contextual states (`EXPLORE`, `TECH`, `VISIT ↗`, button focus).
- **Spotlight Cards:** Hardware-accelerated card wrappers (`SpotlightCard.jsx`) casting cursor-following radial gradients via CSS variables without triggering React re-renders.
- **Motion & Storytelling:** Lightweight `IntersectionObserver` scroll reveals, sticky desktop case-study inspection columns, infinite marquee skill ribbons, and top scroll progress telemetry.
- **Accessibility:** Full keyboard focus indicators, strict semantic heading hierarchy, and complete adaptation for `prefers-reduced-motion` environments.
- **Responsive Breakdown:** Designed for 1440px desktop, 1024px laptop, 768px tablet, and 390px mobile viewports (custom cursor automatically disabled on touch devices).

---

## Visual Design System

- **Aesthetic Direction:** Production-Hardened Engineering HUD.
- **Palette:**
  - Base Canvas: Deep space obsidian (`#07090e`)
  - Elevated Surfaces: Dark slate cards (`#0e131f`, `#141b2d`)
  - Primary Accents: Electric Indigo (`#6366f1`), Telemetry Cyan (`#38bdf8`), Operational Emerald (`#10b981`), Warning Amber (`#f59e0b`)
- **Typography:**
  - Display & Headings: `Space Grotesk` (geometric, technical)
  - Code, Badges & Telemetry: `JetBrains Mono` (monospace precision)
- **Structure:** Clean geometric borders, blueprint alignment grids, subtle ambient glows, and micro-magnetic button attraction.

---

## Project Structure

```text
Portfolio/
├── public/
│   └── favicon.svg                    # SVG application icon
├── src/
│   ├── components/
│   │   ├── background/                # Blueprint grid, circuit traces & glow system
│   │   ├── Cursor/                    # Velocity-responsive layered HUD custom cursor
│   │   ├── Footer/                    # Global technical footer & navigation
│   │   ├── icons/                     # Custom SVG icons (GithubIcon, LinkedinIcon)
│   │   ├── layout/                    # Semantic Section and layout primitives
│   │   ├── motion/                    # IntersectionObserver-based Reveal container
│   │   ├── navigation/                # Sticky Navbar, HUD links & scroll progress
│   │   └── ui/                        # Button (magnetic pull), Container, SpotlightCard
│   ├── data/                          # Verified projects, skills, timeline, credentials
│   │   ├── certifications.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── sections/                      # Page sections
│   │   ├── About/                     # Narrative, convergence diagram & timeline
│   │   ├── Contact/                   # Direct communication terminal
│   │   ├── Education/                 # Academic rigor & certification registry
│   │   ├── Experience/                # Career timeline & verified impact chips
│   │   ├── Hero/                      # Headline, pillars & simulated telemetry HUD
│   │   ├── Projects/                  # Flagship systems & case study cards
│   │   └── Skills/                    # Architecture matrix & moving marquee
│   ├── styles/                        # Design tokens (tokens.css) & globals.css
│   ├── App.jsx                        # Root application layout
│   └── main.jsx                       # React 19 entrypoint
├── index.html                         # HTML template with Google Fonts preconnect
├── package.json                       # Dependencies & build scripts
├── postcss.config.js
├── tailwind.config.js                 # Extended theme, HUD glows & animations
├── vite.config.js                     # Vite build configuration
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation & Local Development

```bash
# 1. Clone repository
git clone https://github.com/DanielBasaznew/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

The application will be accessible at `http://localhost:5173/`.

### Quality & Production Commands

```bash
# Run oxlint fast linter
npm run lint

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Contact & Professional Links

- **Email:** [basaznewdaniel@gmail.com](mailto:basaznewdaniel@gmail.com)
- **GitHub:** [github.com/DanielBasaznew](https://github.com/DanielBasaznew)
- **LinkedIn:** [linkedin.com/in/daniel-basaznew](https://www.linkedin.com/in/daniel-basaznew)
- **Location:** Addis Ababa, Ethiopia · Available for Remote & Global Relocation

---

## License

Personal Engineering Portfolio — Copyright © 2025–2026 Daniel Basaznew. All rights reserved. The personal case studies, project architecture narratives, and professional background content remain the personal intellectual property of Daniel Basaznew.
