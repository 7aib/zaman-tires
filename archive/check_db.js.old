const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
    const products = await prisma.product.findMany({
        include: {
            brand: true,
            tireSize: true,
            rimSize: true,
        }
    });
    console.log('Total Products:', products.length);
    console.log(JSON.stringify(products, null, 2));
}

check().finally(() => prisma.$disconnect());
