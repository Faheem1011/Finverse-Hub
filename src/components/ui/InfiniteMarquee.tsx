"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface InfiniteMarqueeProps {
    children: React.ReactNode;
    speed?: number;
    direction?: "left" | "right";
    pauseOnHover?: boolean;
    className?: string;
}

export default function InfiniteMarquee({
    children,
    speed = 50,
    direction = "left",
    pauseOnHover = false,
    className = "",
}: InfiniteMarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                ref={containerRef}
                className="flex gap-4"
                animate={{
                    x: direction === "left" ? [0, -1000] : [-1000, 0],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
                whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
            >
                {/* Render children twice for seamless loop */}
                <div className="flex gap-4 shrink-0">{children}</div>
                <div className="flex gap-4 shrink-0">{children}</div>
            </motion.div>
        </div>
    );
}
