import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.category.createMany({
            data: [
                {
                    name: 'Main Collection',
                    description: 'This is the main collection category',
                },
                {
                    name: 'Latest Collection',
                    description: 'This is the latest collection category',
                }
            ],
        });

        console.log('Categories created!');
    } catch (error) {
        console.error('Error creating categories:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

// Execute the function
main();
