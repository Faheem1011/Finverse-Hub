"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextScramble from "./TextScramble";

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Check if this is the first visit
        const hasVisited = sessionStorage.getItem("hasVisited");

        if (hasVisited) {
            // Quick load for returning visitors
            setProgress(100);
            setTimeout(() => setIsLoading(false), 300);
            return;
        }

        // First visit - show full animation
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        const timer = setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem("hasVisited", "true");
            }, 500);
        }, 1500);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(timer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
            >
                {/* Logo with scramble effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8"
                >
                    <TextScramble
                        text="FINVERSE HUB"
                        as="h1"
                        className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
                        trigger="load"
                    />
                </motion.div>

                {/* Progress bar */}
                <div className="w-64 h-1 bg-border/20 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-cyan-400"
                        initial={{ width: "0%" }}
                        animate={{ width: `${Math.min(progress, 100)}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                </div>

                {/* Loading text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-sm text-gray-400 font-mono"
                >
                    {progress < 100 ? "Initializing..." : "Ready"}
                </motion.p>

                {/* Split screen wipe animation */}
                {progress >= 100 && (
                    <>
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                            className="fixed top-0 left-0 right-0 h-1/2 bg-background origin-top z-[10000]"
                        />
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                            className="fixed bottom-0 left-0 right-0 h-1/2 bg-background origin-bottom z-[10000]"
                        />
                    </>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
