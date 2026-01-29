import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // 1. Seed Diameters (12 to 24 inches)
    const diameters = Array.from({ length: 13 }, (_, i) => i + 12); // 12, 13, ... 24
    for (const d of diameters) {
        await prisma.diameter.upsert({
            where: { value: d },
            update: {},
            create: { value: d },
        });
        console.log(`created diameter: ${d}`);
    }

    // 2. Seed Brands
    const commonBrands = [
        { name: 'Michelin', type: 'tyre' },
        { name: 'Bridgestone', type: 'tyre' },
        { name: 'Yokohama', type: 'tyre' },
        { name: 'BBS', type: 'rim' },
        { name: 'Enkei', type: 'rim' },
        { name: 'Lenso', type: 'rim' },
        { name: 'Generic', type: 'both' },
    ];

    for (const b of commonBrands) {
        await prisma.brand.upsert({
            where: { name: b.name },
            update: { type: b.type },
            create: { name: b.name, type: b.type },
        });
        console.log(`created brand: ${b.name} (${b.type})`);
    }

    console.log('Seeding completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
