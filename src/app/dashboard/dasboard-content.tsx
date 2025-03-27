"use client"

import { Text } from "@radix-ui/themes"

interface DashboardContentProps {
    user: {
        email: string
        username?: string
    }
}

export default function DashboardContent({ user }: DashboardContentProps) {
    return (
        <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Welcome, {user.username || user.email}!</h2>
            <Text as="p" color="gray">
                You are now signed in to your account.
            </Text>
            <p className="text-muted-foreground mt-4">Your account dashboard content goes here.</p>
        </div>
    )
}

