/**
 * Verified Education & Academic Data Layer
 * Source of truth: Portfolio Intelligence Report.
 * Zero manufactured degrees, GPA scores, or completion claims.
 */

export const EDUCATION = [
  {
    id: 'astu-mechanical-eng',
    index: '01',
    degree: 'BSc Mechanical Engineering',
    institution: 'Adama Science and Technology University (ASTU)',
    period: '2020 – 2025',
    program: 'Regular Program',
    distinction: 'Great Distinction',
    status: 'COMPLETED',
    isCurrent: false,
    metrics: [
      { label: 'CGPA', value: '3.58 / 4.00' },
      { label: 'MAJOR GPA', value: '3.76 / 4.00' },
      { label: 'CAPSTONE', value: 'A+ Grade' },
    ],
    capstone: 'AquaSense AI / Smart Irrigation System',
    focus: 'Physical systems modeling, thermodynamics, mechanical design, CAD modeling, and IoT integration.',
  },
  {
    id: 'harambee-marketing-mgmt',
    index: '02',
    degree: 'BA Marketing Management',
    institution: 'Harambee University',
    period: '2021 – 2026',
    program: 'Weekend Program',
    distinction: 'High Standing',
    status: 'COMPLETED',
    isCurrent: false,
    metrics: [
      { label: 'CGPA', value: '3.70 / 4.00' },
      { label: 'FOCUS', value: 'Operations & Strategy' },
    ],
    capstone: null,
    focus: 'Operational thinking, process mapping, business value orientation, market analysis, and stakeholder communication.',
  },
  {
    id: 'aau-msc-ai',
    index: '03',
    degree: 'MSc Artificial Intelligence',
    institution: 'Addis Ababa University (AAU)',
    period: '2026 – Present',
    program: 'Postgraduate Degree',
    distinction: 'Competitive Entrance Examination Merit',
    status: 'ACTIVE',
    isCurrent: true,
    metrics: [
      { label: 'STATUS', value: 'Enrolled' },
      { label: 'ADMISSION', value: 'Competitive Examination' },
    ],
    capstone: null,
    focus: 'Advanced machine learning, deep learning theory, natural language processing, computer vision, and cognitive systems.',
  },
  {
    id: 'ibt-college-fullstack',
    index: '04',
    degree: 'Advanced Digital & Full-Stack Software Development',
    institution: 'IBT College Canada',
    period: 'July 2026 – Present',
    program: 'Applied Software Engineering Program',
    distinction: 'Active Specialization',
    status: 'ACTIVE',
    isCurrent: true,
    metrics: [
      { label: 'STATUS', value: 'Active Program' },
      { label: 'FOCUS', value: 'Full-Stack Architecture & QA' },
    ],
    capstone: null,
    focus: 'React, Next.js, backend APIs, relational & NoSQL databases, automated QA testing suites, CI/CD pipelines, and software design.',
  },
];
