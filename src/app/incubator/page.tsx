'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Rocket, Target, Users, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IncubatorPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden" data-cursor="finance">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#0a2e52_0%,_#000000_100%)]" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block"
                    >
                        Finverse Startup Incubator
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        We Don't Just Teach. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">We Build.</span>
                    </motion.h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
                        Turn your idea into a scalable business. Get funding, mentorship, and access to our global network of investors.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-black/50" data-cursor="tech">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Rocket, title: "Seed Funding", desc: "Access to early-stage capital to kickstart your venture." },
                            { icon: Target, title: "Mentorship", desc: "Guidance from industry veterans who have built 7-figure businesses." },
                            { icon: Zap, title: "Tech Stack", desc: "Full access to our premium dev tools, cloud credits, and software." },
                            { icon: Users, title: "Network", desc: "Connect with VCs, angel investors, and potential co-founders." }
                        ].map((feature, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <feature.icon className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 container mx-auto px-6">
                <div className="rounded-3xl bg-blue-900/10 border border-blue-500/20 p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Rocket className="w-64 h-64 text-white" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Have a Billion Dollar Idea?</h2>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
                            Applications for our Winter 2025 cohort are now open.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                            Apply for Incubation <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
