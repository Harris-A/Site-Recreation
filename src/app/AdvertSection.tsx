'use client'

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Animation library

const products = [
    {
        src: "/1.png",
        alt: "Gifts for Good",
        label: "GIFTS FOR GOOD", // Text on the floating button
        bgColor: "bg-yellow-200 dark:bg-yellow-600 dark:text-white", // Tailwind class for bg colour on button
    },
    {
        src: "/2.png",
        alt: "Alémais Collection",
        label: "ALÉMAIS", // Text on the floating button
        bgColor: "bg-blue-300 dark:bg-blue-600 dark:text-white",
    },
    {
        src: "/3.png",
        alt: "Soaps for Hope",
        label: "SOAPS FOR HOPE", // Text on the floating button
        bgColor: "bg-gray-200 dark:bg-gray-600 dark:text-white",
    },
];

const ProductGrid = () => {
    return (
        // Grid container: Responsive layout using Tailwind's grid system
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16">
            {products.map((product, index) => (
                <motion.div
                    key={index}
                    className="relative group overflow-hidden"
                    initial={{ opacity: 0, y: 50 }} // Start position (hidden & lower)
                    whileInView={{ opacity: 1, y: 0 }} // Animate to visible
                    transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered delay
                    viewport={{ once: true }} // Trigger only once when scrolled into view
                >
                    {/* Animated Image */}
                    <Image
                        src={product.src}
                        alt={product.alt}
                        width={500}
                        height={700}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-500 ease-in-out"
                    />

                    {/* Floating Button */}
                    <motion.div
                        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-sm font-semibold text-black ${product.bgColor}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                    >
                        SHOP {product.label}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default ProductGrid;
