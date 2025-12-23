"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface RevealImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    variant?: "clip" | "wipe";
    direction?: "left" | "right" | "top" | "bottom";
    delay?: number;
    className?: string;
}

export default function RevealImage({
    src,
    alt,
    width,
    height,
    variant = "clip",
    direction = "bottom",
    delay = 0,
    className = "",
}: RevealImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    const clipVariants = {
        hidden: {
            clipPath:
                direction === "bottom"
                    ? "inset(100% 0% 0% 0%)"
                    : direction === "top"
                        ? "inset(0% 0% 100% 0%)"
                        : direction === "left"
                            ? "inset(0% 100% 0% 0%)"
                            : "inset(0% 0% 0% 100%)",
        },
        visible: {
            clipPath: "inset(0% 0% 0% 0%)",
        },
    };

    const wipeVariants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
            y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            variants={variant === "clip" ? clipVariants : wipeVariants}
            className={`relative overflow-hidden ${className}`}
        >
            {variant === "wipe" && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        delay: delay + 0.2,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10 origin-left"
                />
            )}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
}
