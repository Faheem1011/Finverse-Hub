import { courses } from "@/data/courses";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Calendar, Shield } from 'lucide-react';

export async function generateStaticParams() {
    return courses.map((course) => ({
        id: course.id,
    }));
}

export default async function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const course = courses.find((c) => c.id === id);

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Header */}
            <div className="relative pt-32 pb-20 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/courses" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
                    </Link>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">{course.category}</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{course.title}</h1>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                                Master the skills needed to succeed in {course.category}. Learn from industry experts and build a real-world portfolio.
                            </p>

                            <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-8">
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {course.duration}</div>
                                <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> {course.level}</div>
                                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> Next cohort: June 1st</div>
                            </div>

                            <Link href="/enroll" className="inline-block px-8 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-white transition-all">
                                Enroll Now - {course.price}
                            </Link>
                        </div>

                        {/* Sticky Summary Card could go here */}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">What You Will Master</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {course.whatYouWillLearn.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Curriculum Structure</h2>
                        <div className="space-y-4">
                            {course.curriculum.map((mod, i) => (
                                <div key={i} className="p-6 bg-zinc-900 rounded-xl border border-white/5 flex items-center justify-between group hover:border-white/20 transition-colors">
                                    <span className="font-semibold text-white">{mod.module}</span>
                                    <span className="text-sm text-gray-500">{mod.duration}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Career Paths</h2>
                        <div className="flex flex-wrap gap-3">
                            {course.careerDirection.map((path, i) => (
                                <span key={i} className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-200 rounded-full text-sm">
                                    {path}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-8">
                        {/* Instructor Card */}
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                            <h3 className="text-xl font-bold text-white mb-4">Instructor</h3>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-white border border-white/20">
                                    {course.instructor.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{course.instructor}</div>
                                    <div className="text-xs text-gray-400">Industry Expert</div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400">
                                Learn from professionals with real-world experience in {course.category}.
                            </p>
                        </div>

                        {/* Who it's for Card */}
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                            <h3 className="text-xl font-bold text-white mb-4">Who It's For</h3>
                            <ul className="space-y-3">
                                {course.whoIsItFor.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
