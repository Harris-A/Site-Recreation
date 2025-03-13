'use client';

import { useEffect, useState } from 'react';
import ShopLatest from "@/app/ShopLatest";
import { Swiper, SwiperSlide } from "swiper/react";

// Import required Swiper modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Heading} from "@radix-ui/themes";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
}

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/api/products');
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data);
                } else {
                    console.error('Failed to fetch products');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    return (
        <>
            <h1 className="shop-heading px-16 uppercase text-[15rem] leading-none font-extrabold tracking-tighter">discover the best</h1>

            <ShopLatest />

            {/* Global Swiper for all products */}
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                /*pagination={{ type: "bullets" }}*/
                navigation={true}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    0: { slidesPerView: 1.5 },
                    576: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2.5 }, // 2.5 slides on medium screens
                    1024: { slidesPerView: 3.5 } // 3.5 slides on large screens
                }}
                className="shop-latest-swiper"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="rounded-lg shadow-lg p-12">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="mb-4 w-full h-auto object-cover rounded-xl"
                            />
                            <h2 className="text-lg font-bold tracking-tight mt-4">{product.name}</h2>
                            {/*<p className="text-gray-600">{product.description}</p>*/}
                            <p className="text-lg mt-2 lg:mt-4">£{product.price}</p>
                            {/*<p className="text-sm text-gray-500">Stock: {product.stock}</p>*/}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            {products.map((product) => (
                <div className="grid grid-cols-3 gap-3 px-16 mt-16" key={product.id}>
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="rounded-xl shadow-lg p-12"
                    />
                    <h2 className="text-lg font-bold tracking-tight mt-4">{product.name}</h2>
                    <p className="text-lg mt-2 lg:mt-4">£{product.price}</p>
                </div>
            ))}



        </>
    );
}
