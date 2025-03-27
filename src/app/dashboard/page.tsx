// This is a server component
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"
import { Heading } from "@radix-ui/themes"
import DashboardContent from "./dasboard-content"
import SignOutButton from "@/components/dashboard/sign-out-btn"

export default async function DashboardPage() {
    const user = await getCurrentUser()

    // If no user is found, redirect to sign-in
    if (!user) {
        redirect("/signin")
    }

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6">
                <Heading size="9" color="lime" className="uppercase">
                    account dashboard
                </Heading>
                <SignOutButton />
            </div>

            <DashboardContent user={user} />
        </div>
    )
}

