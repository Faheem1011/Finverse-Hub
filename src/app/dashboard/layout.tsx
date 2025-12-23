import { Sidebar } from "@/components/dashboard/Sidebar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    // Fetch full profile if needed, or rely on metadata
    // const role = user.user_metadata?.role || 'student';
    // const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();

    const role = user.user_metadata?.role || 'student';
    const fullName = user.user_metadata?.full_name || 'Student';

    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black flex">
            <Sidebar
                userRole={role}
                email={user.email || ''}
                fullName={fullName}
            />

            <main className="flex-1 md:ml-72 min-w-0">
                {/* Top Space for Mobile Header */}
                <div className="h-16 md:hidden"></div>

                {children}
            </main>
        </div>
    );
}
