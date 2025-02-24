import React from 'react';
import { useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import './globals.css';

// Import required modules
import { Pagination, Mousewheel } from 'swiper/modules';

export default function Testimonials() {

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const preventScroll = (e: WheelEvent) => {
            e.preventDefault()
        }

        container.addEventListener("wheel", preventScroll, { passive: false })

        return () => {
            container.removeEventListener("wheel", preventScroll)
        }
    }, [])


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
        <div className="testimonial-container mt-6">
            <h1 className="text-gray-900 uppercase dark:text-white text-lg md:text-lg border-b-2 border-black dark:border-white mb-6 pb-2">
                Words of Goodness ...
            </h1>
            <Swiper
                direction="vertical"
                slidesPerView={'auto'}
                spaceBetween={30}
                mousewheel={{forceToAxis: true, releaseOnEdges: false}}
                pagination={{clickable: false}}
                modules={[Pagination, Mousewheel]}
                className="mySwiper flex items-center justify-center md:w-3/6 h-[40vh] md:h-[40vh] bg-white dark:bg-black overflow-hidden"
                onWheel={(e) => e.stopPropagation()} // Stops the event from scrolling the page
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="testimonial-slide p-6">
                        <h2 className="text-6xl md:text-4xl font-semibold text-gray-900 dark:text-white uppercase flex items-center justify-center">
                            "{testimonial.text}"
                        </h2>
                        <h3 className="text-center font-bold text-gray-400">
                            - {testimonial.author}
                        </h3>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/*mouse scroller icon*/}
                <div className="scroll-downs">
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
            </div>
        </div>
    );
}
