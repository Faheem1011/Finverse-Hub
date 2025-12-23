import React, { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Linkedin, Globe, Twitter } from "lucide-react";

/**
 * Finverse Professors (Minimal Data + Premium FX)
 * ----------------------------------------------
 * You said there is random data you don't want.
 * This version ONLY renders:
 * - Name
 * - Role
 * - View Profile link (optional)
 * - Social icons (optional)
 * - Avatar (optional)
 *
 * Removed:
 * - Level chip, tags/chips, stats, mentoring text, meta pills
 *
 * Kept (visual flavour without extra data):
 * - Aurora backdrop + subtle texture
 * - HUD corner notches
 * - Left accent rail + top sheen on hover
 * - Subtle hover tilt (desktop)
 */

// ---------------------------
// Types
// ---------------------------
export type SocialLink = { type: "linkedin" | "twitter" | "website"; href: string };

export type TeamMember = {
  name: string;
  role: string;
  href?: string;
  avatarUrl?: string;
  socials?: SocialLink[];
};

// ---------------------------
// Public Components
// ---------------------------
export function ProfessorsSection({
  kicker = "OUR TEAM",
  title = "Finverse Professors",
  description,
  members,
}: {
  kicker?: string;
  title?: string;
  description?: string;
  members: TeamMember[];
}) {
  return (
    <section className="relative overflow-hidden bg-[#04111f]">
      <Backdrop />

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-16">
        <Header kicker={kicker} title={title} description={description} />
        <ProfessorsGrid members={members} />
      </div>
    </section>
  );
}

export function ProfessorsGrid({ members }: { members: TeamMember[] }) {
  const normalized = useMemo(() => {
    return members.map((m) => ({
      ...m,
      socials: (m.socials ?? []).slice(0, 3),
    }));
  }, [members]);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {normalized.map((m) => (
        <ProfessorCard key={m.name} member={m} />
      ))}
    </div>
  );
}

// ---------------------------
// Layout
// ---------------------------
function Header({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return (
    <div className="mb-10">
      <div className="text-xs font-semibold tracking-[0.22em] text-[rgba(0,255,220,0.85)]">{kicker}</div>
      <h2 className="mt-2 font-serif text-4xl tracking-tight text-white md:text-6xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">{description}</p> : null}
    </div>
  );
}

function Backdrop() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-12%] h-[560px] w-[560px] rounded-full bg-[rgba(0,255,220,0.12)] blur-3xl" />
        <div className="absolute bottom-[-28%] left-[-12%] h-[560px] w-[560px] rounded-full bg-[rgba(120,120,255,0.12)] blur-3xl" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.75\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"160\" height=\"160\" filter=\"url(%23n)\" opacity=\"0.35\"/%3E%3C/svg%3E')",
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-screen">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_7px)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_40%,transparent_40%,rgba(0,0,0,0.45)_82%)]" />
    </>
  );
}

