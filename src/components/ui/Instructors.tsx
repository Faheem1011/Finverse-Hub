'use client';

import React, { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Linkedin, Facebook, Instagram } from "lucide-react";
import Link from 'next/link';

/**
 * Premium Team Section (Finverse Professors)
 * Refined with premium glow effects, sheen, and subtle textures.
 */

// ---------------------------
// Types
// ---------------------------
export type SocialType = "facebook" | "instagram" | "tiktok" | "linkedin";

export type SocialLink = { type: SocialType; href: string };

export type TeamMember = {
    name: string;
    role: string;
    href?: string;
    avatarUrl?: string;
    socials?: SocialLink[];
};

// ---------------------------
// Social Icons Component
// ---------------------------
function SocialIcon({ type, href }: { type: SocialType; href: string }) {
    const renderIcon = () => {
        switch (type) {
            case "facebook": return <Facebook className="h-4 w-4" />;
            case "instagram": return <Instagram className="h-4 w-4" />;
            case "linkedin": return <Linkedin className="h-4 w-4" />;
            case "tiktok": return <span className="font-bold text-[10px]">TT</span>;
            default: return null;
        }
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/65 transition hover:border-[rgba(0,255,220,0.35)] hover:bg-white/10 hover:text-white"
            aria-label={type}
        >
            {renderIcon()}
        </a>
    );
}

// ---------------------------
// Avatar Component
// ---------------------------
function Avatar({ avatarUrl, name }: { avatarUrl?: string; name: string }) {
    return (
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,220,0.18),transparent_55%)]" />
            {avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-zinc-600">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
            )}
        </div>
    );
}

// ---------------------------
// HUD Decorative Corners
// ---------------------------
function HudCorners() {
    return (
        <>
            <div className="pointer-events-none absolute left-4 top-4 h-3 w-3 rounded-sm border-l border-t border-white/20 transition-all duration-300 group-hover:border-[rgba(0,255,220,0.5)] group-hover:scale-110" />
            <div className="pointer-events-none absolute right-4 top-4 h-3 w-3 rounded-sm border-r border-t border-white/20 transition-all duration-300 group-hover:border-[rgba(0,255,220,0.5)] group-hover:scale-110" />
            <div className="pointer-events-none absolute left-4 bottom-4 h-3 w-3 rounded-sm border-b border-l border-white/20 transition-all duration-300 group-hover:border-[rgba(0,255,220,0.5)] group-hover:scale-110" />
            <div className="pointer-events-none absolute right-4 bottom-4 h-3 w-3 rounded-sm border-b border-r border-white/20 transition-all duration-300 group-hover:border-[rgba(0,255,220,0.5)] group-hover:scale-110" />
        </>
    );
}

// ---------------------------
// Card Component
// ---------------------------
function ProfessorCard({ member, index }: { member: TeamMember; index: number }) {
    const ref = useRef<HTMLDivElement | null>(null);

    // Subtle pointer-driven spotlight + tilt
    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const sprX = useSpring(px, { stiffness: 220, damping: 22 });
    const sprY = useSpring(py, { stiffness: 220, damping: 22 });
    const rotX = useTransform(sprY, [-1, 1], [4, -4]);
    const rotY = useTransform(sprX, [-1, 1], [-5, 5]);

    const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== "mouse") return;
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        px.set((x - 0.5) * 2);
        py.set((y - 0.5) * 2);
    };

    const onLeave = () => {
        px.set(0);
        py.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-sm"
        >
            {/* Gradient border (flavour) — on hover */}
            <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_210deg,rgba(0,255,220,0.0),rgba(0,255,220,0.55),rgba(120,120,255,0.35),rgba(0,255,220,0.0))] blur-[10px]" />
            </div>

            {/* Spotlight that follows cursor — very low opacity */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background:
                        "radial-gradient(520px 260px at 35% 20%, rgba(0,255,220,0.18), transparent 60%), radial-gradient(520px 260px at 80% 55%, rgba(120,120,255,0.14), transparent 65%)",
                }}
            />

            {/* Top sheen */}
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,255,220,0.65),rgba(120,120,255,0.40),transparent)] opacity-30 transition-opacity duration-300 group-hover:opacity-80" />

            {/* Left accent rail */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] rounded-l-2xl bg-[linear-gradient(to_bottom,rgba(0,255,220,0.00),rgba(0,255,220,0.55),rgba(120,120,255,0.35),rgba(0,255,220,0.00))] opacity-55" />


            {/* HUD Accents */}
            <HudCorners />

            <div className="relative z-10">
                <div className="flex items-start gap-4">
                    <Avatar avatarUrl={member.avatarUrl} name={member.name} />

                    <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold leading-snug text-white [text-wrap:balance] group-hover:text-[rgba(0,255,220,1)] transition-colors duration-300">
                            {member.name}
                        </h3>
                        <p className="mt-0.5 text-sm leading-snug text-white/70">{member.role}</p>

                        {member.href && (
                            <Link
                                href={member.href}
                                className="group/btn mt-3 inline-flex w-fit shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[rgba(0,255,220,0.85)] backdrop-blur transition hover:border-[rgba(0,255,220,0.35)] hover:bg-white/10 hover:text-[rgba(0,255,220,1)]"
                            >
                                View Profile
                                <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </Link>
                        )}
                    </div>
                </div>

                {member.socials && member.socials.length > 0 && (
                    <div className="mt-5 flex items-center gap-2">
                        {member.socials.map((s, idx) => (
                            <SocialIcon key={idx} type={s.type} href={s.href} />
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

// ---------------------------
// Main Component
// ---------------------------
import { instructors } from "@/data/instructors";

export function Instructors() {
    // Transform the data from instructors.ts to match our component's needs
    const members: TeamMember[] = instructors.map((inst) => ({
        name: inst.name,
        role: inst.role,
        href: `/instructors/${inst.id}`,
        // Map the social object to an array of SocialLink
        socials: [
            inst.socials.facebook ? { type: "facebook", href: inst.socials.facebook } : null,
            inst.socials.instagram ? { type: "instagram", href: inst.socials.instagram } : null,
            inst.socials.tiktok ? { type: "tiktok", href: inst.socials.tiktok } : null,
            inst.socials.linkedin ? { type: "linkedin", href: inst.socials.linkedin } : null,
        ].filter(Boolean) as SocialLink[],
    }));

    return (
        <section id="instructors" className="py-24 bg-[#04111f] relative overflow-hidden">
            {/* Textural Noise Overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.75\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"160\" height=\"160\" filter=\"url(%23n)\" opacity=\"0.35\"/%3E%3C/svg%3E')",
                }}
            />

            {/* Background Orbs */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[rgba(0,255,220,0.08)] blur-[120px]" />
                <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-[rgba(120,120,255,0.08)] blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <header className="mb-16">
                    <div className="text-xs font-bold tracking-[0.25em] text-[rgba(0,255,220,0.85)] uppercase mb-3">Our Team</div>
                    <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-white">
                        Finverse Professors
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, i) => (
                        <ProfessorCard key={member.name} member={member} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
