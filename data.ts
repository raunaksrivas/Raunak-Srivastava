import { Experience, Skill, Education, Certification, Project } from './types.ts';

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    company: 'Through Black (Danke Group)',
    role: 'Strategic Engine – Marketing & Operations',
    duration: 'Aug 2024 - Jan 2026',
    location: 'London / Global',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800',
    summary: 'Directed technical content and brand marketing for high-stakes industrial clients, focusing on GTM strategies and international expansion.',
    achievements: [
      'Directed technical content for DroneX London, translating engineering specs into buyer-ready narratives.',
      'Led Vietnam market research and initial negotiations for Southeast Asia expansion.',
      'Built high-engagement digital campaigns for India’s largest transformer manufacturer.',
      'Delivered end-to-end execution for 10+ clients at ELECRAMA expo.'
    ],
    tools: ['Market Research', 'Content Strategy', 'GTM Planning', 'Stakeholder Management'],
    metrics: '100% On-time delivery for major international events.'
  },
  {
    id: 'exp-riya',
    company: 'Riya Advisories & Projects',
    role: 'Project & Marketing Associate',
    duration: 'June 2025 - Aug 2025',
    location: 'Vadodara, India',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    summary: 'Delivered strategic consulting and project management for Fortune 500-level clients in the energy and industrial sectors.',
    achievements: [
      'Consulted for top-tier clients including Waaree, Amul, Zydus, and KEC International.',
      'Bridged the gap between technical project requirements and high-level business goals.',
      'Ensured 100% alignment between engineering teams and EPC contractors for power projects.'
    ],
    tools: ['Project Management', 'Consulting', 'Strategic Planning', 'Technical Documentation'],
    metrics: 'Managed delivery for Fortune 500 level portfolios.'
  },
  {
    id: 'exp-bharat',
    company: 'Bharat School E-Learning',
    role: 'Trainee Software Developer (Product Growth)',
    duration: 'Apr 2024 - Jul 2024',
    location: 'Remote',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    summary: 'Focused on UX optimization and MarTech execution to drive user satisfaction and tracking precision.',
    achievements: [
      'Conducted A/B testing on the quizzing platform, achieving a 30% increase in user satisfaction.',
      'Built data visualization dashboards using React and Spring Boot for marketing engagement tracking.',
      'Implemented design improvements across core user journeys.'
    ],
    tools: ['React', 'Spring Boot', 'A/B Testing', 'UX Optimization'],
    metrics: '30% Increase in User Satisfaction'
  },
  {
    id: 'exp-techno',
    company: 'TechnoSapphire',
    role: 'Trainee Software Developer',
    duration: 'Jan 2023 - Mar 2023',
    location: 'Noida, India',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    summary: 'Optimized site architecture and user engagement through strategic UI/UX enhancements.',
    achievements: [
      'Developed responsive web platforms improving user engagement metrics by 25%.',
      'Led UI/UX enhancements that reduced bounce rates by 15% through customer journey mapping.',
      'Engineered front-end components for a high-traffic legal service platform.'
    ],
    tools: ['CSS', '.NET Core', 'UI/UX Design', 'Engagement Strategy'],
    metrics: '25% Engagement Improvement'
  },
  {
    id: 'exp-railway',
    company: 'Indian Railway',
    role: 'Summer Intern',
    duration: 'Jun 2022 - Jul 2022',
    location: 'India',
    image: 'https://etimg.etb2bimg.com/photo/117453520.cms',
    summary: 'Leveraged business intelligence and data analytics to streamline operational billing systems.',
    achievements: [
      'Analyzed billing systems identifying inefficiencies that reduced operational costs by 15%.',
      'Conducted market research to identify process gaps, improving overall efficiency by 10%.',
      'Generated comprehensive BLW billing information reports using Python.'
    ],
    tools: ['Python', 'Data Analytics', 'Business Intelligence', 'Process Optimization'],
    metrics: '15% Operational Cost Reduction'
  },
  {
    id: 'exp-ifortis',
    company: 'IFORTIS WORLDWIDE',
    role: 'Intern',
    duration: 'Aug 2021 - Sep 2021',
    location: 'Remote',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    summary: 'Supported brand management and operations management for global outreach initiatives.',
    achievements: [
      'Contributed to strategic brand positioning and outreach programs.',
      'Supported operations management in a fast-paced global corporate environment.',
      'Managed stakeholder communications and campaign alignment.'
    ],
    tools: ['Brand Management', 'Operations', 'Stakeholder Management'],
    metrics: 'Global Outreach Coordination'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-swiggy',
    title: 'Swiggy Instamart: AOV Optimization',
    category: 'Product Strategy & Growth',
    description: 'Bridging the ₹187 gap: A strategic roadmap to increase Average Order Value.',
    longDescription: 'This deep-dive analysis tackles the gap between Swiggy Instamart’s AOV (₹420) and Blinkit (₹607). \n\nFocusing on the 75% non-converting new user base and the "Ayaan Mishra" persona (a Delhi-based tech professional managing family grocery needs), the study proposes four high-impact interventions: \n\n1. Limited Period Sales: Leveraging scarcity and the framing effect ("Save ₹100 on every ₹1000 spent"). \n2. Customer Support Desk: Building trust through immediate refunds and doorstep order approval. \n3. Smart Upselling: Intelligent "Bigger Product" popups at the point of addition to cart. \n4. Exclusive Access: Partnerships with unique brands and influencer-led growth. \n\nTarget Outcome: 15% AOV growth within 6 months.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200',
    tags: ['AOV Optimization', 'Behavioral Economics', 'GTM Strategy', 'RICE Framework']
  },
  {
    id: 'proj-lenskart',
    title: 'Lenskart: Retail Strategy Analysis',
    category: 'Business Insights',
    description: 'Strategic breakdown of Lenskart\'s omnichannel retail dominance and consumer psychology.',
    longDescription: 'A critical analysis of how Lenskart bridged the digital-physical divide to dominate the eyewear market. This study explores the technical integration within their brick-and-mortar stores, the role of 3D try-on technology in conversion, and the strategic positioning that makes them a retail juggernaut. It breaks down the consumer psychology behind their membership models and the operational efficiency of their global supply chain.',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=1200',
    tags: ['Omnichannel Strategy', 'Market Mastery', 'Consumer Psychology'],
    link: 'https://www.linkedin.com/posts/theraunaksri_retailstrategy-businessinsights-lenskart-ugcPost-7411039921131421696-hkdH'
  },
  {
    id: 'proj-1',
    title: 'DroneX London: GTM Strategy',
    category: 'Product Marketing',
    description: 'Directing the technical narrative for high-stakes industrial drone technology.',
    longDescription: 'Led the Go-To-Market strategy for industrial drone applications at one of London\'s premier tech expos. This involved translating complex sensor data and flight engineering specifications into value-driven stories for B2B buyers in agriculture and infrastructure monitoring.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200',
    tags: ['GTM Strategy', 'Industrial Tech', 'Copywriting', 'Event Marketing']
  },
  {
    id: 'proj-2',
    title: 'ELECRAMA Technical Storytelling',
    category: 'Technical Content',
    description: 'End-to-end brand execution for 10+ global industrial clients.',
    longDescription: 'Managed the technical content and brand presence for a cohort of international power sector companies. Created cinematic product walkthroughs and technical whitepapers that bridged the gap between engineering complexity and executive decision-making.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Storytelling', 'Manufacturing', 'Brand Strategy']
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Strategy & Consulting',
    items: ['GTM Strategy', 'Project Management', 'Business Growth', 'Market Research', 'Stakeholder Management']
  },
  {
    category: 'Marketing & Content',
    items: ['Product Marketing', 'Technical Storytelling', 'Brand Positioning', 'Digital Campaigns', 'Copywriting']
  },
  {
    category: 'Technical & Tech Stack',
    items: ['SQL', 'React', 'HTML/CSS', 'Agile Methodologies', 'Data Analysis', 'SEO/SEM']
  },
  {
    category: 'UX & Analytics',
    items: ['A/B Testing', 'UI/UX Design', 'ROI Modelling', 'User Satisfaction Optimization']
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'KNIT, Sultanpur',
    degree: "Bachelor of Technology (Information Technology)",
    duration: '2019 - 2023',
    summary: 'Focused on engineering fundamentals and software systems.'
  },
  {
    institution: 'Aspire Institute (Founded at Harvard)',
    degree: 'Aspire Leaders Program (Cohort 5)',
    duration: '2025',
    summary: 'Global leadership program focusing on entrepreneurship and social impact.'
  },
  {
    institution: 'McKinsey Forward Program',
    degree: 'Program Alumni',
    duration: '2025',
    summary: 'Structured problem-solving, digital tools, and adaptable leadership.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Software Testing', issuer: 'Industry Standard' },
  { name: 'Cloud Computing', issuer: 'Industry Standard' },
  { name: 'Fundamentals of Digital Marketing', issuer: 'Google' },
  { name: 'AWS Fundamentals Specialization', issuer: 'AWS' }
];