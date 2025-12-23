'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CandlestickChart, Code, Video, Briefcase } from "lucide-react";

const categories = [
    {
        id: 'tech',
        name: 'Technology & AI',
        description: 'Build the future with Cybersecurity, AI, and advanced software development.',
        icon: Code,
        color: 'text-blue-400',
        cursor: 'tech',
        courses: [
            { title: 'AI Content Creation', id: 'ai-content-creation' },
            { title: 'Vibe Coding & AI Ops', id: 'vibe-coding' },
            { title: 'Cybersecurity', id: 'cybersecurity' },
        ]
    },
    {
        id: 'design',
        name: 'Design & Engineering',
        description: 'Master the tools of creation. From 3D animation to precise architectural drafting.',
        icon: Video,
        color: 'text-purple-400',
        cursor: 'creative',
        courses: [
            { title: '3D Product Design (Blender)', id: 'blender-3d-design' },
            { title: 'AutoCAD Drafting', id: 'autocad-2d' },
        ]
    },
    {
        id: 'business',
        name: 'Business & Marketing',
        description: 'Scale your impact with digital marketing strategies and public speaking mastery.',
        icon: Briefcase,
        color: 'text-orange-400',
        cursor: 'default',
        courses: [
            { title: 'Digital Marketing & E-Com', id: 'digital-marketing' },
            { title: 'Public Speaking Essentials', id: 'public-speaking' },
        ]
    },
    {
        id: 'finance',
        name: 'Financial Markets',
        description: 'Institutional trading strategies for Forex and Crypto markets.',
        icon: CandlestickChart,
        color: 'text-green-400',
        cursor: 'finance',
        courses: [
            { title: 'Forex Trading Mastery', id: 'forex-trading' },
        ]
    }
];

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Our Programs
                    </motion.h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Industry-leading courses designed to take you from beginner to professional.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <div className="container mx-auto px-6 pb-32 space-y-24">
                {categories.map((cat, i) => (
                    <motion.section
                        key={cat.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        data-cursor={cat.cursor} // Context-Aware Cursor Trigger
                        className="relative group p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-12">
                            <div className="flex items-center gap-4">
                                <div className={`p-4 rounded-xl bg-white/5 ${cat.color}`}>
                                    <cat.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">{cat.name}</h2>
                                    <p className="text-gray-400">{cat.description}</p>
                                </div>
                            </div>
                            <Link
                                href={`/courses?cat=${cat.id}`}
                                className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all flex items-center gap-2"
                            >
                                View All <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {cat.courses.map((course) => (
                                <Link
                                    key={course.id}
                                    href={`/courses/${course.id}`}
                                    className="p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-primary/50 transition-all hover:translate-y-[-5px] group/card"
                                >
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover/card:text-primary transition-colors">{course.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4">Master the skills needed to succeed in {course.title}.</p>
                                    <span className="text-xs font-medium text-white/50 group-hover/card:text-white transition-colors flex items-center gap-1">
                                        Learn More <ArrowRight className="w-3 h-3" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </div>

            <Footer />
        </main>
    );
}
