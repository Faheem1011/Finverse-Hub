'use client'

import { LogOut } from "lucide-react"
import { signout } from "@/app/login/actions"

export function SignOutButton() {
    return (
        <button
            onClick={() => signout()}
            className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors font-medium text-sm"
        >
            <LogOut className="w-4 h-4" />
            Sign Out
        </button>
    )
}
