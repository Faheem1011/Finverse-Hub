export type Course = {
    id: string;
    title: string;
    category: string;
    level: string;
    duration: string;
    price: string;
    image: string;
    instructor: string;
    description: string;
    whatYouWillLearn: string[];
    // Using string[] for curriculum for simplicity based on provided list, 
    // or we can structure it if we had module breakdowns. 
    // The brochure lists topics which can be mapped to a curriculum or 'What You'll Master'
    curriculum: { module: string; duration: string }[];
    careerDirection: string[];
    whoIsItFor: string[];
};

export const courses: Course[] = [
    {
        id: 'blender-3d-design',
        title: '3D Product Design & Animation with Blender',
        category: 'Design & Engineering',
        level: 'Beginner to Advance',
        duration: '2 Months',
        price: 'Enroll Now',
        image: '/images/courses/blender.png',
        instructor: 'Finverse Studio Experts',
        description: 'Build real-world 3D design skills. Master modeling, texturing, lighting, and animation to create cinematic product commercials.',
        whatYouWillLearn: [
            'Blender UI & Navigation, Setting Up Workspace',
            'Basic Product Modeling (Hard Surface Objects)',
            'Advanced Modeling (Bevels, Subdivision, Modifiers)',
            'Materials & Texturing for Realism',
            'Lighting & HDRI Setup for Product Showcases',
            'Camera Animation & Product Demos',
            'Rendering Workflows (Cycles, Eevee) + Compositing',
            'Final Project – Animated Product Commercial'
        ],
        curriculum: [
            { module: 'Module 1: Foundations & Modeling', duration: 'Week 1-3' },
            { module: 'Module 2: Materials & Texturing', duration: 'Week 3-4' },
            { module: 'Module 3: Lighting & Rendering', duration: 'Week 5-6' },
            { module: 'Module 4: Animation & Portfolio Project', duration: 'Week 7-8' }
        ],
        careerDirection: [
            'Product Visualization Artist',
            '3D Motion Designer',
            'Hard Surface Modeler'
        ],
        whoIsItFor: [
            'Students & fresh graduates',
            'IT beginners & career switchers',
            'Professionals building design portfolio'
        ]
    },
    {
        id: 'ai-content-creation',
        title: 'AI Content Creation',
        category: 'Technology & AI',
        level: 'Beginner to Advance',
        duration: '2 Months',
        price: 'Enroll Now',
        image: '/images/courses/ai-content.png',
        instructor: 'Finverse AI Specialists',
        description: 'Master the future of digital content. Leverage AI tools for scriptwriting, image generation, video creation, and automated workflows.',
        whatYouWillLearn: [
            'Intro to AI in Content Creation + Tools Overview',
            'Scriptwriting with AI (ChatGPT, Claude, Gemini)',
            'Image Generation (MidJourney, Stable Diffusion, Canva AI)',
            'Video Generation with AI (Runway, Pika, Veo, Kaiber)',
            'Social Media Strategy + Scheduling with AI (YouTube, IG, FB)',
            'A+ Content & Branding (Amazon, Shopify, eCom)',
            'Automation Tools (n8n, Zapier) for Content Workflow',
            'Final Project – Branded Campaign (Video + Social Posts)'
        ],
        curriculum: [
            { module: 'Module 1: AI Tools Landscape', duration: 'Week 1' },
            { module: 'Module 2: Text & Script Generation', duration: 'Week 2' },
            { module: 'Module 3: Visual Arts (Image & Video)', duration: 'Week 3-5' },
            { module: 'Module 4: Automation & Strategy', duration: 'Week 6-7' },
            { module: 'Module 5: Capstone Campaign', duration: 'Week 8' }
        ],
        careerDirection: [
            'The "Full-Stack" AI Content Creator',
            'E-commerce & Brand Specialist',
            'AI-Driven Social Strategist',
            'Content Operations & Automation Lead'
        ],
        whoIsItFor: [
            'Students & fresh graduates',
            'IT beginners & career switchers',
            'Professionals building creative leverage'
        ]
    },
    {
        id: 'autocad-2d',
        title: 'AutoCAD (2D Drafting)',
        category: 'Design & Engineering',
        level: 'Beginner to Advance',
        duration: '2 Months',
        price: 'Enroll Now',
        image: '/images/courses/autocad.png',
        instructor: 'Certified CAD Engineers',
        description: 'Master precise technical drawing and drafting. From interface basics to complete 2D house plans.',
        whatYouWillLearn: [
            'AutoCAD Interface & Drafting Basics',
            'Drawing Tools (Lines, Circles, Polylines, Arcs)',
            'Modify Tools (Trim, Extend, Offset, Fillet)',
            'Layers, Properties & Line Types',
            'Dimensioning & Annotation Standards',
            'Blocks, Xrefs & Reusable Content',
            'Layouts, Viewports & Plotting Sheets',
            'Final Project – Complete 2D House Plan'
        ],
        curriculum: [
            { module: 'Module 1: Interface & Basic Drawing', duration: 'Week 1-2' },
            { module: 'Module 2: Editing & Precision', duration: 'Week 3-4' },
            { module: 'Module 3: Layers, Blocks & Annotation', duration: 'Week 5-6' },
            { module: 'Module 4: Final Architectural Project', duration: 'Week 7-8' }
        ],
        careerDirection: [
            'CAD Technician',
            'BIM Modeler (Next Step)',
            'Shop Drawer'
        ],
        whoIsItFor: [
            'Students & Fresh Graduates',
            'Beginners in Architecture/Civil',
            'Professionals'
        ]
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        category: 'Technology & AI',
        level: 'Beginner to Advance',
        duration: '6 Months',
        price: 'Enroll Now',
        image: '/images/courses/cyber.png',
        instructor: 'Security Analysts',
        description: 'Build real-world cyber defense skills. Master Kali Linux, Network Security, Forensic Investigation, and Threat Analysis.',
        whatYouWillLearn: [
            'Cybersecurity Foundations',
            'Systems & Network Security',
            'Security Tools (Kali Linux, Wireshark, Nmap, OWASP)',
            'Cyber Defense & Investigation',
            'Digital Forensics & Incident Response',
            'SIEM (Splunk) & Threat Hunting'
        ],
        curriculum: [
            { module: 'Module 1: Foundations & Linux', duration: 'Month 1' },
            { module: 'Module 2: Network Security', duration: 'Month 2' },
            { module: 'Module 3: Offensive Security (Ethical Hacking)', duration: 'Month 3-4' },
            { module: 'Module 4: Defense & Forensics', duration: 'Month 5' },
            { module: 'Module 5: Capstone & Career Prep', duration: 'Month 6' }
        ],
        careerDirection: [
            'Entry-level Cybersecurity & SOC roles',
            'IT Security Support',
            'Digital Forensics Analyst'
        ],
        whoIsItFor: [
            'Students & fresh graduates',
            'IT beginners & career switchers',
            'Professionals'
        ]
    },
    {
        id: 'forex-trading',
        title: 'Forex Trading Mastery',
        category: 'Financial Markets',
        level: 'Beginner to Pro',
        duration: '2 Months',
        price: 'Enroll Now',
        image: '/images/courses/forex.png',
        instructor: 'Institutional Traders',
        description: 'Master the art of currency trading. Learn technical analysis, risk management, and institutional strategies to navigate the global markets.',
        whatYouWillLearn: [
            'Introduction to Forex Markets & Structure',
            'Market Basics & Price Movement Logic',
            'Technical Analysis (Support, Resistance, Trends)',
            'Fundamental Analysis & Economic Indicators',
            'Risk Management & Capital Preservation',
            'Trading Psychology & Emotional Control',
            'Strategy Development & Backtesting'
        ],
        curriculum: [
            { module: 'Module 1: Market Fundamentals', duration: 'Week 1-2' },
            { module: 'Module 2: Technical Analysis Deep Dive', duration: 'Week 3-4' },
            { module: 'Module 3: Strategy & Risk', duration: 'Week 5-6' },
            { module: 'Module 4: Live Trading & Psychology', duration: 'Week 7-8' }
        ],
        careerDirection: [
            'Independent Forex Trader',
            'Prop Firm Trader',
            'Financial Analyst',
            'Investment Consultant'
        ],
        whoIsItFor: [
            'Aspiring Traders',
            'Investors looking to diversify',
            'Finance Students'
        ]
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing & E-Commerce',
        category: 'Business & Marketing',
        level: 'Beginner to Advance',
        duration: '3 Months',
        price: 'Enroll Now',
        image: '/images/courses/marketing.png',
        instructor: 'Marketing Strategists',
        description: 'Dominate the digital landscape. Learn SEO, Social Media Marketing, and E-commerce fundamentals to grow brands and drive sales.',
        whatYouWillLearn: [
            'Introduction to Digital Marketing Landscape',
            'Social Media Marketing (SMM) Strategies',
            'Search Engine Optimization (SEO) & Google Ads',
            'E-Commerce Fundamentals (Shopify, Amazon)',
            'Email Marketing & Automation',
            'Content Strategy & Virality',
            'Freelancing & Career Growth in Marketing'
        ],
        curriculum: [
            { module: 'Module 1: Foundations & SEO', duration: 'Month 1' },
            { module: 'Module 2: Social Media & Content', duration: 'Month 2' },
            { module: 'Module 3: E-Commerce & Ads', duration: 'Month 3' }
        ],
        careerDirection: [
            'Digital Marketing Specialist',
            'Social Media Manager',
            'E-commerce Store Owner',
            'SEO Expert'
        ],
        whoIsItFor: [
            'Entrepreneurs & Business Owners',
            'Students & Marketing Aspirants',
            'Freelancers'
        ]
    },
    {
        id: 'public-speaking',
        title: 'Public Speaking Essentials',
        category: 'Business & Marketing',
        level: 'All Levels',
        duration: '4 Weeks',
        price: 'Enroll Now',
        image: 'https://images.unsplash.com/photo-1544531696-297afda2ad6c?q=80&w=2069&auto=format&fit=crop',
        instructor: 'Communication Coaches',
        description: 'Unlock your voice. Build confidence, master speech structure, and learn to captivate any audience.',
        whatYouWillLearn: [
            'Understanding Public Speaking Dynamics',
            'Building Confidence & Overcoming Stage Fright',
            'Speech Structure & Content Creation',
            'Effective Communication Techniques (Voice, Body Language)',
            'Practice sessions & Real-Life Scenarios',
            'Personal Branding Through Speaking'
        ],
        curriculum: [
            { module: 'Module 1: Confidence & Mindset', duration: 'Week 1' },
            { module: 'Module 2: Content & Structure', duration: 'Week 2' },
            { module: 'Module 3: Delivery & Body Language', duration: 'Week 3' },
            { module: 'Module 4: Final Presentation', duration: 'Week 4' }
        ],
        careerDirection: [
            'Public Speaker / Keynote',
            'Corporate Trainer',
            'Team Leader / Manager',
            'Content Creator'
        ],
        whoIsItFor: [
            'Professionals aiming for leadership',
            'Students giving presentations',
            'Anyone wanting to build confidence'
        ]
    },
    {
        id: 'vibe-coding',
        title: 'Vibe Coding & AI Software Ops',
        category: 'Technology & AI',
        level: 'Beginner to Advance',
        duration: '6 Weeks',
        price: 'Enroll Now',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', // Tech/Coding Placeholder
        instructor: 'AI Engineers',
        description: 'Stop writing boilerplate. Start Vibe Coding. Master the art of using LLMs (Claude, GPT-4, Cursor) to build software at the speed of thought.',
        whatYouWillLearn: [
            'The Vibe Coding Mindset: Prompting vs. Coding',
            'Mastering Cursor Composer & AI Context',
            'Building Apps with v0.dev & Bolt.new',
            'Backend Engineering with Supabase & Replit',
            'Deploying to Vercel & Edge Functions',
            'Automating Workflows with AI Agents'
        ],
        curriculum: [
            { module: 'Module 1: The AI Stack (Cursor, v0)', duration: 'Week 1' },
            { module: 'Module 2: Building User Interfaces', duration: 'Week 2' },
            { module: 'Module 3: Intelligent Backends', duration: 'Week 3' },
            { module: 'Module 4: Full Stack Integration', duration: 'Week 4' },
            { module: 'Module 5: Capstone Project', duration: 'Week 5-6' }
        ],
        careerDirection: [
            'AI Solutions Engineer',
            'Rapid Prototyper',
            'Full Stack Developer (AI-First)',
            'Indie Hacker / Founder'
        ],
        whoIsItFor: [
            'Developers wanting to 10x speed',
            'Entrepreneurs building MVPs',
            'Non-technical founders'
        ]
    }
];
