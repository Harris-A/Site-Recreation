"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";

export default function Cart() {
    const { cart } = useCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart absolute top-2 right-20 w-10 h-10 flex justify-center items-center">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
                    {totalItems}
                </span>
            )}
        </div>
    );
}
