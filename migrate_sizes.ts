import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting migration...');

    // 1. Migrate TireSizes
    const tireSizes = await prisma.tireSize.findMany();
    console.log(`Found ${tireSizes.length} tire sizes.`);

    for (const ts of tireSizes) {
        let size = await prisma.productSize.findFirst({
            where: { value: ts.size, type: 'tyre' }
        });

        if (!size) {
            size = await prisma.productSize.create({
                data: { value: ts.size, type: 'tyre' }
            });
            console.log(`Created ProductSize (tyre): ${ts.size}`);
        }

        // Link products
        const products = await prisma.product.findMany({
            where: { tireSizeId: ts.id }
        });

        for (const p of products) {
            await prisma.product.update({
                where: { id: p.id },
                data: { sizeId: size.id }
            });
        }
        console.log(`Updated ${products.length} products for tire size ${ts.size}`);
    }

    // 2. Migrate RimSizes
    const rimSizes = await prisma.rimSize.findMany();
    console.log(`Found ${rimSizes.length} rim sizes.`);

    for (const rs of rimSizes) {
        let size = await prisma.productSize.findFirst({
            where: { value: rs.size, type: 'rim' }
        });

        if (!size) {
            size = await prisma.productSize.create({
                data: { value: rs.size, type: 'rim' }
            });
            console.log(`Created ProductSize (rim): ${rs.size}`);
        }

        // Link products
        const products = await prisma.product.findMany({
            where: { rimSizeId: rs.id }
        });

        for (const p of products) {
            await prisma.product.update({
                where: { id: p.id },
                data: { sizeId: size.id }
            });
        }
        console.log(`Updated ${products.length} products for rim size ${rs.size}`);
    }

    console.log('Migration completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
