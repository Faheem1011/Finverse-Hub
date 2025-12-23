"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    variant?: "fade" | "slide" | "scale" | "blur";
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
    once?: boolean;
    amount?: number;
    className?: string;
}

export default function ScrollReveal({
    children,
    variant = "fade",
    direction = "up",
    delay = 0,
    duration = 0.6,
    once = true,
    amount = 0.3,
    className = "",
}: ScrollRevealProps) {
    const variants = {
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        slide: {
            hidden: {
                opacity: 0,
                y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
                x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
            },
            visible: {
                opacity: 1,
                y: 0,
                x: 0,
            },
        },
        scale: {
            hidden: {
                opacity: 0,
                scale: 0.8,
            },
            visible: {
                opacity: 1,
                scale: 1,
            },
        },
        blur: {
            hidden: {
                opacity: 0,
                filter: "blur(10px)",
            },
            visible: {
                opacity: 1,
                filter: "blur(0px)",
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            variants={variants[variant]}
            className={className}
        >
            {children}
        </motion.div>
    );
}
