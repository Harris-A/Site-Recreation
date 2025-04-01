import type React from "react"
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"
/*import DashboardSidebar from "@/app/components/dashboard-sidebar"*/

export default async function DashboardLayout({
                                                  children,
                                              }: {
    children: React.ReactNode
}) {
    const user = await getCurrentUser()

    // Protect the entire dashboard section
    if (!user) {
        redirect("/signin")
    }

    return (
        <div className="flex min-h-screen">
            {/*<DashboardSidebar />*/}
            <main className="flex-1 p-6">{children}</main>
        </div>
    )
}

