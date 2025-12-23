'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import { About } from "@/components/ui/About";
import { DomainPreview } from "@/components/ui/DomainPreview";
import { Instructors } from "@/components/ui/Instructors";
import Link from "next/link";
import { StuckGrid } from "@/components/ui/StuckGrid";
import MagneticButton from "@/components/ui/MagneticButton";
import TextScramble from "@/components/ui/TextScramble";

const HologramPlanet = dynamic(() => import('@/components/canvas/HologramPlanet'), { ssr: false });

// const InteractiveScene = dynamic(() => import('@/components/canvas/InteractiveScene'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />

      {/* 
          SCROLL TIMELINE CONTAINER 
          This section needs to be tall (e.g., 400vh) to allow the scroll animation to play out.
          The StuckGrid is sticky at top:0 and relies on this scroll distance.
          The "Hero Content" is also sticky or fixed on top of it.
      */}
      <div className="relative w-full h-[400vh]">
        {/* Background Animation Layer */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          <StuckGrid />
        </div>

        {/* Hologram Planet Layer - Centered and independent */}
        <div className="sticky top-0 h-screen w-full z-[5] -mt-[100vh] flex items-center justify-center">
          <div className="w-full h-full max-w-[1400px]">
            <HologramPlanet />
          </div>
        </div>

        {/* Hero Content Layer (Overlaid on top) */}
        <div className="sticky top-0 w-full h-screen z-10 pointer-events-none flex flex-col items-center justify-center -mt-[200vh]">
          {/* Note: pointer-events-auto on interactive bits if needed */}
          <div className="text-center px-4 pointer-events-auto relative">
            <h1 className="text-6xl md:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 tracking-tighter drop-shadow-2xl relative z-10">
              <TextScramble text="FINVERSE HUB" trigger="load" />
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed mb-12">
              Accelerate your career in the digital economy. <br />
              <span className="text-white font-medium">Master High-Income Skills.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/courses">
                <MagneticButton className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] inline-block">
                  Explore Courses
                </MagneticButton>
              </Link>
              <Link href="/studio">
                <MagneticButton className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-md transition-colors inline-block">
                  Enter Studio
                </MagneticButton>
              </Link>
            </div>
          </div>

          {/* Gradient Fade at bottom of viewport */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
        </div>
      </div>

      <About />
      <DomainPreview />
      <Instructors />
      <Footer />
    </main>
  );
}
