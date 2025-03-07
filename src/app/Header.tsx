'use client'
import { motion } from 'framer-motion';
import Typical from 'react-typical';

export default function Header() {
    return (
        <div>
            {/* Animated Logo */}
            <motion.img
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                src="/logo-new.svg"
                alt="Two Good Co. Logo"
                className="absolute top-4 left-4 w-[100px] h-[100px] dark:bg-white"
            />

            {/* Animated Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-[50px] uppercase xs:text-[10rem] sm:text-[8rem] md:text-[4rem] lg:text-[6rem] xl:text-[6rem] 2xl:text-[10rem] text-gray-bold font-bold tracking-[-0.03em] leading-none"
            >
                <Typical
                    steps={[
                        'R', 100, 'Re', 200, 'Red', 100, 'Rede', 100, 'Redef', 100, 'Redefi', 100, 'Redefin', 100, 'Redefine', 100,
                        'Redefine ', 100, 'Redefine t', 100, 'Redefine th', 100, 'Redefine the', 100, 'Redefine the ', 100,
                        'Redefine the w', 100, 'Redefine the wa', 100, 'Redefine the way', 1000
                    ]}
                    loop={Infinity}
                    wrapper="span"
                />
            </motion.h1>
        </div>
    );
}
