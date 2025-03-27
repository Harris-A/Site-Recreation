"use client";   // Required for using state in Next.js App Router

import {Button, Heading, Text, Link} from "@radix-ui/themes";
import {Label} from "radix-ui";
import { useState } from "react";
import { useRouter } from "next/navigation";


export function SigninForm() {
    const router = useRouter()
    const [username, setUsername] = useState("") // State for username input
    const [password, setPassword] = useState("") // State for password input
    const [error, setError] = useState("")  // State for error messages
    const [loading, setLoading] = useState(false) // State to handle loading status

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()  // Prevent default form submission behaviour
        setError("")    // reset error state
        setLoading(true)    // indicate loading state

        try {
            const response = await fetch("/api/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),   // Send user credentials
            })

            const data = await response.json()  // Parse JSON response

            if (!response.ok) {
                throw new Error(data.error || "Failed to sign in")  // Handle API error message
            }

            // If sign-in is successful, redirect to the dashboard
            if (data.success) {
                router.push(data.redirectUrl || "/dashboard")
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full max-w-md mx-auto p-6 border border-gray-200 bg-gray-50 dark:bg-black rounded-lg shadow-md">
            <div className="space-y-2 text-center">
                <Heading color="lime" size="7" className="capitalize font-bold">Sign In</Heading>
                <Text as="p" color="gray">Enter your credentials to access your account</Text>
            </div>

            {error && (
                <Text as="p" color="red" highContrast className="bg-red-100 dark:bg-red-800 p-4 mb-4">{error}</Text>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label.Root className="text-sm font-medium capitalize" htmlFor="username">username</Label.Root>
                    <input
                        id="username"
                        className="w-full p-2 border rounded-md"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label.Root htmlFor="password">Password</Label.Root>
                        <Link href="/forgot-password" className="text-sm underline">
                            Forgot password?
                        </Link>
                    </div>
                    <input
                        id="password"
                        className="w-full p-2 border rounded-md"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button color="lime" highContrast size="3" type="submit" className="w-full py-2 rounded-md" disabled={loading}>
                    {loading ? "Signing in..." : "Sign In"}
                </Button>
            </form>

            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="underline">
                    Sign up
                </Link>
            </div>
        </div>
    )
}
