'use client'

import { motion } from 'framer-motion';
import { Link } from "@radix-ui/themes";
export default function Header() {
    return (
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
    );
}
