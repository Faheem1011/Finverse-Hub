import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Upload, Users, BookOpen, MessageSquare } from "lucide-react";

export default async function MentorDashboard() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return redirect('/login');
    }

    // Safety check: Ensure only mentors access this
    // DEMO MODE: Commented out to allow you to view the dashboard without manually updating the database role
    /*
    if (user.user_metadata?.role !== 'mentor') {
        return redirect('/dashboard');
    }
    */

    return (
        <div className="p-6 md:p-12 max-w-7xl mx-auto">
            {/* Demo Alert */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-4 py-2 rounded-lg mb-8 text-sm text-center font-bold">
                ⚠️ DEMO MODE: Viewing as Mentor (Role Check Disabled)
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
                <div>
                    <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-500 rounded-lg text-sm font-medium mb-4">
                        Mentor Portal
                    </div>
                    <h1 className="text-4xl font-serif font-bold font-white">Instructor Dashboard</h1>
                    <p className="text-gray-400 mt-2">Manage your courses, students, and content.</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                    <p className="text-lg font-bold text-white">{user.user_metadata.full_name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                    { label: 'Total Students', value: '124', icon: Users, color: 'text-blue-500' },
                    { label: 'Active Courses', value: '3', icon: BookOpen, color: 'text-primary' },
                    { label: 'New Messages', value: '18', icon: MessageSquare, color: 'text-green-500' },
                    { label: 'Pending Assignments', value: '7', icon: Upload, color: 'text-orange-500' },
                ].map((stat) => (
                    <div key={stat.label} className="bg-zinc-900 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 text-sm">{stat.label}</span>
                            <stat.icon className={`w-5 h-5 ${stat.color}`} />
                        </div>
                        <span className="text-3xl font-bold">{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* Content Upload Area */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Upload className="w-6 h-6 text-primary" />
                            Upload Course Material
                        </h2>

                        <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center hover:bg-white/5 transition-colors cursor-pointer">
                            <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                            <p className="text-lg font-medium text-white mb-2">Drag and drop files here</p>
                            <p className="text-sm text-gray-500 mb-6">PDF, MP4, PPTX (Max 50MB)</p>
                            <button className="bg-primary text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform">
                                Browse Files
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8">
                    <h2 className="text-xl font-bold mb-6">Recent Uploads</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-black/50 rounded-xl border border-white/5">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                    <div className="text-xs font-bold text-gray-300">PDF</div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Lecture_Note_0{i}.pdf</p>
                                    <p className="text-xs text-gray-500">2.4 MB • Just now</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
