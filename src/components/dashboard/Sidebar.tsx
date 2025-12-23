'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    BookOpen,
    MessageSquare,
    Settings,
    ShieldAlert,
    LogOut,
    Menu,
    X,
    Users,
    BarChart3,
    Mail
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SidebarProps = {
    userRole: string;
    fullName: string;
    email: string;
};

export function Sidebar({ userRole, fullName, email }: SidebarProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Define navigation items based on role
    const navItems = [
        { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { label: 'My Courses', href: '/dashboard/courses', icon: BookOpen },
        { label: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
    ];

    if (userRole === 'mentor') {
        navItems.push({ label: 'Mentor Portal', href: '/dashboard/mentor', icon: Users });
    }

    // Admin Links
    const adminItems = [
        { label: 'Admin Overview', href: '/dashboard/admin', icon: ShieldAlert },
        { label: 'Newsletters', href: '/dashboard/admin?tab=newsletter', icon: Mail },
        { label: 'Leads', href: '/dashboard/admin?tab=leads', icon: BarChart3 },
    ];

    const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 left-4 z-50 p-2 md:hidden bg-zinc-900 border border-white/10 rounded-lg"
            >
                <Menu className="w-6 h-6 text-white" />
            </button>

            {/* Sidebar Overlay (Mobile) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Content */}
            <motion.aside
                className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#04111f]/95 border-r border-white/5 backdrop-blur-xl p-6 flex flex-col transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-3">
                        {/* Logo Placeholder */}
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                            <span className="font-bold text-black text-xs">FH</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white">Finverse Hub</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="md:hidden">
                        <X className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

                {/* User Info Card */}
                <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-900 border border-white/10 flex items-center justify-center text-sm font-bold text-white">
                            {fullName.charAt(0)}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold text-white truncate">{fullName}</p>
                            <p className="text-xs text-gray-400 truncate capitalize">{userRole}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1">
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${active ? 'bg-primary/10 text-primary border border-primary/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                                <item.icon className={`w-5 h-5 transition-colors ${active ? 'text-primary' : 'text-gray-500 group-hover:text-white'}`} />
                                <span className="font-medium">{item.label}</span>
                                {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,220,0.5)]" />}
                            </Link>
                        );
                    })}

                    {/* Admin Section */}
                    {/* Ideally verify admin role here, showing to everyone for demo/testing as requested */}
                    <div className="mt-8 pt-8 border-t border-white/5">
                        <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Admin Tools</p>
                        {adminItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${active ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    <item.icon className={`w-5 h-5 transition-colors ${active ? 'text-purple-400' : 'text-gray-500 group-hover:text-white'}`} />
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            )
                        })}
                    </div>
                </nav>

                {/* Footer Actions */}
                <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
                    <Link
                        href="/dashboard/settings"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                        <Settings className="w-5 h-5" />
                        <span className="font-medium">Settings</span>
                    </Link>
                    {/* Note: Logout handling usually done via server action or router push */}
                    <form action="/auth/signout" method="post">
                        <button type="submit" className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors text-left">
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Sign Out</span>
                        </button>
                    </form>
                </div>

            </motion.aside>
        </>
    );
}
