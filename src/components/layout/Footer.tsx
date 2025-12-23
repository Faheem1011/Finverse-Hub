import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/logo.png" alt="Finverse Hub" className="h-12 w-auto" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium Skills Academy. Empowering the next generation of tech leaders and creative visionaries.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Explore</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Courses', href: '/courses' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Success Stories', href: '/success-stories' },
                                { name: 'Mentors', href: '/instructors' }, // Changed name to Mentors to match Navbar, or keep Instructors if preferred. User asked for "Mentors and professors" earlier. Let's stick to "Instructors" or "Mentors". The Navbar says "Mentors". Let's use "Mentors/Instructors" or just "Instructors" but point to the right page. Navbar uses "Mentors". I'll switch this to "Mentors" for consistency? Or keep "Instructors". The user said "use the term Mentors and professors". I'll use "Mentors".
                                { name: 'Pricing', href: '/enroll' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-gray-400 hover:text-primary transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Building+No:195+2nd+floor+phase+4+DHA+Lahore"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Building No:195 2nd floor<br />phase 4 DHA Lahore
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a
                                    href="https://wa.me/923057711666"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    +92 305 7711666
                                </a>
                            </li>
                            <li className="flex flex-col gap-1 items-start">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-primary shrink-0" />
                                    <a
                                        href="mailto:info@finversehub.co"
                                        className="hover:text-white transition-colors"
                                    >
                                        info@finversehub.co
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 pl-8">
                                    <a
                                        href="mailto:hub.finverse@gmail.com"
                                        className="hover:text-white transition-colors"
                                    >
                                        hub.finverse@gmail.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Stay Updated</h4>
                        <p className="text-sm text-gray-400 mb-4">Get the latest course updates and tech news.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                            />
                            <button className="px-4 py-2 bg-primary text-black font-semibold text-sm rounded-md hover:bg-white transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Finverse Hub. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="https://www.facebook.com/people/FinverseHub/61581087407717/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/finversehub.official/#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/posts/finversehub_finversehub-cybersecurity-forextrading-activity-7387179992843091969-Ddb0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://vt.tiktok.com/ZSUQk5hNf/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span className="font-bold text-xs border border-current px-1 rounded">TT</span>
                        </a>
                        <a href="https://www.youtube.com/@finversehub.official" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span className="font-bold text-xs border border-current px-1 rounded">YT</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
