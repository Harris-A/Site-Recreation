"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"; // Import Framer Motion

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "./globals.css";

// Import required modules
import { Pagination, Mousewheel } from "swiper/modules";

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const preventScroll = (e: WheelEvent) => {
            e.preventDefault();
        };

        container.addEventListener("wheel", preventScroll, { passive: false });

        return () => {
            container.removeEventListener("wheel", preventScroll);
        };
    }, []);

    const testimonials = [
        {
            id: 1,
            text: "Absolutely fantastic Service!",
            author: "Sarah H",
        },
        {
            id: 2,
            text: "High Quality. I’m very happy with my products",
            author: "James R",
        },
        {
            id: 3,
            text: "The customer support team is incredible. They solved my issue within minutes!",
            author: "John Doe",
        },
    ];

    return (
        <div className="testimonial-container mt-6 flex flex-col items-center justify-center">
            <motion.h1
                className="text-gray-900 uppercase dark:text-white text-lg md:text-lg border-b-2 border-black dark:border-white mb-6 pb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Words of Goodness
            </motion.h1>

            <Swiper
                direction="vertical"
                slidesPerView={"auto"}
                spaceBetween={30}
                mousewheel={{ forceToAxis: true, releaseOnEdges: false }}
                pagination={{ clickable: false }}
                modules={[Pagination, Mousewheel]}
                className="mySwiper flex items-center justify-center md:w-3/6 h-[40vh] md:h-[40vh] bg-white dark:bg-black overflow-hidden"
                onWheel={(e) => e.stopPropagation()} // Stops page scroll
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={testimonial.id} className="testimonial-slide p-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                            className="text-center"
                        >
                            <h2 className="text-6xl md:text-4xl font-semibold text-gray-900 dark:text-white uppercase flex items-center justify-center">
                                "{testimonial.text}"
                            </h2>
                            <h3 className="text-center font-bold text-gray-400 mt-3">
                                - {testimonial.author}
                            </h3>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Mouse Scroller Animation */}
            <motion.div
                className="scroll-downs mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
                <div className="mousey border-2 border-gray-700 dark:border-white w-6 h-10 flex items-center justify-center rounded-full">
                    <motion.div
                        className="scroller w-2 h-2 bg-gray-700 dark:bg-white rounded-full"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </div>
    );
}
