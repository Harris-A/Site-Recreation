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
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-10">
                {products.map((product) => (
                    <div className="p-12 rounded-xl" key={product.id}>
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="rounded-xl"
                        />
                        <Heading color="gray" size="5" className="uppercase text-lg text-center font-extraboldbold tracking-tight mt-4">{product.name}</Heading>
                        <Text as="span" color="gray" size="4" className="flex justify-center tracking-tight">£{product.price}</Text>
                        <div className="buy-now-btn flex justify-center mt-6">
                            <Button size="4" highContrast>Buy now</Button>
                        </div>
                    </div>
                ))}
            </div>
        )
}