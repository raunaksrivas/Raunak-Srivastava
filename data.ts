
import { Experience, Skill, Education, Certification, Project } from './types.ts';

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-through-black',
    company: 'Through Black (Danke Group)',
    role: 'Strategic Engine – Marketing & Operations',
    duration: 'Aug 2024 - Jan 2026',
    location: 'Remote / Global',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=2000',
    summary: 'Drove GTM execution and product marketing for aerospace and industrial clients while leading international expansion initiatives across Southeast Asia and Europe.',
    achievements: [
      'GTM & Product Marketing: Directed technical content and brand strategy for Datum Advanced Composites at DroneX London, translating complex aerospace engineering specs into buyer-ready narratives.',
      'Global Expansion: Led Vietnam market research and initial partnership negotiations, establishing the groundwork for channel partnerships and formalized MOU across Southeast and South Asia.',
      'Brand Authority: Managed end-to-end social media engine for Transformers & Rectifiers India Ltd, driving 40%+ consistent engagement growth and positioning the brand as a technical authority.',
      'Event Execution: Orchestrated end-to-end stall execution for 10+ clients at ELECRAMA, coordinating vendors and timelines for 100% on-time delivery at India\'s largest electronics expo.'
    ],
    tools: ['GTM Strategy', 'Technical Storytelling', 'International BD', 'Market Research', 'Stakeholder Management'],
    metrics: 'MOU Secured & 40%+ Engagement Growth'
  },
  {
    id: 'exp-riya-advisories',
    company: 'Riya Advisories (Danke Group)',
    role: 'Project & Marketing Associate',
    duration: 'June 2025 - Aug 2025',
    location: 'India',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000',
    summary: 'Delivered strategic consulting and project management for Fortune 500-level industrial clients across solar, FMCG, pharmaceutical, and infrastructure sectors.',
    achievements: [
      'Strategic Consulting: Provided consulting support for industry giants including Waaree (Solar), Amul (FMCG), Zydus (Pharma), and KEC International (Infrastructure).',
      'Project Delivery: Led stakeholder coordination between engineering teams and EPC contractors for substation projects, ensuring regulatory compliance and 100% alignment.',
      'Business Strategy: Acted as key strategist for group-level initiatives, bridging the gap between technical project requirements and long-term business goals.'
    ],
    tools: ['Enterprise Consulting', 'Stakeholder Management', 'Project Planning', 'Cross-functional Alignment'],
    metrics: 'Consulted for 4+ Fortune 500 Entities'
  },
  {
    id: 'exp-bharat-school',
    company: 'Bharat School E-Learning',
    role: 'Trainee Software Developer (Product Growth)',
    duration: 'Apr 2024 - Jul 2024',
    location: 'Remote',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2000',
    summary: 'Bridged engineering and growth through UX optimization and data-informed product enhancements.',
    achievements: [
      'UX Optimization: Conducted A/B testing on the quizzing platform, achieving a 30% increase in user satisfaction scores.',
      'MarTech Dashboards: Built real-time data visualization dashboards using React and Spring Boot, enabling the marketing team to track engagement metrics with 100% accuracy.',
      'Conversion: Streamlined user onboarding flows by identifying and removing technical friction points.'
    ],
    tools: ['React', 'Spring Boot', 'A/B Testing', 'Data Visualization', 'UX Strategy'],
    metrics: '30% Increase in User Satisfaction'
  },
  {
    id: 'exp-techno-sapphire',
    company: 'TechnoSapphire',
    role: 'Trainee Software Developer',
    duration: 'Jan 2023 - Mar 2023',
    location: 'India',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000',
    summary: 'Optimized web architecture for high-performance user engagement and lead conversion.',
    achievements: [
      'Engagement Strategy: Developed responsive web platforms and optimized architecture, improving user engagement metrics by 25%.',
      'Conversion Optimization: Led UI/UX enhancements that reduced bounce rates by 15% through precision journey mapping.',
      'Architecture: Refactored legacy frontend code to improve load times by 40%, directly impacting SEO rankings.'
    ],
    tools: ['HTML/CSS', 'JavaScript', 'SEO/SEM', 'Conversion Optimization'],
    metrics: '25% Engagement Lift'
  },
  {
    id: 'exp-blw',
    company: 'Indian Railway (Banaras Locomotive Works)',
    role: 'Summer Intern (Business Intelligence)',
    duration: 'June 2022 - Jul 2022',
    location: 'Varanasi, India',
    image: 'https://etimg.etb2bimg.com/photo/117453520.cms',
    summary: 'Utilized data analytics to identify operational efficiencies and process gaps in high-scale manufacturing.',
    achievements: [
      'Business Intelligence: Analyzed billing systems using Python/SQL, identifying inefficiencies that reduced operational costs by 15%.',
      'Process Optimization: Conducted market research to identify process gaps, improving overall workflow efficiency by 10%.',
      'Data Discipline: Cleaned and structured legacy datasets for integration into modern BI dashboards.'
    ],
    tools: ['Python', 'SQL', 'Data Analytics', 'Process Optimization'],
    metrics: '15% Operational Cost Savings'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-tr-india',
    title: 'Transformers & Rectifiers India - B2B Brand Authority',
    category: 'Featured Case Study',
    description: 'Building brand recall among enterprise buyers through strategic technical storytelling.',
    longDescription: 'Challenge: Despite being an industry leader, the company had zero digital presence and an Instagram account polluted with 18k+ fake followers.\n\nStrategy:\n1. Quality Audit: Initiated a small-batch fake follower removal program to prioritize authentic community over vanity metrics.\n2. Technical Translation: Converted complex engineering (National Electrification, Digital Grids) into educational content.\n3. Content Mix: Deployed a balanced 50/50 Reels-to-Static ratio localized for the Gujarat market.\n\nResults:\n- 40%+ engagement growth on LinkedIn.\n- Peak engagement rate of 47.55% for values-driven content.\n- Page views increased by 38.1% (7,398 views in 30 days).',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    tags: ['B2B Brand Strategy', 'Technical Writing', 'LinkedIn Authority', 'Performance Analytics'],
    link: 'https://www.linkedin.com/in/theraunaksri/'
  },
  {
    id: 'proj-swiggy',
    title: 'Swiggy Instamart: AOV Optimization Strategy',
    category: 'Core Case Study',
    description: 'Bridging the ₹187 gap: A behavioral framework to increase Average Order Value.',
    longDescription: 'Challenge: Swiggy Instamart (AOV ₹420) was lagging 45% behind the market leader Blinkit (AOV ₹607).\n\nStrategic Approach:\n- RICE Framework: Prioritized "Limited Period Sales" and "Exclusive Access" as high-impact growth levers.\n- Behavioral Economics: Deployed the Framing Effect ("Save ₹100 on ₹1000") and Scarcity Principle (countdown banners).\n- User Personas: Architected the "Ayaan" (27, Software Developer) persona to optimize midnight-craving bundles.\n\nStrategic Impact:\n- Defined 15% AOV growth roadmap.\n- Increased North Star Metric focus: Average Price Per Item and NPS.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Product Strategy', 'RICE Framework', 'Behavioral Economics', 'GTM Planning']
  },
  {
    id: 'proj-dronex',
    title: 'Datum Advanced Composites - DroneX London GTM',
    category: 'Core Case Study',
    description: 'International exhibition strategy for high-stakes aerospace market entry.',
    longDescription: 'Challenge: Positioning an unknown materials firm to sophisticated European aerospace buyers with established suppliers.\n\nApproach:\n- Narrative Translation: Translated material science into "Business Performance Gains" for UAV manufacturers.\n- Conversation Architecture: Tiered introduction scripts for defense, commercial aviation, and drone buyers.\n- Gifting Strategy: Quality-over-quantity curated items to reflect premium aerospace standards.\n\nOutcomes:\n- Successfully generated 15+ high-intent qualified leads from European buyers.\n- Established credible UK market presence in the competitive aerospace segment.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Aerospace GTM', 'Technical Branding', 'Enterprise Sales Enablement', 'Exhibition Strategy']
  },
  {
    id: 'proj-lenskart',
    title: 'Lenskart vs Titan Eye+ : Co-location Analysis',
    category: 'Core Case Study',
    description: 'Decoding the "Second-Mover" Geospatial Intelligence in Indian Retail.',
    longDescription: 'Analysis: Identifying the deliberate strategy behind Lenskart opening stores adjacent to Titan Eye+ locations.\n\nStrategic Frameworks:\n- Agglomeration Effect: Transforming isolated stores into "Category Magnets," disrupting the 70% unorganized market.\n- CAC Arbitrage: Lenskart captures spillover traffic from Titan\'s high-cost first-mover location validation.\n- Differentiated Velocity: Positioning Titan as "Clinical Trust" vs. Lenskart as "Fashion Accessibility" to avoid cannibalization.\n\nImpact: Viral LinkedIn strategic post demonstrating pattern recognition in retail competitive dynamics.',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=1200',
    tags: ['Competitive Strategy', 'Retail Dynamics', 'Geospatial Intelligence', 'Market Dynamics'],
    link: 'https://www.linkedin.com/in/theraunaksri/'
  },
  {
    id: 'proj-branding-system',
    title: 'Branding Is a Commercial System',
    category: 'Strategic Framework',
    description: 'Repositioning brand work from creative exercise to commercial infrastructure.',
    longDescription: 'Framework: Branding is not art; it is a system of strategic constraints that accelerates decision-making.\n\nCore Components:\n1. Branding with Intent: Every communication performs a specific "Job to be Done" (Education, Trust, or Differentiation).\n2. Funnel Thinking: Awareness = Memorability; Consideration = Credibility; Conversion = Trust.\n3. Friction Identification: Branding designed to remove specific customer hesitation points rather than just "look good."\n\nImpact: Establishes a commercial alignment between creative execution and business ROI.',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=1200',
    tags: ['Systems Thinking', 'Brand Platform', 'Marketing Ops', 'ROI Alignment']
  },
  {
    id: 'proj-vietnam-expansion',
    title: 'Vietnam Market Expansion & Channel Partnerships',
    category: 'Supporting Case Study',
    description: 'International business development and regional expansion roadmap.',
    longDescription: 'Challenge: Expand into Southeast Asian markets with zero existing presence, using Vietnam as the strategic beachhead.\n\nStrategic Approach:\n- Market Research: Primary research on Vietnam\'s quick commerce and retail landscape.\n- Negotiation: Led initial discussions with Vietnamese business partners, navigating cross-cultural communication.\n- Regional Roadmap: Structured the framework for formalized MOUs and channel partnerships across Southeast and South Asia.\n\nOutcome: Laid the foundational footprint for regional expansion and secured key high-level stakeholder relationships.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200',
    tags: ['International BD', 'Market Research', 'Partnership Strategy', 'Cross-Cultural Negotiation']
  },
  {
    id: 'proj-elecrama',
    title: 'ELECRAMA 2024 - Multi-Client Execution at Scale',
    category: 'Supporting Case Study',
    description: 'Managing 10+ simultaneous brand activations at India\'s largest electronics expo.',
    longDescription: 'Challenge: Delivering 10+ simultaneous booth executions with 100% brand consistency and zero logistical failures.\n\nExecution Strategy:\n- Parallel Timelines: Managed multi-vendor coordination across design, fabrication, and installation.\n- Stakeholder Management: Negotiated vendor contracts and quality control for industry giants.\n- Quality Assurance: Enforcement of brand guidelines across complex physical installations under high pressure.\n\nResults: 100% on-time delivery for all clients with zero escalations, securing repeat business for future high-scale exhibitions.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    tags: ['Project Management', 'Event Strategy', 'Vendor Coordination', 'Stakeholder Alignment']
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Product Marketing & GTM',
    items: ['SaaS GTM Strategy', 'Technical Storytelling', 'Product Positioning', 'Launch Planning', 'Customer Adoption', 'Buyer-Ready Narratives']
  },
  {
    category: 'Marketing × Technology',
    items: ['Building React Dashboards', 'SQL-driven Data Insights', 'Performance Marketing', 'ROI Modeling', 'A/B Testing']
  },
  {
    category: 'Strategic Consulting × Execution',
    items: ['International BD (Vietnam/UK)', 'Enterprise Consulting (Amul, Zydus)', 'Compliance Management', 'Multi-Project Management']
  },
  {
    category: 'Technical Foundation',
    items: ['Python for Data', 'React & Spring Boot', 'Data Analytics', 'Agile Methodologies']
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'KNIT, Sultanpur',
    degree: "B.Tech in Information Technology",
    duration: '2019 - 2023',
    summary: 'The technical foundation: Started in IT engineering to understand the logic of complex systems—now bridging that precision into Product Marketing and GTM execution.'
  },
  {
    institution: 'McKinsey & Company',
    degree: 'McKinsey Forward Program Alumni',
    duration: '2025',
    summary: 'Structured problem-solving, digital transformation, and adaptable leadership frameworks applied to high-stakes business challenges.'
  },
  {
    institution: 'Aspire Institute (Harvard-founded)',
    degree: 'Aspire Leaders Program (Cohort 5)',
    duration: 'Oct 2025 - Jan 2026',
    summary: 'Competitively selected for a global leadership program focusing on organizational leadership, entrepreneurship, and social impact.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Fundamentals of Digital Marketing', issuer: 'Google' },
  { name: 'AWS Fundamentals Specialization', issuer: 'AWS' },
  { name: 'Cloud Computing Foundations', issuer: 'IBM' },
  { name: 'Software Testing & QA', issuer: 'Industry Standard' }
];
