
import { Experience, Skill, Education, Certification, Project } from './types.ts';

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-through-black',
    company: 'Through Black (Danke Group)',
    role: 'Marketing & Strategy Consultant',
    duration: 'Aug 2024 - Aug 2025',
    location: 'Remote / Global',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=2000',
    summary: 'Delivered strategy and execution for external clients across SE Asia and Europe, focusing on GTM and industrial branding.',
    achievements: [
      'Market Entry Strategy (Tier-1 UAV Manufacturer): Led narrative and content strategy for UK/Europe expansion, designing brochure structures and messaging hierarchies for DroneX London.',
      'International Expansion (Vietnam): Managed strategic partnership negotiations in Vietnam, leading to a formalised MOU for SE Asia expansion.',
      'Strategic Signaling & Merchandise: Shaped stakeholder-persona based merchandise strategy to establish Tier-1 credibility and reduce perceived supplier risk.',
      'Content & Digital Marketing (Transformers and Rectifiers India): Managed end-to-end social media engine for India\'s leading transformer manufacturer.',
      'Event Delivery (ELECRAMA): Managed stall execution for 10+ clients at India\'s largest electronics expo, ensuring 100% on-time premium handover.'
    ],
    tools: ['Risk Signaling', 'GTM Frameworks', 'Technical Branding', 'Stakeholder Alignment'],
    metrics: 'MOU Secured & Credibility Established'
  },
  {
    id: 'exp-riya-advisories',
    company: 'Riya Advisories (Danke Group)',
    role: 'Management Consultant - Industrial Projects',
    duration: 'Aug 2024 - Aug 2025',
    location: 'India',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000',
    summary: 'Project management and strategic consulting for Fortune 500 entities in energy and FMCG sectors.',
    achievements: [
      'Strategic Consulting: Provided PM and consulting support for leaders including Waaree, Amul, Zydus, and KEC International.',
      'Project Delivery: Led stakeholder coordination and compliance for substation and industrial power projects between engineering teams and EPC contractors.'
    ],
    tools: ['Enterprise PM', 'Business Case Development', 'Compliance Strategy'],
    metrics: 'Advisory for 4+ Fortune 500 Firms'
  },
  {
    id: 'exp-bharat-school',
    company: 'Bharat School E-Learning',
    role: 'Trainee Software Developer (UX & Product Growth)',
    duration: 'April 2024 - July 2024',
    location: 'Remote',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2000',
    summary: 'Optimised e-learning platform engagement through UX improvements and MarTech dashboards.',
    achievements: [
      'User Experience (UX): Conducted A/B testing and implemented design improvements on the quizzing platform, achieving a 30% increase in user satisfaction.',
      'MarTech Execution: Built data visualisation dashboards using React and Spring Boot to track user engagement metrics effectively.'
    ],
    tools: ['React', 'Spring Boot', 'A/B Testing', 'Data Viz'],
    metrics: '30% Satisfaction Increase'
  },
  {
    id: 'exp-techno-sapphire',
    company: 'Techno Sapphire Research',
    role: 'Trainee Software Developer (Web Optimisation)',
    duration: 'Jan 2023 - March 2023',
    location: 'India',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    summary: 'Improved site architecture and customer journey mapping to drive conversions.',
    achievements: [
      'Engagement Strategy: Developed responsive web platforms and optimised site architecture, improving user engagement metrics by 25%.',
      'Conversion Optimisation: Led UI/UX enhancements that reduced bounce rates by 15% through better interface design and mapping.'
    ],
    tools: ['UI/UX', 'Web Optimisation', 'Conversion Strategy'],
    metrics: '25% Engagement Improvement'
  },
  {
    id: 'exp-indian-railways',
    company: 'Banaras Locomotive Works (Indian Railways)',
    role: 'Summer Intern (Data Analytics)',
    duration: 'June 2022 - July 2022',
    location: 'Varanasi, India',
    image: 'https://images.unsplash.com/photo-1532105956690-b14a887bb9f2?auto=format&fit=crop&q=80&w=2000',
    summary: 'Industrial data analysis for operational efficiency and cost-saving identifying.',
    achievements: [
      'Business Intelligence: Analysed billing systems using data analytics tools, identifying cost-saving opportunities that reduced operational costs by 15%.',
      'Market Research: Identified process gaps, improving overall operational efficiency by 10%.'
    ],
    tools: ['Data Analytics', 'BI Tools', 'Process Mapping'],
    metrics: '15% Operational Cost Reduction'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-uav-strategy',
    title: 'UAV International Market Entry',
    category: 'Market Entry Strategy',
    description: 'UK/Europe entry strategy for a Tier-1 UAV Manufacturer, focusing on risk signaling and trust-building.',
    longDescription: 'Objective: Establish Tier-1 credibility for a domestic UAV leader entering the high-risk UK aerospace ecosystem.\n\nChallenge: No established brand recognition among Western aerospace buyers. Success depended on "not failing publicly" in a credibility-driven industry.\n\nStrategy: Prioritized "belonging over promotion" and "clarity over complexity." Designed a procurement-safe narrative and a structured signaling strategy (merchandise/brochures) to reduce perceived supplier risk.\n\nOutcome: Avoided credibility failure, achieved higher-quality stakeholder conversations, and enabled structured post-event follow-up recall.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Risk Signaling', 'Aerospace GTM', 'Communication Design']
  },
  {
    id: 'proj-vietnam-expansion',
    title: 'Vietnam Market Entry & Channel Strategy',
    category: 'Market Entry Consulting',
    description: 'Developing the strategic roadmap for Southeast Asian industrial expansion and cross-cultural negotiation.',
    longDescription: 'Client & Industry: Industrial Manufacturing firm expanding to SE Asia.\n\nChallenge: Establish a credible market presence in Vietnam with zero existing regional footprint or local network. Required navigating complex regulatory landscapes and fragmented distribution channels.\n\nApproach: Conducted primary market research on Vietnam\'s industrial infrastructure and retail environment. Managed end-to-end strategic partnership negotiations, leading to a formalized MOU for regional expansion.\n\nImpact: Secured foundational regional footprint and established high-level stakeholder relationships for long-term growth in the SE Asian market.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200',
    tags: ['International BD', 'Negotiation Strategy', 'Market Entry']
  },
  {
    id: 'proj-swiggy',
    title: 'Increasing AOV at Swiggy Instamart',
    category: 'Product Strategy & Growth',
    description: 'Bridging the ₹420 to ₹607 AOV gap through psychological pricing and optimized upsell logic.',
    longDescription: 'Objective: Increase the Average Order Value (AOV) from ₹420 toward the industry-leading ₹607 benchmark.\n\nProblem Space: Only 25% of the 9 million registered users were active paying customers, frequently purchasing low-value items. \n\nStrategic Recommendations:\n1. Scarcity & Urgency: Introduced "Limited Period Sale" banners with countdown timers and FOMO-driven notifications.\n2. Framing Effects: Pivoted from percentage discounts to value-based framing (e.g., "Save ₹100 on every ₹1000") to increase perceived value.\n3. Upsell Integration: Developed "Upgrade Popups" suggesting larger quantities during the "Add to Cart" flow to reward multi-category shopping.\n4. Operational Trust: Streamlined customer support with immediate refunds and order approval processes to drive repeat, high-value frequency.\n\nTarget Impact: Projected 15% increase in AOV within a 6-month roadmap.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&q=80&w=1200',
    tags: ['Product Growth', 'Upsell Strategy', 'A/B Testing Logic']
  },
  {
    id: 'proj-lenskart',
    title: 'Lenskart Retail Expansion Strategy',
    category: 'GTM Strategy',
    description: 'Regional footprint optimization and retail operations roadmap for physical store scaling.',
    longDescription: 'Objective: Develop a data-driven framework for selecting high-conversion retail locations for physical expansion.\n\nApproach: Analyzed online search intent and demographic data to cluster high-potential zones. Standardized retail SOPs to ensure brand consistency across new franchise and owned outlets.\n\nOutcome: Accelerated physical store deployment with higher Day-1 footfall and faster operational breakeven.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200',
    tags: ['Retail Ops', 'Regional GTM', 'Site Optimization']
  }
];

