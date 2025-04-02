"use client"; // Required for using state in Next.js App Router

import { Button, Heading, Text, Link } from "@radix-ui/themes";
import { Label } from "radix-ui";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Import Framer Motion for animations

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
                router.push(data.redirectUrl || "/dashboard");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-md mx-auto p-8 border border-gray-300 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
        >
            <div className="space-y-3 text-center">
                <Heading color="lime" size="8" className="capitalize font-extrabold tracking-wide">
                    Sign In
                </Heading>
                <Text as="p" color="gray" className="text-lg dark:text-gray-400">
                    Enter your credentials to access your account
                </Text>
            </div>

            {error && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Text
                        as="p"
                        color="red"
                        highContrast
                        className="bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 p-4 rounded-lg font-semibold shadow-md mt-4"
                    >
                        {error}
                    </Text>
                </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="space-y-3">
                    <Label.Root className="text-sm font-semibold uppercase tracking-wide" htmlFor="username">
                        Username
                    </Label.Root>
                    <motion.input
                        whileFocus={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        id="username"
                        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-lime-500 focus:outline-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label.Root className="text-sm font-semibold uppercase tracking-wide" htmlFor="password">
                            Password
                        </Label.Root>
                        <Link href="#" className="text-sm text-lime-600 hover:text-lime-500 transition-all">
                            Forgot password?
                        </Link>
                    </div>
                    <motion.input
                        whileFocus={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        id="password"
                        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-lime-500 focus:outline-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="mt-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        disabled={loading}
                        className="w-full py-3 font-bold text-lg rounded-lg transition-all transform bg-lime-600 text-white hover:bg-lime-700 focus:ring-4 focus:ring-lime-400"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </motion.button>
                </motion.div>
            </form>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center text-sm mt-6"
            >
                <span className="text-gray-600 dark:text-gray-400">Don&apos;t have an account?</span>{" "}
                <Link href="/signup" className="font-semibold text-lime-600 hover:text-lime-500 transition-all">
                    Sign up
                </Link>
            </motion.div>
        </motion.div>
    );
}
