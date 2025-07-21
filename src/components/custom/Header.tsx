'use client'

import { motion } from 'framer-motion';
import { Link } from "@radix-ui/themes";
import Cart from "@/components/cart/cart";
export default function Header() {
    return (
        <>
            <header className="w-full px-4 py-3 flex items-center justify-between">
                <div>
                {/* Animated Logo with link */}
                <Link href="/">
                    <motion.img
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    src="/logo-new.svg"
                    alt="New Bold Inc. Logo"
                    className="absolute top-4 left-4 w-[100px] h-[100px] dark:bg-white"
                    />
                </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Cart />
                </div>
            </header>
        </>
    );
}
