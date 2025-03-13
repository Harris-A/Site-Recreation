import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.products.createMany({
        data: [
            {
                id: 'a1b2c3d4-e5f6-7890-1234-56789abcdef0',
                name: 'Colour Apron',
                description: 'This is a sample product description.',
                price: 19.99,
                stock: 100,
                imageUrl: 'https://placehold.co/600x600?text=Image',
            },
            {
                id: 'b2c3d4e5-f6g7-8901-2345-67890abcdef1',
                name: 'Scented Candle',
                description: 'Another sample product.',
                price: 29.99,
                stock: 50,
                imageUrl: 'https://placehold.co/600x600?text=Image',
            },
            {
                id: '2b3c4d5e-aaaa-bbbb-cccc-ddddeeeeffff',
                name: 'Sample Product 3',
                description: 'A high-quality product for everyday use.',
                price: 39.99,
                stock: 75,
                imageUrl: 'https://via.placeholder.com/500',
            },
            {
                id: '3c4d5e6f-1234-5678-9101-112131415161',
                name: 'Sample Product 4',
                description: 'Limited edition product with premium features.',
                price: 49.99,
                stock: 25,
                imageUrl: 'https://via.placeholder.com/500',
            },
            {
                id: '4d5e6f7g-7890-6543-3210-098765432123',
                name: 'Sample Product 5',
                description: 'Eco-friendly and sustainable product choice.',
                price: 24.99,
                stock: 120,
                imageUrl: 'https://via.placeholder.com/500',
            },
            {
                id: '5e6f7g8h-abcd-efgh-ijkl-mnopqrstuvwx',
                name: 'Sample Product 6',
                description: 'A stylish and modern product for your collection.',
                price: 59.99,
                stock: 30,
                imageUrl: 'https://via.placeholder.com/500',
            },
            {
                id: '6f7g8h9i-qwer-tyui-opas-dfghjklzxcvb',
                name: 'Sample Product 7',
                description: 'Affordable and durable product for daily use.',
                price: 14.99,
                stock: 200,
                imageUrl: 'https://via.placeholder.com/500',
            },
        ],
    });

    console.log('Sample products added!');

    // Updating products (for example, adjusting the price of products with stock < 60)
    /*await prisma.products.updateMany({
        where: {
            id: {
               in: [
                   'b2c3d4e5-f6g7-8901-2345-67890abcdef1' // Update product(s) with specific ID
               ]
            },
        },
        data: {
            name: 'Scented Candle' // New Name
        },
    });

    console.log('Updated products');*/

}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
