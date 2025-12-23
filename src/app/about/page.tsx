'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Lightbulb, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                        Redefining Tech Education <br /> in Pakistan
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We are bridging the gap between academic theory and industry reality. Finverse Hub is more than an institute—it's a movement to empower the next generation of creative leaders and technopreneurs.
                    </p>
                </motion.div>
            </section>

            {/* The Mission */}
            <section className="py-20 bg-zinc-900 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Team Working"
                                className="rounded-3xl border border-white/10 shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white">Our Mission</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                In a rapidly evolving digital world, traditional education often lags behind. At Finverse Hub, we observed a critical gap: students were graduating with degrees but without the practical skills needed to survive in the global market.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our mission is simple: **To equip every student with high-income skills.** Whether it's through 3D Animation, AI Development, or Forex Trading, we provide the mentorship and ecosystem needed to launch careers, not just pass exams.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-2 text-white font-medium">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span>Practical Labs</span>
                                </div>
                                <div className="flex items-center gap-2 text-white font-medium">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span>Industry Mentors</span>
                                </div>
                                <div className="flex items-center gap-2 text-white font-medium">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span>Global Freelancing</span>
                                </div>
                                <div className="flex items-center gap-2 text-white font-medium">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span>Career Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Drives Us</h2>
                    <p className="text-gray-400">The core values that define the Finverse ecosystem.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Result-Oriented</h3>
                        <p className="text-gray-400">We don't care about hours spent in class. We care about portfolios built, dollars earned, and careers launched.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary">
                            <Lightbulb className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
                        <p className="text-gray-400">We stay ahead of the curve. From AI coding tools to the latest rendering engines, we teach what's next, not what's past.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Community Led</h3>
                        <p className="text-gray-400">You are never alone. Join a vibrant community of creators, developers, and traders who support each other's growth.</p>
                    </div>
                </div>
            </section>

            {/* Closing Statement */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Built in Lahore. <br /> Competing Globally.</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Join the fastest growing tech community in Pakistan. Your journey to financial independence starts here.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
