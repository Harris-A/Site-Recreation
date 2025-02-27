"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"; // Import Framer Motion
import Lenis from 'lenis';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "./globals.css";

// Import required swiper modules
import {Pagination, Mousewheel, Autoplay} from "swiper/modules";

export default function Testimonials() {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const testimonialRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log('effect')
        const scroller = new Lenis({
            smoothWheel: true,
            smoothTouch: true, // Adjust for mobile behavior
        });

        function raf(time: number) {
            scroller.raf(time);
            requestAnimationFrame(raf);
        }

        const rafId = requestAnimationFrame(raf);
        setLenis(scroller);

        return () => {
            cancelAnimationFrame(rafId);
            scroller.destroy();
        };
    }, []);

    // **Pause Lenis when hovering over Swiper**
    useEffect(() => {
        const swiperContainer = testimonialRef.current;
        if (!swiperContainer || !lenis) return;

        const handleMouseEnter = () => lenis.stop();
        const handleMouseLeave = () => lenis.start();

        swiperContainer.addEventListener('mouseenter', handleMouseEnter);
        swiperContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            swiperContainer.removeEventListener('mouseenter', handleMouseEnter);
            swiperContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [lenis]);

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
        <div ref={testimonialRef} className="testimonial-container mt-16 flex flex-col items-center justify-center">
            <motion.h1
                className="text-gray-900 uppercase dark:text-white text-lg md:text-2xl border-b-2 border-black dark:border-white mt-16 mb-6 pb-2"
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
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                mousewheel={{ forceToAxis: true, releaseOnEdges: false }}
                pagination={{ clickable: false }}
                modules={[Pagination, Mousewheel, Autoplay]}
                className="mySwiper flex items-center justify-center md:w-3/6 h-[40vh] md:h-[20vh] bg-white dark:bg-black overflow-hidden"
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
                            <h2 className="md:text-4xl font-semibold text-gray-900 dark:text-white uppercase flex items-center justify-center">
                                "{testimonial.text}"
                            </h2>
                            <h3 className="text-center font-bold text-gray-400 mt-3">
                                - {testimonial.author}
                            </h3>
                        </motion.div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
