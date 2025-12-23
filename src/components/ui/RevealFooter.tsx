"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface RevealFooterProps {
    children: React.ReactNode;
    className?: string;
}

export default function RevealFooter({
    children,
    className = "",
}: RevealFooterProps) {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

    return (
        <div ref={container} className="relative h-screen">
            <motion.footer
                style={{ y }}
                className={`fixed bottom-0 left-0 right-0 h-screen ${className}`}
            >
                {children}
            </motion.footer>
        </div>
    );
}
