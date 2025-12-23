export type Testimonial = {
    id: string;
    name: string;
    role: string;
    course: string;
    videoId: string; // YouTube Video ID
    quote: string;
    thumbnail: string;
};

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Arslan Ali',
        role: 'Full Stack Dev @ Systems Ltd',
        course: 'Vibe Coding & AI',
        videoId: 'dQw4w9WgXcQ', // Placeholder - to be replaced with real student interview
        quote: "I was struggling to keep up with new tech. Finverse Hub's AI coding course helped me land a senior role at Systems Limited.",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: '2',
        name: 'Fatima Sheikh',
        role: 'Top Rated Freelancer (Upwork)',
        course: 'Digital Marketing',
        videoId: '',
        quote: "Starting from scratch in Lahore, I now manage international clients. The mentorship on scaling agencies was a game changer.",
        thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
        id: '3',
        name: 'Bilal Khan',
        role: '3D Artist',
        course: '3D Product Design',
        videoId: '',
        quote: "From a hobbyist to working on real commercials. The studio environment at Finverse is unlike any other institute in Pakistan.",
        thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: '4',
        name: 'Zainab Ahmed',
        role: 'SOC Analyst',
        course: 'Cybersecurity',
        videoId: '',
        quote: "As a woman in tech, I was hesitant. But the community support and hands-on labs helped me secure a position at a leading bank.",
        thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
        id: '5',
        name: 'Usman Riaz',
        role: 'Forex Trader',
        course: 'Forex Trading Mastery',
        videoId: '',
        quote: "I stopped gambling and started trading. The risk management strategies taught by the mentors saved my capital and made me profitable.",
        thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
    }
];