export const DESIGN_PROJECTS: Project[] = [
  {
    id: 'design-tesla-coil',
    title: 'MonoSketch: Tesla Coil',
    category: 'Illustration',
    description: 'Technical line art study of industrial engineering forms.',
    longDescription: 'A visual exploration of high-voltage testing apparatus, combining technical realism with artistic line work.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/52c67d242808295.610915f20817b.png',
    tags: ['Art', 'Engineering'],
    link: 'https://www.behance.net/gallery/242808295/MonoSketch-of-Tesla-coil',
    isGallery: true
  },
  {
    id: 'design-nari-nazariya',
    title: 'Nari Nazariya',
    category: 'Visual Design',
    description: 'Study of social perspective and visual narrative.',
    longDescription: '',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6b048d241193199.610915f20817b.png',
    tags: ['Identity', 'Typography'],
    link: 'https://www.behance.net/gallery/241193199/Nari-Nazariya',
    isGallery: true
  },
  {
    id: 'design-anime-transformer',
    title: 'Transformer in Anime',
    category: 'Concept Design',
    description: 'Stylized aesthetic study of complex machinery.',
    longDescription: '',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8e5b47242097339.610915f20817b.png',
    tags: ['Anime', 'Technical Art'],
    link: 'https://www.behance.net/gallery/242097339/Transformer-in-Anime',
    isGallery: true
  },
  {
    id: 'design-fit-india',
    title: 'Digital Fit India',
    category: 'Graphic Design',
    description: 'Visual system for a national movement.',
    longDescription: '',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/86d70a241193099.610915f20817b.png',
    tags: ['Campaign', 'Branding'],
    link: 'https://www.behance.net/gallery/241193099/Digital-Fit-India',
    isGallery: true
  },
  {
    id: 'design-bharat-pixels',
    title: 'The Bharat in Pixels',
    category: 'Digital Art',
    description: 'Pixel architecture and digital heritage design.',
    longDescription: '',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e0f06f241193033.610915f20817b.png',
    tags: ['Pixel Art', 'Heritage'],
    link: 'https://www.behance.net/gallery/241193033/The-Bharat-in-Pixels',
    isGallery: true
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Strategic Advisory',
    items: ['Go-to-Market Strategy', 'Market Entry', 'Risk Signaling', 'GTM Planning', 'M&A Frameworks']
  },
  {
    category: 'Product & Growth',
    items: ['A/B Testing', 'Conversion Optimization', 'User Engagement', 'Metrics Analysis', 'Product Strategy']
  },
  {
    category: 'MarTech & Data',
    items: ['React', 'Spring Boot', 'Data Analytics', 'BI Dashboards', 'Technical Documentation']
  },
  {
    category: 'Industrial Branding',
    items: ['Brand Architecture', 'Signaling Strategy', 'International Event PM', 'Stakeholder Management']
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'McKinsey & Company',
    degree: 'McKinsey Forward Program Alumni',
    duration: '2025',
    summary: 'Focused on structured problem-solving and adaptable leadership.'
  },
  {
    institution: 'Aspire Institute (Harvard-founded)',
    degree: 'Aspire Leaders Program (Cohort 5)',
    duration: '2025 - 2026',
    summary: 'Organizational leadership and strategic impact.'
  },
  {
    institution: 'KNIT, Sultanpur',
    degree: "B.Tech in Information Technology",
    duration: '2019 - 2023',
    summary: 'Technical foundation for bridging technical-business strategy gaps.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Fundamentals of Digital Marketing', issuer: 'Google' },
  { name: 'AWS Fundamentals Specialization', issuer: 'AWS' },
  { name: 'Cloud Computing Foundations', issuer: 'IBM' }
];
