"use client";

import Link from "next/link";
import { Label } from "radix-ui";
import { Button } from "@radix-ui/themes"

export function SignupForm() {
    return (
        <div className="w-full max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
            <form>
                <div className="mb-6">
                    <h2 className="text-3xl font-bold">Sign Up</h2>
                    <p className="text-gray-500">Enter your details to create a new account</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">

                        {/* Email input field */}
                        <Label.Root className="text-sm font-medium" htmlFor="email">
                            Email
                        </Label.Root>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email@example.co.uk, email@example.com"
                            className="w-full p-2 border rounded-md"
                        />

                        {/* Firstname input field */}
                        <Label.Root className="text-sm font-medium" htmlFor="firstname">
                            First Name
                        </Label.Root>
                        <input
                            id="firstname"
                            name="firstname"
                            type="text"
                            placeholder="Enter First Name"
                            className="w-full p-2 border rounded-md"
                        />

                        {/* Lastname input field */}
                        <Label.Root className="text-sm font-medium" htmlFor="lastname">
                            Surname
                        </Label.Root>
                        <input
                            id="lastname"
                            name="lastname"
                            type="text"
                            placeholder="Enter Surname"
                            className="w-full p-2 border rounded-md"
                        />

                        {/* username input field */}
                        <Label.Root className="text-sm font-medium" htmlFor="username">
                            Username
                        </Label.Root>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Enter Username"
                            className="w-full p-2 border rounded-md"
                        />

                        {/* Password input field */}
                        <Label.Root className="text-sm font-medium" htmlFor="password">
                            Password
                        </Label.Root>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <Button size="3" color="lime" highContrast>Sign Up</Button>
                </div>
            </form>
        </div>
    );
}
