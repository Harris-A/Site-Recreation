'use client';

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const products = [
    {
        src: "/1.png",
        alt: "Gifts for Good",
        label: "GIFTS FOR GOOD",
        bgColor: "bg-yellow-200",
    },
    {
        src: "/2-new.png",
        alt: "Redefine the way book with apron",
        label: "THE ALEMIAS COLLECTION",
        bgColor: "bg-blue-300",
    },
    {
        src: "/3-new.png",
        alt: "Cleanse and nourish handwash",
        label: "BUBBLES OF CHANGE",
        bgColor: "bg-gray-200",
    },
];

const ProductGrid = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // Triggers when element enters & exits viewport
    });

    // Dynamic parallax effect for images
    const yTransform = useTransform(scrollYProgress, [0, 1], [-50, 50]); // Move up/down

    return (
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4 sm:px-8 md:px-16">
            {products.map((product, index) => (
                <motion.div
                    key={index}
                    className="relative group overflow-hidden"
                    style={{ y: yTransform }} // Apply scroll effect
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={product.src}
                        alt={product.alt}
                        width={400}
                        height={700}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 ease-in-out"
                    />

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
