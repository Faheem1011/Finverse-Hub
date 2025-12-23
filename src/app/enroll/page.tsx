'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Sparkles } from 'lucide-react';

export default function EnrollPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Join the Elite</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Journey</h1>
                        <p className="text-gray-400 text-lg">
                            Secure your spot in the next cohort. Limited seats available for personalized mentorship.
                        </p>
                    </div>

                    <div className="bg-card border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden" data-cursor="tech">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Sparkles className="w-32 h-32 text-primary" />
                        </div>

                        <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Application submitted! (Demo)'); }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">First Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email Address</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Interested Course</label>
                                <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors">
                                    <option>Select a course...</option>
                                    <option>Unreal Engine 5</option>
                                    <option>Cybersecurity</option>
                                    <option>Web Development</option>
                                </select>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                                Submit Application
                            </button>

                            <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-2">
                                <Shield className="w-3 h-3" /> Secure SSL Encryption. Your data is safe.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
