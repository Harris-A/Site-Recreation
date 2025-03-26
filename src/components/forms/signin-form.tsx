"use client";   // Required for using state in Next.js App Router

import {Button, Heading, Text} from "@radix-ui/themes";
import {Label} from "radix-ui";
import { useState } from "react";


export function SigninForm() {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(""); // Reset message

        try {
            const res = await fetch("/api/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("Login successful!");
                console.log("User logged in:", data.user);
                // Redirect or store session info
            } else {
                setMessage(`${data.error}`);
            }
        } catch (error) {
            setMessage("Something went wrong. Try again.");
            console.error("Sign-in error:", error);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 border border-gray-200 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-6">
                    <Heading color="lime" size="7" className="capitalize font-bold">sign in</Heading>
                    <Text as="p" color="gray">Enter your credentials to sign into your account</Text>
                </div>

                {/* Email input field */}
                <div className="space-y-2">
                    <Label.Root className="capitalize text-sm font-medium" htmlFor="email">username</Label.Root>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                {/* Password input field */}
                <div className="space-y-2">
                    <Label.Root className="capitalize text-sm font-medium" htmlFor="password">Password</Label.Root>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                {/* Submit button */}
                <Button color="lime" highContrast size="3" type="submit" className="w-full py-2 rounded-md">
                    Sign In
                </Button>

                {/* Display messages */}
                {message && <Text className="text-center mt-2">{message}</Text>}
            </form>
        </div>

    );
}