'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import { Play, Upload } from "lucide-react";
import { useState } from "react";

export default function SuccessStoriesPage() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const handleUploadClick = () => {
        alert("Admin Panel Integration: This feature will be connected to your backend storage (e.g., Firebase/AWS) in the next phase. For now, you can add videos by editing 'src/data/testimonials.ts'.");
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 container mx-auto px-6 text-center">
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Alumni</span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                    Student Success Stories
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                    Hear directly from our graduates who have transformed their careers and lives through Finverse Hub.
                </p>

                {/* Admin / Upload Trigger */}
                <button
                    onClick={handleUploadClick}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-full text-sm font-semibold transition-all group"
                >
                    <Upload className="w-4 h-4 group-hover:text-primary transition-colors" />
                    <span>Upload Student Story</span>
                </button>
            </section>

            {/* Video Grid */}
            <section className="pb-24 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((story, i) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col"
                        >
                            {/* Video / Thumbnail Area */}
                            <div className="relative aspect-video bg-zinc-800">
                                {activeVideo === story.id ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${story.videoId}?autoplay=1`}
                                        title={story.name + " Success Story"}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0"
                                    ></iframe>
                                ) : (
                                    <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveVideo(story.id)}>
                                        <img
                                            src={story.thumbnail}
                                            alt={story.name}
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                                                <Play className="w-6 h-6 fill-current ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex-1 flex flex-col">
                                <blockquote className="text-gray-300 italic mb-6 flex-1">"{story.quote}"</blockquote>
                                <div className="border-t border-white/5 pt-4">
                                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                                    <p className="text-primary text-sm font-medium">{story.role}</p>
                                    <p className="text-xs text-gray-500 mt-1">Course: {story.course}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
