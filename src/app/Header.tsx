'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';
import Lenis from 'lenis';

export default function Header() {
    const [lenisRef, setLens] = useState(null);
    const [rafState, setRaf] = useState(null);

    useEffect(() => {
        const scroller = new Lenis();

        function raf(time: number) {
            scroller.raf(time);
            requestAnimationFrame(raf);
        }

        const rafId = requestAnimationFrame(raf);
        // @ts-ignore
        setRaf(rafId);
        // @ts-ignore
        setLens(scroller);

        return () => {
            if (scroller) {
                cancelAnimationFrame(rafId);
                scroller.destroy();
            }
        };
    }, []);

    return (
        <div className="mt-12 flex flex-row">
            {/* Animated Logo */}
            <motion.img
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                src="/logo.svg"
                alt="Two Good Co. Logo"
                className="absolute top-4 left-4 w-[100px] h-[100px]"
            />

            {/* Animated Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-[50px] uppercase xs:text-[10rem] sm:text-[8rem] md:text-[15rem] lg:text-[18rem] xl:text-[22rem] 2xl:text-[10rem] text-gray-bold dark:text-white font-bold tracking-[-0.03em] leading-none"
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
