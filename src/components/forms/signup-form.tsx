"use client";   // Required for using state in Next.js App Router

import { useState } from "react";
import { Label } from "radix-ui";
import {Heading, Button, Text, Link} from "@radix-ui/themes";


export function SignupForm() {
    // State for form fields
    const [formData, setFormData] = useState({
        email: "",
        firstname: "",
        lastname: "",
        username: "",
        password: "",
    });

    // State for UI feedback
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Updates state when inputs change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handles form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        // Sends data to the API
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

    // Display front-end sign up form
    return (
        <div className="w-full max-w-md mx-auto p-6 border border-gray-200 bg-gray-50 dark:bg-black rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <Heading color="lime" size="7" className="capitalize font-bold">Create your account</Heading>
                    <Text as="p" color="gray">Enter your details to create an account</Text>
                </div>

                {error && <Text as="p" color="red" highContrast className="bg-red-100 dark:bg-red-800 p-4 mb-4">{error}</Text>}
                {success && <Text as="p" color="lime" highContrast className="bg-lime-100 dark:bg-lime-800 p-4 mb-4">{success}</Text>}

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label.Root className="text-sm font-medium" htmlFor="email">Email</Label.Root>
                        <input id="email" name="email" type="email" placeholder="email@example.com" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md" />
                    </div>

                    <div className="space-y-2">
                        <Label.Root className="text-sm font-medium" htmlFor="firstname">First Name</Label.Root>
                        <input id="firstname" name="firstname" type="text" placeholder="Enter First Name" value={formData.firstname} onChange={handleChange} className="w-full p-2 border rounded-md" />
                    </div>

                    <div className="space-y-2">
                        <Label.Root className="text-sm font-medium" htmlFor="lastname">Last Name</Label.Root>
                        <input id="lastname" name="lastname" type="text" placeholder="Enter Last Name" value={formData.lastname} onChange={handleChange} className="w-full p-2 border rounded-md" />
                    </div>

                    <div className="space-y-2">
                        <Label.Root className="text-sm font-medium" htmlFor="username">Username</Label.Root>
                        <input id="username" name="username" type="text" placeholder="Enter Username" value={formData.username} onChange={handleChange} className="w-full p-2 border rounded-md" />
                    </div>

                    <div className="space-y-2">
                        <Label.Root className="text-sm font-medium" htmlFor="password">Password</Label.Root>
                        <input id="password" name="password" type="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded-md" />
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-3">
                    <Button color="lime" highContrast size="3" type="submit" className="w-full py-2 rounded-md" disabled={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
                    </Button>
                    {/* Sign in link */}
                    <Link href="/signin">Already have an account? Sign in here</Link>
                </div>
            </form>
        </div>
    );
}
