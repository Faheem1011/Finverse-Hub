'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { instructors } from '@/data/instructors'

export async function login(formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect(`/login?error=${error.message}`)
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    const email = formData.get('email') as string;
    const fullName = formData.get('fullName') as string;

    // SECURITY FIX: Automatic role assignment based on email is risky if email isn't verified *before* this runs.
    // Commenting out for safety. ideally, assign roles manually in Supabase dashboard.
    // const isMentor = instructors.some(inst => inst.email.toLowerCase() === email.toLowerCase());
    const role = 'student'; // Default to student

    const data = {
        email: email,
        password: formData.get('password') as string,
        options: {
            data: {
                full_name: fullName,
                role: role,
            }
        }
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect(`/login?error=${error.message}`)
    }

    revalidatePath('/', 'layout')
    redirect('/login?message=Account created! Please check your email to verify.')
}

export async function signout() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    revalidatePath('/', 'layout')
    redirect('/login')
}
