export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'client' | 'concept' | 'experiment';
  badge: string;
  badgeType: 'live' | 'concept' | 'experiment';
  description: string;
  detailedPoints: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageAlt: string;
  mockupTheme: {
    accent: string;
    bgGradient: string;
    previewText: string;
  };
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  suitableFor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    note?: string;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Harshith',
    role: 'CSE Student & Freelance Web Developer',
    location: 'Kolar, Karnataka, India',
    whatsapp: '+91 9019373899',
    whatsappRaw: '919019373899',
    email: 'h9056450@gmail.com',
    github: 'https://github.com/h9056450-max',
    linkedin: 'https://linkedin.com/in/harshith-dev', // editable placeholder
    resumeUrl: '', // configured when resume file is uploaded
    availability: 'Open to Internship Opportunities & Freelance Projects',
    tagline: 'Building Modern Websites That Help Businesses Grow.',
    heroDescription:
      "I'm Harshith, a Computer Science Engineering student and aspiring frontend developer who builds clean, responsive, and user-friendly websites for businesses and individuals.",
    aboutShort:
      "I'm a Computer Science Engineering student passionate about web development and building practical digital solutions. I enjoy turning ideas into responsive websites that look great and work smoothly across devices. I'm currently improving my development skills, building real-world projects, and looking for opportunities to collaborate with businesses and development teams.",
    footerNote: 'Building useful digital experiences, one project at a time.',
  },

  aboutCards: [
    {
      id: 'edu',
      title: 'Education',
      value: 'Computer Science Engineering student',
      detail: 'Focusing on core computing, data structures, and modern web application development.',
      icon: 'GraduationCap',
    },
    {
      id: 'loc',
      title: 'Location',
      value: 'Kolar, Karnataka, India',
      detail: 'Available for remote work worldwide and in-person opportunities in Bangalore/Karnataka.',
      icon: 'MapPin',
    },
    {
      id: 'interests',
      title: 'Interests & Passion',
      value: 'Frontend Development & Web Design',
      detail: 'JavaScript ecosystem, responsive layouts, web performance, and AI-assisted workflows.',
      icon: 'Code2',
    },
    {
      id: 'seeking',
      title: 'Currently Looking For',
      value: 'Internships & Freelance Projects',
      detail: 'Frontend developer internships and web development projects for local and growing businesses.',
      icon: 'Briefcase',
    },
  ],

  skillCategories: [
    {
      title: 'Frontend Development',
      description: 'Core web building blocks for modern, accessible interfaces',
      skills: [
        { name: 'HTML5', note: 'Semantic markup & SEO' },
        { name: 'CSS3', note: 'Flexbox, Grid, animations & variables' },
        { name: 'JavaScript', note: 'ES6+, DOM manipulation & async logic' },
        { name: 'Responsive Web Design', note: 'Mobile-first layout across all screens' },
      ],
    },
    {
      title: 'Tools & Platforms',
      description: 'Essential workflow and version control utilities',
      skills: [
        { name: 'Git', note: 'Branching & version management' },
        { name: 'GitHub', note: 'Repositories & collaboration' },
        { name: 'VS Code', note: 'Primary development environment' },
        { name: 'Vercel', note: 'Fast deployment & hosting' },
      ],
    },
    {
      title: 'Currently Learning & Exploring',
      description: 'Active learning trajectory and expanding technical horizons',
      skills: [
        { name: 'React', note: 'Component architecture, hooks & state' },
        { name: 'Modern Frontend Practices', note: 'Component design systems & tooling' },
        { name: 'API Integration', note: 'Fetching data & connecting RESTful endpoints' },
        { name: 'AI-Powered Web Applications', note: 'Integrating smart features & AI APIs' },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'milveta',
      title: 'MILVETA — Multi Millet Powder Website',
      subtitle: 'Nutritional Food Brand Landing & Product Showcase',
      category: 'client',
      badge: 'Delivered Client Website',
      badgeType: 'live',
      description:
        'A modern business website for a millet-based nutrition brand, designed to present products, communicate brand values, and guide customers toward purchasing options.',
      detailedPoints: [
        'Designed with clean typography, product nutrition breakdowns, and organic color palettes.',
        'Structured product catalog highlighting key health benefits and millet varieties.',
        'Direct customer conversion path connecting interested buyers to WhatsApp and direct purchase channels.',
        'Fully responsive across smartphones, tablets, and desktop displays.',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      liveUrl: 'https://www.milveta.com',
      imageAlt: 'MILVETA Multi Millet Powder Website Interface',
      mockupTheme: {
        accent: '#10b981',
        bgGradient: 'from-emerald-950/60 to-slate-900',
        previewText: 'MILVETA — Pure Millet Nutrition for Everyday Wellness',
      },
    },
    {
      id: 'rk-infra',
      title: 'RK Infra Developers & Constructions',
      subtitle: 'Civil Construction & Infrastructure Company Concept',
      category: 'concept',
      badge: 'Website Concept / Demo',
      badgeType: 'concept',
      description:
        'A construction business website concept focused on presenting services, showcasing property-related information, and helping potential customers connect with the business.',
      detailedPoints: [
        'Architectural layout presenting residential, commercial, and turnkey construction capabilities.',
        'Service breakdown cards with structural specifications and customer enquiry triggers.',
        'Clear consultation booking and site inspection request contact forms.',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      liveUrl: 'https://rk-infra-developers-and-constructions.ai.studio',
      imageAlt: 'RK Infra Developers and Constructions Concept Website',
      mockupTheme: {
        accent: '#0284c7',
        bgGradient: 'from-blue-950/60 to-slate-900',
        previewText: 'RK INFRA — Building Strong Foundations with Precision',
      },
    },
    {
      id: 'dance-academy',
      title: 'Dance Academy Website Concept',
      subtitle: 'Creative Arts, Class Schedules & Enrollment Concept',
      category: 'concept',
      badge: 'Website Concept',
      badgeType: 'concept',
      description:
        'A modern, responsive website concept for a dance academy, featuring class information, dance programs, and enquiry options.',
      detailedPoints: [
        'Vibrant, rhythm-inspired visual flow suited for contemporary and classical dance studios.',
        'Class schedule breakdown for kids, teens, and adult workshops.',
        'Interactive enquiry trigger enabling parents and students to register for trial sessions.',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/h9056450-max',
      imageAlt: 'Dance Academy Website Concept Interface',
      mockupTheme: {
        accent: '#8b5cf6',
        bgGradient: 'from-purple-950/60 to-slate-900',
        previewText: 'RHYTHM ACADEMY — Express Yourself Through Dance',
      },
    },
    {
      id: 'personal-experiments',
      title: 'Personal Projects & UI Experiments',
      subtitle: 'Frontend Prototypes, Mini Apps & Logic Labs',
      category: 'experiment',
      badge: 'Code Lab & UI Tests',
      badgeType: 'experiment',
      description:
        'A collection of small web development projects, UI experiments, and practical applications built while learning and improving my skills.',
      detailedPoints: [
        'Interactive widgets: calculators, responsive navigation components, and dark mode toggles.',
        'DOM manipulation exercises, API fetching tests, and CSS animation experiments.',
        'Open-source code snippets and components maintained on GitHub.',
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Git'],
      liveUrl: '#',
      githubUrl: 'https://github.com/h9056450-max',
      imageAlt: 'Personal Projects and Frontend Experiments Code Repository',
      mockupTheme: {
        accent: '#06b6d4',
        bgGradient: 'from-cyan-950/60 to-slate-900',
        previewText: 'CODE EXPERIMENTS — Exploring Frontend Boundaries',
      },
    },
  ] as Project[],

  services: [
    {
      id: 'business-websites',
      title: 'Business Websites',
      tagline: 'Establish Credibility & Reach More Customers Online',
      description: 'Professional websites for small businesses that want to establish an online presence.',
      features: [
        'Custom clean design tailored to your industry',
        'Mobile-friendly layout that looks crisp on any phone',
        'Google Maps location embed & WhatsApp click-to-chat',
        'Fast page loading speed and basic search engine setup',
      ],
      icon: 'Building2',
      suitableFor: 'Local stores, manufacturers, consultants, and service providers',
    },
    {
      id: 'clinic-healthcare',
      title: 'Clinic & Healthcare Websites',
      tagline: 'Clear Information for Patients & Fast Appointment Inquiries',
      description: 'Clean websites for clinics and healthcare providers, with service information, location details, and enquiry options.',
      features: [
        'Doctor profiles, specializations, and clinic timings',
        'Easy appointment request and direct phone/WhatsApp buttons',
        'Directions and clinic location map for visiting patients',
        'Accessible, calm aesthetic optimized for trust and clarity',
      ],
      icon: 'Stethoscope',
      suitableFor: 'Dental clinics, diagnostic labs, pediatricians, and wellness centers',
    },
    {
      id: 'restaurant-cafe',
      title: 'Restaurant & Cafe Websites',
      tagline: 'Visual Menus, Location Directions & Instant Table Booking',
      description: 'Mobile-friendly websites with menus, business information, and WhatsApp enquiry options.',
      features: [
        'Digital food & beverage menu that is easy to update',
        'One-tap WhatsApp ordering or table reservation inquiries',
        'Operating hours, location map, and ambiance showcase',
        'Snappy mobile performance when customers are on the go',
      ],
      icon: 'UtensilsCrossed',
      suitableFor: 'Cafes, bakeries, family restaurants, and food trucks',
    },
    {
      id: 'redesign-maintenance',
      title: 'Website Redesign & Maintenance',
      tagline: 'Modernize Outdated Sites & Fix Mobile Responsiveness',
      description: 'Improvements to existing websites, responsive design fixes, content updates, and basic maintenance.',
      features: [
        'Modernizing outdated visual design to look current',
        'Fixing broken layouts, awkward mobile sizing, and slow scripts',
        'Adding new pages, updated contact details, or fresh banners',
        'Hosting transfer and domain setup assistance',
      ],
      icon: 'Wrench',
      suitableFor: 'Businesses with slow, non-responsive, or outdated legacy websites',
    },
  ] as Service[],

  processSteps: [
    {
      number: '01',
      title: 'Understand',
      phase: 'Discovery & Goals',
      description: "Learn about the client's business, goals, and requirements.",
      deliverable: 'Project scope, content plan & key actions needed',
    },
    {
      number: '02',
      title: 'Design',
      phase: 'Visual Direction',
      description: 'Plan the layout and visual style.',
      deliverable: 'Clean wireframe, typography choices & color palette',
    },
    {
      number: '03',
      title: 'Develop',
      phase: 'Build & Test',
      description: 'Build a responsive website and test its functionality.',
      deliverable: 'Clean semantic code, mobile checks & cross-device testing',
    },
    {
      number: '04',
      title: 'Launch',
      phase: 'Deploy & Support',
      description: 'Deploy the website and help the client get started.',
      deliverable: 'Live hosting deployment, WhatsApp setup & handover',
    },
  ],

  faq: [
    {
      q: 'How long does it take to build a basic business website?',
      a: 'Most 1-to-4 page business websites are designed, developed, and deployed within 4 to 8 days, depending on content availability.',
    },
    {
      q: 'Will my website work properly on mobile phones?',
      a: 'Yes, 100%. Every website is tested thoroughly on Android phones, iPhones, tablets, laptops, and desktop screens.',
    },
    {
      q: 'Can customers contact me directly on WhatsApp from the website?',
      a: 'Yes! A 1-tap WhatsApp button connects visitors directly to your chat with a pre-typed enquiry, making it effortless for local customers.',
    },
    {
      q: 'Where will the website be hosted?',
      a: 'Websites are typically hosted on high-speed platforms like Vercel or GitHub Pages, offering fast global load times and high reliability.',
    },
  ],
};