// ---------------------------
// Card
// ---------------------------
function ProfessorCard({ member }: { member: TeamMember }) {
  const ref = useRef < HTMLDivElement | null > (null);

  // Subtle pointer-driven spotlight + tilt (mouse only)
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
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_16px_55px_rgba(0,0,0,0.40)] backdrop-blur"
    >
      {/* Gradient border (flavour) — does NOT cover text */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_210deg,rgba(0,255,220,0.0),rgba(0,255,220,0.55),rgba(120,120,255,0.35),rgba(0,255,220,0.0))] blur-[10px]" />
      </div>

      {/* Left accent rail */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] rounded-l-2xl bg-[linear-gradient(to_bottom,rgba(0,255,220,0.00),rgba(0,255,220,0.55),rgba(120,120,255,0.35),rgba(0,255,220,0.00))] opacity-55" />

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

      {/* Corner HUD notches */}
      <HudCorners />

      {/* Content */}
      <div className="relative">
        <div className="flex items-start gap-4">
          <Avatar avatarUrl={member.avatarUrl} name={member.name} />

          <div className="min-w-0 flex-1">
            {/* IMPORTANT: no truncate; allow wrap so names are not cut off */}
            <h3 className="text-lg font-semibold leading-snug text-white [text-wrap:balance]">
              {member.name}
            </h3>
            <p className="mt-0.5 text-sm leading-snug text-white/70">{member.role}</p>

            {/* View Profile becomes an inline text link under role (prevents header collisions) */}
            {member.href ? (
              <div className="mt-3">
                <ViewProfile href={member.href} />
              </div>
            ) : null}
          </div>
        </div>

        {/* Footer row */}
        {member.socials && member.socials.length ? (
          <div className="mt-5 flex items-center gap-2">
            {member.socials.map((s) => (
              <SocialIcon key={s.href} type={s.type} href={s.href} />
            ))}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

function ViewProfile({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="group/btn inline-flex w-fit shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[rgba(0,255,220,0.85)] backdrop-blur transition hover:border-[rgba(0,255,220,0.35)] hover:bg-white/10 hover:text-[rgba(0,255,220,1)]"
    >
      View Profile
      <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
    </a>
  );
}

function HudCorners() {
  return (
    <>
      <div className="pointer-events-none absolute left-5 top-5 h-3.5 w-3.5 rounded-sm border-l border-t border-white/20" />
      <div className="pointer-events-none absolute right-5 top-5 h-3.5 w-3.5 rounded-sm border-r border-t border-white/20" />
      <div className="pointer-events-none absolute left-5 bottom-5 h-3.5 w-3.5 rounded-sm border-b border-l border-white/20" />
      <div className="pointer-events-none absolute right-5 bottom-5 h-3.5 w-3.5 rounded-sm border-b border-r border-white/20" />
    </>
  );
}

// ---------------------------
// Atoms
// ---------------------------
function Avatar({ avatarUrl, name }: { avatarUrl?: string; name: string }) {
  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,220,0.18),transparent_55%)]" />
      {avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-white/60">
          {name
            .split(" ")
            .slice(0, 2)
            .map((s) => s[0])
            .join("")
            .toUpperCase()}
        </div>
      )}
    </div>
  );
}

function SocialIcon({ type, href }: { type: "linkedin" | "twitter" | "website"; href: string }) {
  const Icon = type === "linkedin" ? Linkedin : type === "twitter" ? Twitter : Globe;
  return (
    <a
      href={href}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/65 transition hover:border-[rgba(0,255,220,0.35)] hover:bg-white/10 hover:text-white"
      aria-label={type}
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

// ---------------------------
// Example usage (kept for quick testing)
// ---------------------------
export default function DemoProfessors() {
  const members: TeamMember[] = [
    {
      name: "Ahmed Mashood",
      role: "Founder & CEO",
      href: "#",
      socials: [
        { type: "linkedin", href: "#" },
        { type: "twitter", href: "#" },
        { type: "website", href: "#" },
      ],
    },
    {
      name: "Ahsan Syed",
      role: "Director",
      href: "#",
      socials: [
        { type: "linkedin", href: "#" },
        { type: "twitter", href: "#" },
        { type: "website", href: "#" },
      ],
    },
    {
      name: "Muhammad Bilal Qureshi",
      role: "Co-Founder & Director Operations",
      href: "#",
      socials: [
        { type: "linkedin", href: "#" },
        { type: "twitter", href: "#" },
        { type: "website", href: "#" },
      ],
    },
    {
      name: "Sairam Hussain Miran",
      role: "Public Speaking Instructor & Lawyer",
      href: "#",
      socials: [
        { type: "linkedin", href: "#" },
        { type: "twitter", href: "#" },
        { type: "website", href: "#" },
      ],
    },
    {
      name: "Muhammad Faheem",
      role: "Cyber Security & Design Innovation",
      href: "#",
      socials: [
        { type: "linkedin", href: "#" },
        { type: "twitter", href: "#" },
        { type: "website", href: "#" },
      ],
    },
  ];

  return <ProfessorsSection members={members} />;
}
