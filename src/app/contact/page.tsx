'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Build The Future Together</h1>
                        <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                            Whether you're a prospective student, a potential partner, or just curious about what we do at Finverse Hub, we'd love to hear from you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">Visit Us</h3>
                                    <p className="text-gray-400">Building No:195 2nd floor, phase 4 DHA Lahore</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                                    <p className="text-gray-400">hello@finversehub.co</p>
                                    <p className="text-gray-400">support@finversehub.co</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">Call Us</h3>
                                    <p className="text-gray-400">+92 305 7711666</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border border-white/10 rounded-2xl p-8">
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent! (Demo)'); }}>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="email@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Message</label>
                                <textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors h-32" placeholder="How can we help?" />
                            </div>
                            <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-primary transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
