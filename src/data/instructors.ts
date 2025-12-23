export type Instructor = {
    id: string;
    name: string;
    role: string;
    email: string;
    image: string; // Placeholder or path
    bio: string;
    achievements: string[];
    skills: string[];
    socials: {
        facebook?: string;
        instagram?: string;
        tiktok?: string;
        linkedin?: string;
    };
};

export const instructors: Instructor[] = [
    {
        id: 'ahmed-mashood',
        name: 'Ahmed Mashood',
        role: 'Founder & CEO',
        email: 'Ahmed.Mashood@finversehub.co',
        image: '', // Placeholder will be handled by component if empty
        bio: 'A visionary leader with a passion for education and technology. Ahmed founded Finverse Hub to bridge the gap between traditional learning and the demands of the modern digital economy. With years of experience in business strategy and ed-tech, he leads the mission to empower the next generation.',
        achievements: [
            'Founded Finverse Hub and scaled it to a premier skills academy.',
            'Mentored over 500+ students in career development.',
            'Spearheaded partnerships with major tech firms.'
        ],
        skills: ['Leadership', 'Business Strategy', 'Ed-Tech Innovation', 'Public Speaking'],
        socials: {
            facebook: '#',
            instagram: '#',
            tiktok: '#'
        }
    },
    {
        id: 'ahsan-syed',
        name: 'Ahsan Syed',
        role: 'Director',
        email: 'Ahsan.syed@finversehub.co',
        image: '',
        bio: 'As Director, Ahsan oversees the strategic direction and growth of Finverse Hub. His focus on operational excellence and student success ensures that every course delivers value and real-world results.',
        achievements: [
            'Streamlined operations for maximum efficiency.',
            'Developed key curriculum standards for the academy.',
            'Expert in organizational management.'
        ],
        skills: ['Operations Management', 'Strategic Planning', 'Team Leadership'],
        socials: {
            facebook: '#',
            instagram: '#',
            tiktok: '#'
        }
    },
    {
        id: 'muhammad-bilal-qureshi',
        name: 'Muhammad Bilal Qureshi',
        role: 'Co-Founder & Director Operations',
        email: 'Muhammad.bilal@finversehub.co',
        image: '',
        bio: 'The operational backbone of Finverse Hub. Bilal ensures that the day-to-day activities of the academy run smoothly, providing students and instructors with a seamless experience.',
        achievements: [
            'Co-founded Finverse Hub.',
            'Managed complex logistical challenges for large-scale cohorts.',
            'Optimized student support systems.'
        ],
        skills: ['Operations', 'Logistics', 'Student Relations'],
        socials: {
            facebook: '#',
            instagram: '#',
            tiktok: '#'
        }
    },
    {
        id: 'sairam-hussain-miran',
        name: 'Sairam Hussain Miran',
        role: 'Public Speaking Instructor & Lawyer',
        email: 'Sairam.hussain@finversehub.co',
        image: '',
        bio: 'A lawyer by profession and a communicator by passion. Sairam brings a unique blend of legal precision and rhetorical power to his public speaking classes, helping students find their voice and confidence.',
        achievements: [
            'Practicing Lawyer with extensive courtroom experience.',
            'Trained corporate teams in effective communication.',
            'Keynote speaker at multiple educational forums.'
        ],
        skills: ['Public Speaking', 'Legal Advocacy', 'Communication Strategy', 'Debate'],
        socials: {
            facebook: '#',
            instagram: '#',
            tiktok: '#'
        }
    },
    {
        id: 'muhammad-faheem',
        name: 'Muhammad Faheem',
        role: 'Cyber Security & Design Innovation',
        email: 'Muhammad.Faheem@finversehub.co',
        image: '',
        bio: 'A dual-threat expert in the fields of Cybersecurity and Design. Faheem brings a creative yet analytical approach to teaching, showing how secure systems can also be beautifully designed.',
        achievements: [
            'Certified Cyber Security Professional.',
            'Led design innovation workshops.',
            'Developed the secure infrastructure for Finverse Hub.'
        ],
        skills: ['Cybersecurity', 'UI/UX Design', 'Network Defense', 'Creative Problem Solving'],
        socials: {
            facebook: '#',
            instagram: '#',
            tiktok: '#'
        }
    }
];
