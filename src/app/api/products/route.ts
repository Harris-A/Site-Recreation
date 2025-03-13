import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        // Fetch products from the database
        const products = await prisma.products.findMany();

        return new Response(JSON.stringify(products), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        return new Response('Failed to fetch products', { status: 500 });
    }
}
