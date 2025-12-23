import { Navbar } from "@/components/layout/Navbar";
import { login, signup } from './actions'
import { Footer } from "@/components/layout/Footer";

export const dynamic = 'force-dynamic';

// Next.js 15: searchParams is a Promise
export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
    const params = await searchParams; // Await the promise

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6 flex items-center justify-center min-h-[80vh]">
                <div className="w-full max-w-md bg-zinc-900 border border-white/5 p-8 rounded-3xl shadow-2xl">
                    <h1 className="text-3xl font-serif font-bold text-center mb-2">Welcome Back</h1>
                    <p className="text-gray-400 text-center mb-8 text-sm">Sign in to access your course dashboard.</p>

                    {params.error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-2 rounded-lg mb-6 text-sm text-center">
                            {params.error}
                        </div>
                    )}

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                placeholder="••••••••"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                            />
                        </div>

                        <button
                            formAction={login}
                            className="w-full bg-primary text-black font-bold py-3.5 rounded-xl hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Sign In
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-zinc-900 text-gray-500">New to Finverse?</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="text-center">
                                <p className="text-xs text-gray-500 mb-2">To create an account, enter your details above (including Full Name below) and click Sign Up.</p>
                            </div>
                            <input
                                name="fullName"
                                type="text"
                                placeholder="Full Name (For Signup)"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                            />
                            <button
                                formAction={signup}
                                className="w-full bg-zinc-800 text-white font-semibold py-3.5 rounded-xl hover:bg-zinc-700 transition-all border border-white/5"
                            >
                                Create Student Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}
