"use client"; // Required for using state in Next.js App Router

import { useState } from "react";
import { Label } from "radix-ui";
import { Heading, Button, Text, Link } from "@radix-ui/themes";
import { motion } from "framer-motion"; // Import Framer Motion for animations

export function SignupForm() {
    const [formData, setFormData] = useState({
        email: "",
        firstname: "",
        lastname: "",
        username: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        const response = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            setSuccess(data.message);
            setFormData({
                email: "",
                firstname: "",
                lastname: "",
                username: "",
                password: "",
            });
        } else {
            setError(data.message || "Something went wrong.");
        }

        setLoading(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-md mx-auto p-8 border border-gray-300 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
        >
            <form onSubmit={handleSubmit}>
                <div className="space-y-3 text-center">
                    <Heading color="lime" size="7" className="capitalize font-bold">
                        Create your account
                    </Heading>
                    <Text as="p" color="gray" className="text-lg dark:text-gray-400">
                        Enter your details to create an account
                    </Text>
                </div>

                {/* Animated Error & Success Messages */}
                {error && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Text as="p" color="red" highContrast className="bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 p-4 rounded-lg font-semibold shadow-md mt-4">
                            {error}
                        </Text>
                    </motion.div>
                )}
                {success && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Text as="p" color="lime" highContrast className="bg-lime-100 dark:bg-lime-800 p-4 mb-4">
                            {success}
                        </Text>
                    </motion.div>
                )}

                <div className="space-y-3">
                    {["email", "firstname", "lastname", "username", "password"].map((field, index) => (
                        <motion.div
                            key={field}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                            className="space-y-2"
                        >
                            <Label.Root className="text-sm font-semibold uppercase tracking-wide" htmlFor={field}>
                                {field.replace(/^\w/, (c) => c.toUpperCase())}
                            </Label.Root>
                            <input
                                id={field}
                                name={field}
                                type={field === "password" ? "password" : "text"}
                                placeholder={`Enter ${field}`}
                                value={formData[field as keyof typeof formData]}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all transform focus:scale-105"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Animated Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="mt-4 flex flex-col items-center gap-4"
                >
                    <Button
                        color="lime"
                        highContrast
                        size="3"
                        type="submit"
                        className="w-full py-3 font-bold text-lg rounded-lg transition-all transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-lime-400"
                        disabled={loading}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </Button>
                    <Text as="p" className="text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link href="/signin" className="font-semibold text-lime-600 hover:text-lime-500 transition-all">
                            Sign In
                        </Link>
                    </Text>
                </motion.div>
            </form>
        </motion.div>
    );
}
