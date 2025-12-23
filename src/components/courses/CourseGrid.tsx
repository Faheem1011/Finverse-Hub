'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { courses } from '@/data/courses';
import Link from 'next/link';

const categories = ['All', '3D Design', 'Cybersecurity', 'AI & Data', 'Development', 'Finance'];

export function CourseGrid() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredCourses = activeCategory === 'All'
        ? courses
        : courses.filter(c => c.category === activeCategory);

    return (
        <div className="py-12">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                ? 'bg-primary text-black scale-105'
                                : 'bg-white/5 text-white hover:bg-white/10 hover:text-primary'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredCourses.map((course) => (
                        <motion.div
                            layout
                            key={course.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-card rounded-2xl overflow-hidden border border-border group hover:border-primary/50 transition-colors"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-bold border border-white/10">
                                    {course.level}
                                </div>
                            </div>

                            <div className="p-6">
                                <span className="text-xs text-primary font-bold uppercase tracking-wider">{course.category}</span>
                                <h3 className="text-xl font-bold text-white mt-2 mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {course.title}
                                </h3>

                                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                                    <div className="text-sm text-gray-400">
                                        <span className="block text-xs text-gray-500">Instructor</span>
                                        {course.instructor}
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-xl font-bold text-white">{course.price}</span>
                                        <span className="text-xs text-gray-500">{course.duration}</span>
                                    </div>
                                </div>

                                <Link
                                    href={`/courses/${course.id}`}
                                    className="mt-6 block w-full py-3 bg-white/5 hover:bg-primary hover:text-black text-white text-center rounded-lg font-semibold transition-all text-sm"
                                >
                                    View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
