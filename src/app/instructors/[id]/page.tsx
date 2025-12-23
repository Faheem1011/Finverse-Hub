import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { instructors } from "@/data/instructors";
import { notFound } from "next/navigation";
import { Mail, Facebook, Instagram } from "lucide-react";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

// Generate static params for SSG
export function generateStaticParams() {
    return instructors.map((instructor) => ({
        id: instructor.id,
    }));
}

export default async function InstructorDetailPage({ params }: PageProps) {
    const { id } = await params;
    const instructor = instructors.find((i) => i.id === id);

    if (!instructor) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left Column: Image & Contact */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        <div className="aspect-square w-full rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 flex items-center justify-center relative group">
                            {instructor.image ? (
                                <img
                                    src={instructor.image}
                                    alt={instructor.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <svg
                                    className="w-32 h-32 text-zinc-700"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </div>

                        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-bold text-white mb-2">Contact Info</h3>

                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-4 h-4 text-primary" />
                                <a href={`mailto:${instructor.email}`} className="hover:text-white transition-colors">{instructor.email}</a>
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors font-bold text-xs flex items-center justify-center w-8 h-8">
                                    TT
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Bio & content */}
                    <div className="w-full lg:w-2/3 space-y-12">
                        <div>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">{instructor.role}</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">{instructor.name}</h1>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
                                {instructor.bio}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white">Achievements</h3>
                                <ul className="space-y-3">
                                    {instructor.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white">Core Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {instructor.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
