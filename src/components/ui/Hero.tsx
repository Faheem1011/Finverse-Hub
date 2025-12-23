'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { GooeyMarquee } from './GooeyMarquee';

export function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Dynamic Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#0a1f35_0%,_#000000_100%)]" />
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,#00f2ff_10deg,transparent_50deg,#3b82f6_60deg,transparent_100deg)] mix-blend-screen blur-3xl" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-8"
                >
                    <Image
                        src="/logo.png"
                        alt="Finverse Hub Logo"
                        width={120}
                        height={120}
                        className="mx-auto"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-primary text-sm font-medium tracking-wider mb-6 backdrop-blur-sm"
                    >
                        THE FUTURE OF SKILLS EDUCATION
                    </motion.span>

                    <div className="mb-6 relative h-[150px] md:h-[200px] flex items-center justify-center overflow-visible">
                        <div className="w-full max-w-6xl mx-auto scale-75 md:scale-100">
                            <GooeyMarquee text="FINVERSE HUB" />
                        </div>
                    </div>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Finverse Hub is a premium academy and studio designed to transform beginners into high-income professionals.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/courses"
                            className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-primary hover:text-black transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            Explore Courses <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/studio"
                            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 backdrop-blur-md transition-all flex items-center gap-2"
                        >
                            View Studio
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        </section>
    );
}
