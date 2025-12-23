import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Instructors } from "@/components/ui/Instructors";

export default function InstructorsPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />

            <div className="pt-32 pb-16 container mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                    Our Mentors
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Learn from the industry's best. Our professors are real-world practitioners, bringing decades of experience directly to your classroom.
                </p>
            </div>

            <Instructors />

            <Footer />
        </main>
    );
}
