'use client'

import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "react-image-gallery/styles/css/image-gallery.css";

// -- Theme Imports --
import {Text, Button, Link, Heading} from "@radix-ui/themes";
import AccordionDetails from "@/components/shop/Black-Hoodie/AccordionDetails";
import SplitText from "@/components/shop/Black-Hoodie/SplitText";

const ProductDetail = () => {
    const productDetailItem = {
        images: [
            {
                original:
                    "/hoodie.png",
                thumbnail:
                    "/hoodie.png",
            },
            {
                original:
                    "/Hoodie-1.png",
                thumbnail:
                    "/Hoodie-1.png",
            },
            {
                original:
                    "/Hoodie-2.png",
                thumbnail:
                    "/Hoodie-2.png",
            }
        ],
        title: "ORIGINAL New Bold Inc. BLACK HOODIE",
        reviews: "150",
        availability: true,
        /*brand: "New Bold Inc.",
        category: "Clothing",*/
        sku: "HOO1234",
        /*price: 45,*/
        /*previousPrice: 599,*/
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
        size: ["XS", "S", "M", "L", "XL"],
        /*color: ["gray", "violet", "red"],*/
    };

    const plusMinuceButton =
        "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
    return (
        <>
        <section className="flex-grow mx-auto py-5 lg:grid lg:grid-cols-2 lg:py-10">
            {/* image gallery */}
            <div className="mx-auto px-4 dark:bg-gray-200 lg:px-5 lg:col-span-1">
                <ImageGallery
                    showBullets={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    items={productDetailItem.images}
                />

                {/* image gallery end */}
            </div>

            {/* description  */}
            <div className="mx-auto px-5 lg:px-5">
                <h2 className="pt-3 text-2xl font-bold lg:pt-0">
                    {productDetailItem.title}
                </h2>
                <div className="mt-1">
                    <div className="flex items-center">
                        <Rater
                            style={{ fontSize: "20px" }}
                            total={5}
                            interactive={false}
                            rating={3.5}
                        />

                        <p className="ml-3 text-sm text-gray-400">
                            ({productDetailItem.reviews})
                        </p>
                    </div>
                </div>
                <p className="mt-5 font-bold">
                    Availability:{" "}
                    {productDetailItem.availability ? (
                        <span className="text-green-600">In Stock </span>
                    ) : (
                        <span className="text-red-600">Out of Stock</span>
                    )}
                </p>
                {/*<p className="font-bold">
                    Brand: <span className="font-normal">{productDetailItem.brand}</span>
                </p>
                <p className="font-bold">
                    Category: {" "}
                    <span className="font-normal">{productDetailItem.category}</span>
                </p>*/}
                <Text className="font-bold" color="lime" highContrast>
                    SKU: <span className="font-normal">{productDetailItem.sku}</span>
                </Text>
                <Text className="flex mt-4 mb-4 font-bold" color="lime" highContrast size="8">
                    £{productDetailItem.price}{".00"}
                    <span className="text-xs text-gray-400 line-through">
                        {/*${productDetailItem.previousPrice}*/}
                    </span>
                </Text>

                {/* -- description */ }
                <Text color="gray" highContrast size="3">
                    {productDetailItem.description}
                </Text>
                {/* -- end */}

                <div className="mt-6">
                    <p className="pb-2 text-xs text-gray-500">Size</p>
                    <div className="flex gap-1">
                        {productDetailItem.size.map((x, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                >
                                    {x}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/*<div className="mt-6">
                    <p className="pb-2 text-xs text-gray-500">Color</p>
                    <div className="flex gap-1">
                        {productDetailItem.color.map((color, index) => {
                            const colorClasses = {
                                gray: "bg-gray-600 focus:ring-gray-500 active:ring-gray-500",
                                violet: "bg-violet-600 focus:ring-violet-500 active:ring-violet-500",
                                red: "bg-red-600 focus:ring-red-500 active:ring-red-500"
                            };
                            
                            return (
                                <div
                                    key={index}
                                    className={`h-8 w-8 cursor-pointer border border-white ${colorClasses[color as keyof typeof colorClasses]} focus:ring-2 active:ring-2`}
                                />
                            );
                        })}
                    </div>
                </div>*/}
                <div className="mt-6">
                    <p className="pb-2 text-xs text-gray-500">Quantity</p>
                    <div className="flex">
                        <button className={`${plusMinuceButton}`}>−</button>
                        <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                            1
                        </div>
                        <button className={`${plusMinuceButton}`}> +</button>
                    </div>
                </div>
                <div className="mt-7 flex flex-row items-center gap-3">
                    <Link>
                        <Button color="lime" highContrast size="4" disabled={!productDetailItem.availability}>
                            <FaShoppingCart />
                            Add to cart
                        </Button>
                    </Link>
                        <Button className="flex items-center justify-center" color="gray" highContrast size="4" disabled={!productDetailItem.availability}>
                            <AiOutlineHeart className="mx-2" />
                            Wishlist
                        </Button>
                    </div>

                {/*Accordion section*/}
                <div className="mt-10">
                    <AccordionDetails />
                </div>
                {/*end*/}

                </div>
            </section>

            <section>
                <div className="flex flex-col items-center justify-center">
                    <SplitText />
                </div>
            </section>

            {/*-- Related Products Section --*/}
            {/*<section className="flex-grow mx-auto border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
                <div className="mx-auto px-4 dark:bg-gray-200 lg:px-5 lg:col-span-1">
                    <h2 className="pt-3 text-2xl font-bold lg:pt-0">
                        Related Products
                    </h2>
                    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-48 w-full object-cover"
                                    src="/hoodie.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}
            {/*-- end --*/}

        </>
    );
};

export default ProductDetail;