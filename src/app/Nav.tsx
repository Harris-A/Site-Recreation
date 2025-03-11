'use client'

import { Cross as Hamburger } from 'hamburger-react'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "@radix-ui/themes";

export default function Nav() {
    const [isOpen, setOpen] = useState(false);

    // Prevent background scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        // Cleanup on unmount
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    return (
        <div className="absolute top-1.5 right-20">
            {/* Always Render the Hamburger Icon */}
            <Hamburger toggled={isOpen} toggle={setOpen} />

            {/* Slide-in Menu */}
            {isOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed top-0 right-0 w-full h-fit bg-white dark:bg-black z-40"
                >
                    <div className="flex justify-center min-h-screen relative">
                        {/* Close Button */}
                        <div className="absolute top-1.5 right-20 z-50">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>

                        {/* Logo */}
                        <div className="nav-logo">
                            <img
                                src="/logo-new.svg"
                                alt="new bold inc. logo"
                                className="absolute top-4 left-4 w-[100px] h-[100px] dark:bg-white"
                            />
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col items-center justify-center gap-8 uppercase">
                            <Link href="/shop" size="9" underline="none" color="gray" className="hover:text-black hover:border-b-2 hover:border-black dark:hover:text-white ">Shop</Link>
                            <Link href="#" size="9" underline="none" color="gray" className="hover:text-black dark:hover:text-white">About</Link>
                            <Link href="#" size="9" underline="none" color="gray" className="hover:text-black dark:hover:text-white">Contact</Link>
                            <Link href="#" size="9" underline="none" color="gray" className="hover:text-black dark:hover:text-white">Account</Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
