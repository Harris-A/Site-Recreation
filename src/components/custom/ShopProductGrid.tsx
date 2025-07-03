import {useEffect, useState} from "react";
import {Button, Heading, Text} from "@radix-ui/themes";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
}

export default function ShopProductGrid() {
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-5">
                {products.map((product) => (
                    <div className="p-12 rounded-xl" key={product.id}>
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="rounded-xl dark:bg-white w-full h-auto object-cover"
                        />
                        <Heading color="gray" size="4" className="text-md text-center font-medium tracking-tight mt-4">{product.name}</Heading>
                        <Text as="span" color="gray" size="3" className="flex justify-center tracking-tight">£{product.price}</Text>
                        <div className="buy-now-btn flex justify-center mt-6">
                            <Button size="3" highContrast>Shop now</Button>
                        </div>
                    </div>
                ))}
            </div>
        )
}