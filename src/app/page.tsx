// -- Site recreation - https://twogood.com.au/ --

import HeaderImage from "@/components/custom/HeaderImage";
import AdvertSection from "@/components/custom/AdvertSection";
import Testimonials from "@/components/custom/Testimonials";
import Slider from "@/components/custom/Slider";

export default function Home() {
    return (
        <>
            <div className="hero-section min-h-screen text-black dark:text-[#f6fef4b0] transition-colors duration-300 px-4 sm:px-8 md:px-16">
                <div className="mt-16 flex flex-col items-center">
                    <HeaderImage />
                </div>
            </div>

            <div className="mt-16 flex flex-col items-center">
                <AdvertSection />
            </div>

            <div className="testimonials mt-16">
                <Testimonials />
            </div>

            <div className="slider">
                <Slider />
            </div>
        </>
    );
}
