'use client';

import { useState } from 'react';
import { Mail, Users, BarChart3, Send, CheckCircle, Clock, Trash2, Edit2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="p-6 md:p-12 max-w-7xl mx-auto">
            <header className="mb-10">
                <h1 className="text-3xl font-serif font-bold text-white mb-2">Admin Control Center</h1>
                <p className="text-gray-400">Manage newsletters, view leads, and assign roles.</p>
            </header>

            {/* Tabs */}
            <div className="flex gap-2 mb-8 border-b border-white/10 overflow-x-auto pb-1">
                {[
                    { id: 'overview', label: 'Overview', icon: BarChart3 },
                    { id: 'newsletter', label: 'Newsletter', icon: Mail },
                    { id: 'leads', label: 'Leads & Inquiries', icon: Users },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-t-lg transition-colors whitespace-nowrap ${activeTab === tab.id
                                ? 'bg-primary/10 text-primary border-b-2 border-primary'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <tab.icon className="w-4 h-4" />
                        <span className="font-medium">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {activeTab === 'overview' && <OverviewTab />}
                {activeTab === 'newsletter' && <NewsletterTab />}
                {activeTab === 'leads' && <LeadsTab />}
            </motion.div>
        </div>
    );
}

// ---------------------------
// SUB-COMPONENTS (TABS)
// ---------------------------

function OverviewTab() {
    const stats = [
        { label: 'Total Subscribers', value: '1,204', change: '+12%', color: 'text-blue-500' },
        { label: 'Pending Leads', value: '45', change: '+5', color: 'text-orange-500' },
        { label: 'Open Rate', value: '28.4%', change: '+2.1%', color: 'text-green-500' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
                <div key={stat.label} className="bg-zinc-900 border border-white/5 p-6 rounded-2xl">
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <div className="flex items-end gap-3">
                        <span className="text-3xl font-bold text-white">{stat.value}</span>
                        <span className={`text-sm font-medium mb-1 ${stat.color}`}>{stat.change}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

function NewsletterTab() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Draft Area */}
            <div className="lg:col-span-2 bg-zinc-900 border border-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Edit2 className="w-5 h-5 text-primary" />
                    Compose Newsletter
                </h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Newsletter sent to queue (Demo)'); }}>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Subject Line</label>
                        <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder="e.g., Weekly Roundup: AI Trends" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Content (Markdown supported)</label>
                        <textarea className="w-full h-64 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none font-mono text-sm" placeholder="Hello everyone..." />
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <button type="button" className="px-5 py-2.5 text-gray-400 hover:text-white transition-colors">Save Draft</button>
                        <button type="submit" className="flex items-center gap-2 bg-primary text-black font-bold px-6 py-2.5 rounded-lg hover:scale-105 transition-transform">
                            <Send className="w-4 h-4" />
                            Send Blast
                        </button>
                    </div>
                </form>
            </div>

            {/* Recent History */}
            <div className="space-y-6">
                <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
                    <h3 className="text-lg font-bold mb-4">Recent Blasts</h3>
                    <div className="space-y-4">
                        {[
                            { subject: 'Welcome to Finverse Hub', date: '2 days ago', status: 'Sent', sent: 1200 },
                            { subject: 'New Course: Unreal Engine', date: '5 days ago', status: 'Sent', sent: 1180 },
                            { subject: 'Community Updates', date: '1 week ago', status: 'Draft', sent: 0 },
                        ].map((mail, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-white/5">
                                <div>
                                    <p className="text-sm font-medium text-white truncate max-w-[150px]">{mail.subject}</p>
                                    <p className="text-xs text-gray-500">{mail.date}</p>
                                </div>
                                <div className="text-right">
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${mail.status === 'Sent' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                        {mail.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function LeadsTab() {
    const leads = [
        { name: 'John Doe', email: 'john@example.com', type: 'Course Inquiry', date: '2024-12-20', status: 'New' },
        { name: 'Sarah Smith', email: 'sarah@design.co', type: 'Enrollment (Cyber)', date: '2024-12-19', status: 'Contacted' },
        { name: 'Mike Ross', email: 'mike.ross@law.com', type: 'Partnership', date: '2024-12-18', status: 'New' },
    ];

    return (
        <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-black/50 text-gray-400 font-medium">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {leads.map((lead, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-white">{lead.name}</div>
                                        <div className="text-xs text-gray-500">{lead.email}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-300">{lead.type}</td>
                                <td className="px-6 py-4 text-gray-500">{lead.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${lead.status === 'New' ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}`}>
                                        {lead.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-white mr-3">Detail</button>
                                    <button className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// ---------------------------
// END
// ---------------------------
