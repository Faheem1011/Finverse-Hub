import { DroppingText } from './DroppingText';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const journeySteps = [
    {
        title: "Learn",
        highlight: "Phase 01",
        desc: "Master high-income digital skills through immersive, mentor-led masterclasses. We focus on industry-standard tools and real-world workflows that the digital economy demands.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.00012L12 18.0001M12 6.00012C12 6.00012 10 3.50012 5 3.50012C3 3.50012 2 4.50012 2 6.50012V17.5001C2 19.5001 3 20.5001 5 20.5001C10 20.5001 12 18.0001 12 18.0001M12 6.00012C12 6.00012 14 3.50012 19 3.50012C21 3.50012 22 4.50012 22 6.50012V17.5001C22 19.5001 21 20.5001 19 20.5001C14 20.5001 12 18.0001 12 18.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: "Build",
        highlight: "Phase 02",
        desc: "Forge a world-class portfolio by working in live production studios. Translate theory into practice on high-stakes projects that showcase your mastery to global employers.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: "Scale",
        highlight: "Phase 03",
        desc: "Launch your career with absolute confidence. From elite job placements and freelance ecosystems to building your own startup, we provide the roadmap to financial freedom.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
];

export function About() {
    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden">
            {/* Background elements for depth */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <ScrollReveal variant="slide" direction="up" delay={0.1}>
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Why Finverse Hub?</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
                            More Than An Academy.<br className="hidden md:block" />
                            <span className="text-gray-500 italic font-serif">
                                A Launchpad for <DroppingText />
                            </span>
                        </h2>

                        <p className="text-xl text-gray-400 leading-relaxed mb-20 max-w-3xl mx-auto">
                            Finverse Hub bridges the gap between traditional education and the digital frontier.
                            We don&apos;t just teach skills; we build <strong>careers</strong> through immersive learning and real-world studio integration.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

                        {journeySteps.map((step, i) => (
                            <ScrollReveal
                                key={step.title}
                                variant="scale"
                                delay={0.3 + i * 0.1}
                            >
                                <article className="group relative">
                                    <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 h-full flex flex-col items-start text-left hover:translate-y-[-8px] relative z-10 overflow-hidden">
                                        {/* Hover Glow */}
                                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        <div className="mb-6 p-4 rounded-2xl bg-white/5 text-primary border border-white/10 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                                            {step.icon}
                                        </div>

                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                            {step.highlight}
                                        </span>

                                        <h3 className="text-3xl font-black text-white mb-4 group-hover:tracking-tight transition-all duration-300">
                                            {step.title}
                                        </h3>

                                        <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                                            {step.desc}
                                        </p>

                                        {/* Decorative element */}
                                        <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="w-12 h-1 bg-primary rounded-full" />
                                        </div>
                                    </div>

                                    {/* Background number */}
                                    <span className="absolute -bottom-6 -right-2 text-9xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-500">
                                        0{i + 1}
                                    </span>
                                </article>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
