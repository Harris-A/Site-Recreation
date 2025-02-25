// -- Site recreation - https://twogood.com.au/ --

'use client'

import { useState, useEffect } from "react";
import Header from "./Header";
//import Image from "next/image";
import HeaderImage from "@/app/HeaderImage";
import AdvertSection from "@/app/AdvertSection";
import Footer from "@/app/Footer";
import Testimonials from "@/app/Testimonials";
import AnimatedCursor from "react-animated-cursor"

export default function Home() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <>
            <div className="App">
                <AnimatedCursor
                    innerSize={8}
                    outerSize={35}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={0}
                    hasBlendMode={true}
                    innerStyle={{
                        backgroundColor: '#000'
                    }}
                    outerStyle={{
                        border: '3px solid #000'
                    }}
                />
            </div>
                <div
                    className="hero-section min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 px-4 sm:px-8 md:px-16">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="absolute top-4 right-4 px-4 py-2 bg-gray-200 dark:bg-white dark:text-black rounded"
                    >
                        Toggle {theme === "light" ? "Dark" : "Light"} Mode
                    </button>

                    {/* First Section with Header */}
                    <div className="mt-16 flex">
                        <Header/>
                    </div>

                    {/* Second Section with Header Image */}
                    <div className="mt-16 flex flex-col items-center">
                        <HeaderImage/>
                    </div>

                    {/* Third Section with Advert Images */}
                    <div className="mt-16 flex flex-col items-center">
                        <AdvertSection/>
                    </div>

                    <div className="testimonials mt-16">
                        <Testimonials />
                    </div>

                    <div className="footer mt-16 flex items-center">
                        <Footer/>
                    </div>

                </div>
        </>
    );
}
