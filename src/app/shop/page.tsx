'use client';

import { useEffect, useState } from 'react';
import ShopLatest from "@/components/custom/ShopLatest";  // Import Shop page components
import ShopBanner from "@/components/custom/ShopBanner";  // Import Shop page components
import ShopProductGrid from "@/components/custom/ShopProductGrid";    // Import Shop page components
import { Swiper, SwiperSlide } from "swiper/react";     // Import required Swiper modules
import { Pagination, Navigation } from 'swiper/modules';    // Import required Swiper modules
import {Button, Heading, Text, Link} from '@radix-ui/themes';  // Import Radix UI

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
                const res = await fetch('/api/products');   // Send a GET request to the '/api/products' endpoint

                if (res.ok) {   // Check if the response status is OK (200-299)
                    const data = await res.json();  // Parse the response JSON data

                    setProducts(data);  // Update the state with the fetched products
                } else {
                    console.error('Failed to fetch products');  // Log an error if the request was unsuccessful
                }
            } catch (error) {
                console.error('Error fetching products:', error);   // Handle and log any network or unexpected errors
            } finally {
                setLoading(false);  // Ensure that the loading state is set to false once the request completes
            }
        };

        // Call the fetchProducts function immediately when the component mounts
        fetchProducts();
        }, []); // Empty dependency array ensures this runs only once on mount

    // Display a loading message while products are being fetched
    if (loading) {
        return <div>Loading products...</div>;
    }

    return (
        <>
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
                        <div className="p-12">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="mb-4 w-full h-auto object-cover dark:bg-white rounded-xl"
                            />
                            <Link href={`/shop/product/${product.name}`}>
                                <Heading color="gray" size="4" className="uppercase text-center font-bold tracking-tight mt-4">{product.name}</Heading>
                            </Link>
                            {/*<p className="text-gray-600">{product.description}</p>*/}
                            <Text as="span" size="4" color="gray" className="flex justify-center tracking-tight">£{product.price}</Text>
                            {/*<p className="text-sm text-gray-500">Stock: {product.stock}</p>*/}
                            <div className="buy-now-btn flex justify-center mt-6">
                                <Button size="4" highContrast>Shop now</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            <ShopBanner />
            <ShopProductGrid />
        </>
    );
}
