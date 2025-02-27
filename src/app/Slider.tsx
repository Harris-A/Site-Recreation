import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Button } from "@radix-ui/themes";

//import swiper default css
import 'swiper/css';
import 'swiper/css/pagination';

//import project globals css
import './globals.css';

//import require swiper module
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import {motion} from "framer-motion";

export default function Slider () {
    return (
        <>
                <motion.h1
                    className="text-gray-900 uppercase dark:text-white text-lg md:text-2xl border-b-2 border-black dark:border-white mb-6 pb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                SHOP
                </motion.h1>

            <Swiper
                slidesPerView={"auto"}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                speed={1000}
                fadeEffect={{crossFade: true}}
                effect="fade"
                freeMode={true}
                breakpoints={{
                    640: { slidesPerView: 2 }, // 1 slides on medium screens
                    1024: { slidesPerView: 3 } // 2 slides on large screens
                }}
                spaceBetween={350}
                modules={[Autoplay]}
                className="image-slider"
                >
                <SwiperSlide className="swiper-slide">
                    <Image src="/slider-img-1.png" alt="slider1" width="500" height="500" className="object-cover dark:bg-white"/>
                    <div className="flex justify-center items-center gap-3">
                        <h3 className="price dark:text-white ">£50.00</h3>
                        <Button variant="solid">Buy Now</Button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <Image src="/slider-img-2.png" alt="slider2" width="500" height="500" className="object-cover dark:bg-white" />
                    <div className="flex justify-center items-center gap-3">
                        <h3 className="price dark:text-white">£190.00</h3>
                        <Button variant="solid">Buy Now</Button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                        <Image src="/slider-img-3.png" alt="slider3" width="500" height="500" className="object-cover dark:bg-white"/>
                        <div className="flex justify-center items-center gap-3">
                            <h3 className="price dark:text-white">£45.00</h3>
                            <Button variant="solid">Buy Now</Button>
                        </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <Image src="/slider-img-4.png" alt="slider4" width="500" height="500" className="object-cover dark:bg-white"/>
                    <div className="flex justify-center items-center gap-3">
                        <h3 className="price dark:text-white">£59.00</h3>
                        <Button variant="solid">Buy Now</Button>
                    </div>
                </SwiperSlide>

            {/*<SwiperSlide className="text-center text-lg bg-white flex justify-center items-center w-80">Slide 2</SwiperSlide>
            <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center w-80">Slide 3</SwiperSlide>*/}
            </Swiper>
        </>
    );
}