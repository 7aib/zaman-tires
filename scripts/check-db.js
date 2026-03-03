const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
    try {
        console.log('Environment DATABASE_URL:', process.env.DATABASE_URL);
        const brands = await prisma.brand.findMany();
        console.log('Success! Found brands:', brands.length);
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

check();
