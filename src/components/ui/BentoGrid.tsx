"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}
        >
            {children}
        </div>
    );
}

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    span?: "1x1" | "2x1" | "2x2" | "1x2";
}

export function BentoCard({
    children,
    className = "",
    span = "1x1",
}: BentoCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const spanClasses = {
        "1x1": "col-span-1 row-span-1",
        "2x1": "md:col-span-2 row-span-1",
        "2x2": "md:col-span-2 md:row-span-2",
        "1x2": "col-span-1 md:row-span-2",
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative overflow-hidden rounded-2xl bg-card border border-border/20 p-6 ${spanClasses[span]} ${className}`}
            style={{
                background: isHovered
                    ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 242, 255, 0.1), transparent 40%)`
                    : undefined,
            }}
            whileHover={{
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Spotlight border effect */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 242, 255, 0.4), transparent 40%)`,
                    maskImage:
                        "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                }}
            />
            {children}
        </motion.div>
    );
}
