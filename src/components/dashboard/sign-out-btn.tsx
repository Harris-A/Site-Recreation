"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@radix-ui/themes"
import { ExitIcon } from "@radix-ui/react-icons"

export default function SignOutButton() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleSignOut = async () => {
        setIsLoading(true)

        try {
            await fetch("/api/signout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            router.push("/signin")
            router.refresh()
        } catch (error) {
            console.error("Error signing out:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Button onClick={handleSignOut} disabled={isLoading}>
            {isLoading ? (
                "Signing out..."
            ) : (
                <>
                    <ExitIcon className="mr-2 h-4 w-4" />
                    Sign out
                </>
            )}
        </Button>
    )
}

