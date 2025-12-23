"use client";

import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import TextScramble from "@/components/ui/TextScramble";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function StudioPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="container mx-auto px-4 py-24">
                <div className="mb-16 text-center">
                    <TextScramble
                        text="Creative Studio"
                        as="h1"
                        className="text-5xl md:text-7xl font-serif mb-4"
                        trigger="load"
                    />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Experience our premium UI components with spotlight effects and
                        holographic tilt interactions.
                    </p>
                </div>

                <BentoGrid className="max-w-7xl mx-auto">
                    <BentoCard span="2x2" className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Featured Project</h3>
                            <p className="text-gray-400">
                                Hover to reveal the spotlight effect and see the holographic
                                tilt in action.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <span className="text-primary font-semibold">Premium ✨</span>
                        </div>
                    </BentoCard>

                    <BentoCard span="1x1">
                        <h3 className="text-xl font-bold mb-2">Design System</h3>
                        <p className="text-gray-400 text-sm">
                            Modern UI patterns with magical interactions.
                        </p>
                    </BentoCard>

                    <BentoCard span="1x1">
                        <h3 className="text-xl font-bold mb-2">Animations</h3>
                        <p className="text-gray-400 text-sm">
                            Smooth transitions powered by Framer Motion.
                        </p>
                    </BentoCard>

                    <BentoCard span="2x1">
                        <h3 className="text-xl font-bold mb-2">Interactive Elements</h3>
                        <p className="text-gray-400 text-sm">
                            Explore magnetic buttons, spotlight cards, and text scramble
                            effects throughout the site.
                        </p>
                    </BentoCard>

                    <BentoCard span="1x2">
                        <h3 className="text-xl font-bold mb-2">3D Integration</h3>
                        <p className="text-gray-400 text-sm">
                            Three.js and React Three Fiber for immersive experiences.
                        </p>
                    </BentoCard>

                    <BentoCard span="1x1">
                        <h3 className="text-xl font-bold mb-2">Optimized</h3>
                        <p className="text-gray-400 text-sm">
                            Built with Next.js 16 and React 19.
                        </p>
                    </BentoCard>
                </BentoGrid>
            </section>

            <div className="h-24" />
            <Footer />
        </main>
    );
}
