'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { CandlestickChart, Code, Box, MousePointer2 } from 'lucide-react';

export function CustomCursor() {
    const { cursorType, setCursorType } = useCursor();
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleHoverStart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check for direct data-cursor attribute or parent
            const cursorTrigger = target.closest('[data-cursor]') as HTMLElement;
            if (cursorTrigger) {
                const type = cursorTrigger.dataset.cursor as any;
                setCursorType(type);
                setIsHovered(true);
                return;
            }

            if (target.closest('a') || target.closest('button') || target.closest('.cursor-pointer')) {
                setIsHovered(true);
                if (cursorType === 'default') setCursorType('button');
            } else {
                setIsHovered(false);
                setCursorType('default');
            }
        }

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHoverStart);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHoverStart);
        };
    }, [cursorType, setCursorType]);

    // Cursor Variants
    const renderCursorIcon = () => {
        switch (cursorType) {
            case 'finance':
                return <CandlestickChart className="w-6 h-6 text-green-400" />;
            case 'tech':
                return <Code className="w-6 h-6 text-blue-400" />;
            case 'creative':
                return <Box className="w-6 h-6 text-purple-400" />;
            case 'button':
            case 'text':
                return null;
            default:
                return null;
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] flex items-center justify-center"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        >
            <AnimatePresence mode="wait">
                {cursorType === 'default' || cursorType === 'button' ? (
                    <motion.div
                        key="default"
                        className="relative w-full h-full flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Core Dot */}
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isHovered ? 'scale-0 bg-transparent' : 'scale-100 bg-white shadow-[0_0_10px_rgba(59,130,246,0.8)]'}`} />

                        {/* Ring */}
                        <div className={`absolute inset-0 rounded-full border border-blue-500 transition-all duration-300 ${isHovered ? 'scale-[1.5] border-2 bg-blue-500/10' : 'scale-100 border-0 opacity-0'}`} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="icon"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20"
                    >
                        {renderCursorIcon()}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}


