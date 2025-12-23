"use client";

import { useEffect, useState, useRef } from "react";

interface TextScrambleProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    trigger?: "load" | "hover";
}

export default function TextScramble({
    text,
    className = "",
    as: Component = "span",
    trigger = "load",
}: TextScrambleProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const scrambleChars = "!<>-_\\/[]{}—=+*^?#________";
    const iterations = useRef(0);

    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);
        iterations.current = 0;

        const interval = setInterval(() => {
            setDisplayText((prev) =>
                prev
                    .split("")
                    .map((char, index) => {
                        if (index < iterations.current) {
                            return text[index];
                        }
                        return scrambleChars[
                            Math.floor(Math.random() * scrambleChars.length)
                        ];
                    })
                    .join("")
            );

            if (iterations.current >= text.length) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iterations.current += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        if (trigger === "load") {
            setTimeout(scramble, 100);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger]);

    const handleMouseEnter = () => {
        if (trigger === "hover") {
            scramble();
        }
    };

    return (
        <Component
            className={className}
            onMouseEnter={handleMouseEnter}
            style={{ fontVariantNumeric: "tabular-nums" }}
        >
            {displayText}
        </Component>
    );
}
