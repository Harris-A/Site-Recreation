// -- Site recreation - https://twogood.com.au/ --

'use client'

import Header from "./Header";
import HeaderImage from "@/app/HeaderImage";
import AdvertSection from "@/app/AdvertSection";
import Footer from "@/app/Footer";
import Testimonials from "@/app/Testimonials";
//import AnimatedCursor from "react-animated-cursor"
import Slider from "@/app/Slider";

export default function Home() {
    return (
                <div
                    className="hero-section min-h-screen bg-white dark:bg-[#191919] text-black dark:text-[#f6fef4b0] transition-colors duration-300 px-4 sm:px-8 md:px-16">

                    {/* First Section with Header */}
                    <div className="flex">
                        <Header />
                    </div>

                    {/* Second Section with Header Image */}
                    <div className="mt-16 flex flex-col items-center">
                        <HeaderImage />
                    </div>

                    {/* Third Section with Advert Images */}
                    <div className="mt-16 flex flex-col items-center">
                        <AdvertSection />
                    </div>

                    <div className="testimonials mt-16">
                        <Testimonials />
                    </div>

                    <div className="slider">
                        <Slider />
                    </div>

                    <div className="footer mt-16 flex items-center">
                        <Footer />
                    </div>

                </div>
    );
}
