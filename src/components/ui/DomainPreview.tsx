'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const domains = [
    { name: 'Cybersecurity', highlight: 'Protect', link: '/courses/cybersecurity', image: '/images/courses/cyber.png', accent: '#00ff9d' },
    { name: '3D Design', highlight: 'Create', link: '/courses/blender-3d-design', image: '/images/courses/blender.png', accent: '#00d4ff' },
    { name: 'AI & Data', highlight: 'Innovate', link: '/courses/ai-content-creation', image: '/images/courses/ai-content.png', accent: '#a855f7' },
    { name: 'Development', highlight: 'Build', link: '/courses/vibe-coding', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', accent: '#fbbf24' },
    { name: 'Financial Markets', highlight: 'Trade', link: '/courses/forex-trading', image: '/images/courses/forex.png', accent: '#22c55e' },
];

// Premium card with holographic tilt effect
function DomainCard({ domain, index }: { domain: typeof domains[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Motion values for tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring for smooth animation
    const springConfig = { damping: 25, stiffness: 300 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

    // Shine position
    const shineX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
    const shineY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) / rect.width);
        y.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Link href={domain.link} className="block group perspective-1000">
            <ScrollReveal variant="scale" delay={index * 0.1}>
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                    }}
                    className="relative h-64 rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-300 group-hover:border-transparent"
                >
                    {/* Animated glowing border */}
                    <div
                        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                        style={{
                            background: `linear-gradient(135deg, ${domain.accent}40, transparent, ${domain.accent}40)`,
                            filter: 'blur(2px)',
                        }}
                    />

                    {/* Inner card */}
                    <div className="absolute inset-[1px] rounded-3xl overflow-hidden bg-zinc-900 z-10">
                        {/* Background Image with parallax */}
                        <motion.div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{
                                backgroundImage: `url(${domain.image})`,
                                transform: 'translateZ(-20px) scale(1.1)',
                            }}
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

                        {/* Shine effect */}
                        <motion.div
                            className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{
                                background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.15), transparent 50%)`,
                            }}
                        />

                        {/* Corner decorations */}
                        <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-8 group-hover:h-8" style={{ borderColor: domain.accent }} />
                        <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-8 group-hover:h-8" style={{ borderColor: domain.accent }} />
                        <div className="absolute bottom-20 left-4 w-6 h-6 border-l-2 border-b-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-8 group-hover:h-8" style={{ borderColor: domain.accent }} />
                        <div className="absolute bottom-20 right-4 w-6 h-6 border-r-2 border-b-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-8 group-hover:h-8" style={{ borderColor: domain.accent }} />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                            <span
                                className="text-xs font-bold mb-2 block tracking-wider uppercase transition-all duration-300 group-hover:tracking-widest"
                                style={{ color: domain.accent }}
                            >
                                {domain.highlight}
                            </span>
                            <h3 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                                {domain.name}
                            </h3>

                            {/* Arrow icon */}
                            <motion.div
                                className="absolute right-6 bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                initial={{ x: -10 }}
                                whileHover={{ x: 0 }}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke={domain.accent}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:translate-x-2 transition-transform duration-300"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </motion.div>
                        </div>

                        {/* Animated scan line */}
                        <div
                            className="absolute left-0 right-0 h-[2px] opacity-0 group-hover:opacity-50 z-40 animate-scan"
                            style={{
                                background: `linear-gradient(90deg, transparent, ${domain.accent}, transparent)`,
                            }}
                        />
                    </div>
                </motion.div>
            </ScrollReveal>
        </Link>
    );
}

export function DomainPreview() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">Our Domains</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Future-Ready Skills</h2>
                    </div>
                    <Link href="/courses" className="text-white border-b border-primary pb-1 hover:text-primary transition-colors group flex items-center gap-2">
                        View All Courses
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="group-hover:translate-x-1 transition-transform"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {domains.map((domain, i) => (
                        <DomainCard key={domain.name} domain={domain} index={i} />
                    ))}
                </div>
            </div>

            {/* CSS for scan animation */}
            <style jsx>{`
                @keyframes scan {
                    0% { top: 0; }
                    100% { top: 100%; }
                }
                .animate-scan {
                    animation: scan 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
