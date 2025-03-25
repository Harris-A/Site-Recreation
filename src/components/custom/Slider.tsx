'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Button, Text} from "@radix-ui/themes";

//import swiper default css
import 'swiper/css';
import 'swiper'
    'css/pagination';
import '@radix-ui/colors';

//import project globals css
import '../../app/globals.css';

//import require swiper module
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import {motion} from "framer-motion";

export default function Slider () {
    return (
        <>
            <div className="slider-container flex flex-col items-center justify-center">
            <motion.h1
                className="uppercase text-lg md:text-4xl border-b-2 border-b-lime-700 mb-3 font-extrabold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            > Collection
            </motion.h1>
            </div>
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
                pagination={true}
                breakpoints={{
                    0: { slidesPerView: 1.5 },
                    576: { slidesPerView: 1.5 },
                    768: { slidesPerView: 3 }, // 2.5 slides on medium screens
                    1024: { slidesPerView: 3 } // 3.5 slides on large screens
                }}
                spaceBetween={30}
                modules={[Autoplay]}
                className="image-slider mt-16"
                >
                <SwiperSlide className="swiper-slide pb-16">
                    <Image src="/slider-img-1.png" alt="slider1" width="1000" height="1000" className="object-cover bg-white"/>
                    <div className="flex justify-center items-center gap-3">
                        <Text as="p" mt="3" size="5" weight="bold" color="gray">
                            £50.00
                        </Text>
                        <Button variant="solid" mt="3" size="4" highContrast>Buy Now</Button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <Image src="/colour-apron.png" alt="slider2" width="1000" height="1000" className="object-cover bg-white" />
                    <div className="flex justify-center items-center gap-3">
                        <Text as="p" mt="3" size="5" weight="bold" color="gray">
                            £190.00
                        </Text>
                        <Button variant="solid" mt="3" size="4" highContrast>Buy Now</Button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                        <Image src="/slider-img-3.png" alt="slider3" width="1000" height="1000" className="object-cover bg-white"/>
                        <div className="flex justify-center items-center gap-3">
                            <Text as="p" mt="3" size="5" weight="bold" color="gray">
                                £45.00
                            </Text>
                            <Button variant="solid" mt="3" size="4" highContrast>Buy Now</Button>
                        </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <Image src="/scented-candle.png" alt="slider4" width="1000" height="1000" className="object-cover bg-white"/>
                    <div className="flex justify-center items-center gap-3">
                        <Text as="p" mt="3" size="5" weight="bold" color="gray">
                            £55.00
                        </Text>
                        <Button variant="solid" mt="3" size="4" highContrast>Buy Now</Button>
                    </div>
                </SwiperSlide>

            {/*<SwiperSlide className="text-center text-lg bg-white flex justify-center items-center w-80">Slide 2</SwiperSlide>
            <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center w-80">Slide 3</SwiperSlide>*/}
            </Swiper>
        </>
    );
}