import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Play, Clock, CheckCircle, Flame } from "lucide-react";

export default async function DashboardPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return redirect('/login');
    }

    if (user.user_metadata?.role === 'mentor') {
        redirect('/dashboard/mentor');
    }

    // Dummy progress data
    const continuingCourses = [
        {
            title: "Unreal Engine 5 Mastery",
            progress: 35,
            lastChapter: "Lighting & Post-Processing",
            totalChapters: 24,
            thumbnail: "bg-purple-900/40"
        },
        {
            title: "Web Design Fundamentals",
            progress: 8,
            lastChapter: "CSS Grid Systems",
            totalChapters: 12,
            thumbnail: "bg-blue-900/40"
        }
    ];

    return (
        <div className="p-6 md:p-12 max-w-7xl mx-auto">
            <header className="mb-12">
                <h1 className="text-4xl font-serif font-bold text-white mb-2">Welcome back, {user.user_metadata?.full_name?.split(' ')[0] || 'Student'}!</h1>
                <p className="text-gray-400">You're on a 3-day learning streak. Keep it up! 🔥</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content: Course Progress */}
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            Continue Learning
                        </h2>
                        <div className="space-y-4">
                            {continuingCourses.map((course) => (
                                <div key={course.title} className="group flex flex-col sm:flex-row gap-6 p-5 bg-zinc-900 border border-white/5 rounded-2xl hover:border-primary/30 transition-all hover:bg-white/[0.02]">
                                    <div className={`w-full sm:w-48 h-32 rounded-xl ${course.thumbnail} flex items-center justify-center shrink-0`}>
                                        <Play className="w-10 h-10 text-white/50 group-hover:text-white group-hover:scale-110 transition-all" />
                                    </div>
                                    <div className="flex-1 py-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{course.title}</h3>
                                            <span className="text-xs font-bold text-gray-500 bg-white/5 px-2 py-1 rounded-md">{course.progress}%</span>
                                        </div>
                                        <p className="text-sm text-gray-400 mb-4">Last: {course.lastChapter}</p>

                                        <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                                            <div
                                                className="bg-primary h-full rounded-full transition-all duration-500 ease-out group-hover:shadow-[0_0_10px_rgba(0,255,220,0.5)]"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-6">Recommended for You</h2>
                        <div className="p-8 border border-dashed border-white/10 rounded-2xl text-center text-gray-500">
                            More courses coming soon...
                        </div>
                    </section>
                </div>

                {/* Sidebar: Stats */}
                <aside className="space-y-6">
                    <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
                        <h3 className="font-bold text-white mb-4">Your Activity</h3>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 text-sm">Courses Completed</span>
                            <span className="text-xl font-bold text-white">0</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 text-sm">Certificates Earned</span>
                            <span className="text-xl font-bold text-white">0</span>
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/5">
                            <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-colors">
                                View Full Profile
                            </button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="font-bold text-white mb-2">Join the Community</h3>
                            <p className="text-sm text-indigo-200 mb-4">Connect with 1,200+ other students on our Discord.</p>
                            <button className="text-xs font-bold bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-400 transition-colors">
                                Join Discord
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
