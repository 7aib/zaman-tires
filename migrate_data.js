const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function migrate() {
    const brands = await prisma.brand.findMany();
    const rimSizes = await prisma.rimSize.findMany();
    const products = await prisma.product.findMany();

    console.log(`Found ${products.length} products, ${brands.length} brands, ${rimSizes.length} rim sizes.`);

    for (const product of products) {
        let updateData = {};

        // 1. Link Brand
        const matchedBrand = brands.find(b => product.name.toLowerCase().includes(b.name.toLowerCase()));
        if (matchedBrand) {
            updateData.brandId = matchedBrand.id;
        }

        // 2. Link Size
        if (product.type === 'rim') {
            const match = product.name.match(/(\d+)\s*inch/i);
            if (match) {
                const sizeStr = `${match[1]} inches`;
                const matchedSize = rimSizes.find(s => s.size.toLowerCase() === sizeStr.toLowerCase());
                if (matchedSize) {
                    updateData.rimSizeId = matchedSize.id;
                }
            }
        } else if (product.type === 'tyre') {
            // For tyres, size is often in the description or name in a format like 205/65/15
            // But the seeded tyres don't seem to have sizes in their names in the dump.
            // I'll try to find any size string in the description.
            const sizeMatch = product.description.match(/(\d{3}\/\d{2}\/\d{2})/);
            if (sizeMatch) {
                const sizeStr = sizeMatch[1];
                let tireSize = await prisma.tireSize.findUnique({ where: { size: sizeStr } });
                if (!tireSize) {
                    tireSize = await prisma.tireSize.create({ data: { size: sizeStr } });
                }
                updateData.tireSizeId = tireSize.id;
            }
        }

        if (Object.keys(updateData).length > 0) {
            await prisma.product.update({
                where: { id: product.id },
                data: updateData
            });
            console.log(`Updated product: ${product.name} -> ${JSON.stringify(updateData)}`);
        } else {
            console.log(`Could not match product: ${product.name}`);
        }
    }

    console.log('Migration completed.');
}

migrate()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
