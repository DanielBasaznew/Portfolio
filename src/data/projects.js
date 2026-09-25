/**
 * Verified Projects Data Layer
 * Source of truth: Portfolio Intelligence Report & Project Strategy specifications.
 * Zero manufactured claims or invented links.
 */

export const PROJECTS = [
  {
    id: 'ai-engineering-assistant',
    index: '01',
    category: 'AGENTIC AI / MCP',
    title: 'AI Engineering Assistant',
    tagline: 'Autonomous multi-tool agent system built on the Model Context Protocol (MCP) and deterministic guardrails.',
    description:
      'A production-oriented AI engineering assistant designed around autonomous tool execution, semantic document retrieval, runtime resilience, and verifiable test suites.',
    problem:
      'Complex software workflows require multi-step reasoning, external tool invocation, and dynamic retrieval across unstructured documentation without hallucination or unbounded execution loops.',
    solution:
      'Engineered an autonomous agent runtime utilizing the MCP SDK (stdio transport), ChromaDB semantic vector search, Langfuse distributed tracing, and Tenacity retry/circuit-breaker policies.',
    technologies: [
      'Python',
      'Gemini',
      'MCP SDK',
      'CrewAI',
      'ChromaDB',
      'SentenceTransformers',
      'SQLite',
      'Langfuse',
      'PyMuPDF',
      'Tenacity',
    ],
    proofPoints: [
      { label: '42+ TESTS', desc: 'Unit & integration regression suites' },
      { label: 'MCP PROTOCOL', desc: 'Standardized tool & resource transport' },
      { label: 'LANGFUSE TRACING', desc: 'Token, latency & cost telemetry' },
      { label: 'GUARDRAILS', desc: 'Circuit breakers & deterministic retries' },
    ],
    links: {
      github: 'https://github.com/DanielBasaznew/ai-engineering-assistant',
      demo: null,
      statusText: 'Public Repository',
    },
    access: 'public',
    featured: true,
  },
  {
    id: 'azmera-hub',
    index: '02',
    category: 'FULL-STACK / HACKATHON',
    title: 'Azmera-Hub',
    tagline: 'Geospatial marketplace & logistics routing platform for Ethiopian teff supply chains.',
    description:
      'A full-stack agricultural marketplace and logistics platform built during the Cursor AI Hackathon to bridge communication and supply gaps across agricultural hubs.',
    problem:
      'Grain supply chains in regional Ethiopia suffer from information asymmetry, manual coordination overhead, and inefficient distribution routes between farmers, grain collectors, and commercial buyers.',
    solution:
      'Architected a full-stack platform with Next.js and Fastify, integrating PostGIS spatial indexing for route optimization, Chapa API payment gateway integration, and Docker containerization.',
    technologies: [
      'Next.js',
      'React',
      'Fastify',
      'PostgreSQL',
      'PostGIS',
      'Docker',
      'Chapa',
      'Cursor SDK',
    ],
    proofPoints: [
      { label: 'CURSOR HACKATHON', desc: 'Collaborative team hackathon delivery' },
      { label: 'POSTGIS ROUTING', desc: 'Geospatial queries & regional logistics' },
      { label: 'END-TO-END FLOW', desc: 'Listing, escrow checkout & fulfillment' },
    ],
    links: {
      github: null,
      demo: null,
      statusText: 'Private / Project assets available',
    },
    access: 'private',
    featured: false,
  },
  {
    id: 'retail-photo-location-combiner',
    index: '03',
    category: 'ENTERPRISE AUTOMATION',
    title: 'Retail Photo, Location & Summary Combiner',
    tagline: 'Automated field-audit reconciliation & multi-channel reporting pipeline across 25+ distribution channels.',
    description:
      'An enterprise automation pipeline that ingests unorganized field-audit photos, extracts location telemetry, matches retail store registries, and automates multi-market reporting.',
    problem:
      'Field auditors captured thousands of unsorted shelf audit images and GPS coordinates daily across regional markets, creating severe data reconciliation bottlenecks and manual reporting delays.',
    solution:
      'Developed an automated headless pipeline using Telethon for automated ingestion, RapidFuzz for high-speed fuzzy store matching, Gemini API for visual audit parsing, and OpenPyXL/Pandas for automated dispatch generation.',
    technologies: [
      'Python',
      'Telethon',
      'RapidFuzz',
      'Gemini',
      'OpenPyXL',
      'Pandas',
      'SQLite',
    ],
    proofPoints: [
      { label: '25+ CHANNELS', desc: 'Automated regional distribution feeds' },
      { label: '80%+ TIME SAVINGS', desc: 'Eliminated manual reporting overhead' },
      { label: 'FUZZY MATCHING', desc: 'High-tolerance store coordinate reconciliation' },
    ],
    links: {
      github: null,
      demo: null,
      statusText: 'Private Enterprise System',
    },
    access: 'private',
    featured: false,
  },
  {
    id: 'asset-verification-dashboard',
    index: '04',
    category: 'FULL-STACK / DATA',
    title: 'Asset Verification Dashboard',
    tagline: 'Production operations dashboard for structured enterprise asset verification, filtering, and telemetry.',
    description:
      'A responsive data analytics and verification dashboard engineered to track, inspect, and visualize distributed physical operational assets with live relational queries.',
    problem:
      'Operations supervisors lacked a centralized, real-time dashboard to monitor, verify, and filter distributed assets across physical regional sites with low-latency interaction.',
    solution:
      'Created a responsive data analytics console with Next.js 14, React, Tailwind CSS, Recharts for visual analytics, Drizzle ORM, and Neon PostgreSQL for serverless relational queries.',
    technologies: [
      'Next.js 14',
      'React',
      'Tailwind CSS',
      'Recharts',
      'Drizzle ORM',
      'Neon PostgreSQL',
    ],
    proofPoints: [
      { label: 'SERVERLESS NEON', desc: 'Low-latency serverless Postgres backend' },
      { label: 'LIVE ANALYTICS', desc: 'Interactive Recharts visualization' },
      { label: 'PRODUCTION DEPLOYED', desc: 'Live public deployment on Vercel' },
    ],
    links: {
      github: null,
      demo: 'https://asset-verification-dashboard.vercel.app',
      statusText: 'Live Deployment',
    },
    access: 'deployed',
    featured: false,
  },
  {
    id: 'aquasense-ai',
    index: '05',
    category: 'AI + IoT / ENGINEERING',
    title: 'AquaSense AI / Smart Irrigation',
    tagline: 'Predictive precision irrigation system integrating IoT edge sensors with machine learning calibration.',
    description:
      'An intelligent irrigation system combining IoT microcontrollers, soil moisture sensor calibration, machine learning models, and mechanical CAD design to optimize agricultural water consumption.',
    problem:
      'Traditional schedule-based irrigation causes severe water wastage and uneven soil moisture in climate-vulnerable agricultural environments, resulting in stressed crops and resource depletion.',
    solution:
      'Designed and simulated an IoT edge sensing node on ESP32/Wokwi with Arduino firmware, feeding sensor telemetry into scikit-learn models for data-driven, adaptive irrigation trigger cycles.',
    technologies: [
      'ESP32',
      'Wokwi',
      'Arduino',
      'Python',
      'scikit-learn',
      'SolidWorks',
    ],
    proofPoints: [
      { label: 'A+ CAPSTONE', desc: 'Graduation honors at IBT College Canada' },
      { label: 'EDGE + ML', desc: 'Sensory telemetry to scikit-learn calibration' },
      { label: 'CAD & IOT', desc: 'Mechanical enclosure & hydraulic design' },
    ],
    links: {
      github: 'https://github.com/DanielBasaznew/Smart-Irrigation-System',
      demo: null,
      statusText: 'Public Repository',
    },
    access: 'public',
    featured: false,
  },
  {
    id: 'whisper-amharic-shewa',
    index: '06',
    category: 'SPEECH AI',
    title: 'Whisper Speech Fine-Tuning — Amharic Shewa',
    tagline: 'Acoustic fine-tuning of OpenAI Whisper for low-resource regional dialect speech recognition.',
    description:
      'Domain adaptation and fine-tuning of the Whisper automatic speech recognition model for the regional Amharic Shewa dialect, improving transcription accuracy on low-resource audio datasets.',
    problem:
      'Off-the-shelf multilingual ASR models demonstrate significantly elevated Word Error Rates (WER) on regional Ethiopian dialects and accented vernacular audio.',
    solution:
      'Implemented training and evaluation pipelines using PyTorch and Hugging Face Transformers to fine-tune Whisper on domain-specific regional audio corpora.',
    technologies: ['PyTorch', 'Hugging Face', 'Whisper', 'Python'],
    proofPoints: [
      { label: 'LOW-RESOURCE ASR', desc: 'Dialect-adapted acoustic modeling' },
      { label: 'HUGGING FACE', desc: 'Standardized model pipeline & evaluation' },
    ],
    links: {
      github: 'https://github.com/DanielBasaznew/whisper-amharic-shewa',
      demo: null,
      statusText: 'Public Repository',
    },
    access: 'public',
    featured: false,
    secondary: true,
  },
];
