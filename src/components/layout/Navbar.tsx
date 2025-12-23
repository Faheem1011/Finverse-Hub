'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { SignOutButton } from '../ui/SignOutButton';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Studio', href: '/studio' },
    { name: 'Incubator', href: '/incubator' },
    { name: 'About Us', href: '/about' },
    { name: 'Mentors', href: '/instructors' },
    { name: 'Stories', href: '/success-stories' },
];

interface NavbarProps {
    showSignOut?: boolean;
}

export function Navbar({ showSignOut = false }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled
                        ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5'
                        : 'py-6 bg-transparent'
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                        <img src="/logo.png" alt="Finverse Hub" className="h-10 w-auto" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors hover:shadow-[0_0_20px_rgba(0,242,255,0.3)]"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/enroll"
                            className="px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-primary hover:text-black transition-all hover:scale-105 active:scale-95 flex items-center gap-1"
                        >
                            Enroll Now <ChevronRight className="w-4 h-4" />
                        </Link>
                        {showSignOut && <SignOutButton />}
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold text-white hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="/enroll"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 px-8 py-3 rounded-full bg-primary text-black font-bold text-lg hover:bg-white transition-all"
                        >
                            Enroll Now
                        </Link>
                        {showSignOut && (
                            <div onClick={() => setIsMobileMenuOpen(false)}>
                                <SignOutButton />
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
