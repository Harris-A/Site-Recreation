import React, { useEffect, useRef, useState } from "react";
import { Heading } from "@radix-ui/themes"

function Scroller() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [progress, setProgress] = useState(0);
    const text = "Every purchase you make has the power to positively impact someone's life.";
    const totalTextLength = text.split(" ").length;

    useEffect(() => {
        function handleScroll() {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Start animation as soon as the section enters the viewport
            const start = windowHeight * 0.2; // Adjust this to control when animation starts
            const end = rect.height;

            // Calculate how much of the section has been scrolled
            const scrolled = Math.min(Math.max(0, windowHeight - rect.top), end);
            const progressValue = scrolled / end;

            setProgress(progressValue);
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initialize progress on mount

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full h-[100vh] md:bg-fixed bg-center bg-cover px-16 flex items-center justify-center"
            style={{
                backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/ShopBanner.png')",
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="top-[50%] translate-y-[-50%] bg-black p-4">
                {text.split(" ").map((word, index) => {
                    const textThreshold = (index + 1) / totalTextLength;
                    const opacity = progress >= textThreshold ? 1 : 0.2;

                    return (
                        <Heading
                            key={`${word}-${index}`}
                            className="transition-opacity duration-500 inline-block text-white font-extrabold tracking-tight uppercase px-1 lin"
                            style={{ opacity }}
                            size="8"
                        >
                            {word}
                        </Heading>
                    );
                })}
            </div>
        </section>
    );
}

export default Scroller;
