const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const rimProducts = [
    // 12 inches
    {
        name: "12 inch Steel Rim",
        price: 2500,
        imageUrl: "static/15 inches/1.jpg",
        size: "12 inches",
        type: "rim",
        brand: "Generic"
    },
    {
        name: "12 inch Alloy Rim",
        price: 3500,
        imageUrl: "/images/rims/12-rim-2.jpg",
        size: "12 inches",
        type: "rim",
        brand: "Generic"
    },
    // 13 inches
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => ({
        name: `13 inch Alloy Rim - Design ${i}`,
        price: 62500,
        imageUrl: `static/13 inches/${i}.jpeg`,
        size: "13 inches",
        type: "rim",
        brand: "Generic"
    })),
    // 14 inches
    ...[1, 2, 3, 4].map((i) => ({
        name: `14 inch Alloy Rim - Design ${i}`,
        price: [62500, 64000, 66500, 70000][i - 1],
        imageUrl: `static/14 inches/${i}.jpeg`,
        size: "14 inches",
        type: "rim",
        brand: "Generic"
    })),
    {
        name: "14 inch Premium Rim - Design 5",
        price: 75000,
        imageUrl: "static/14 inches/5.jpeg",
        size: "14 inches",
        type: "rim",
        brand: "Generic"
    },
    // 15 inches
    ...[1, 2].map((i) => ({
        name: `15 inch Steel Rim - Design ${i}`,
        price: [62000, 65000][i - 1],
        imageUrl: `static/15 inches/${i}.jpeg`,
        size: "15 inches",
        type: "rim",
        brand: "Generic"
    })),
    ...[3, 4, 5].map((i) => ({
        name: `15 inch Alloy Rim - Design ${i}`,
        price: [68500, 72000, 75500][i - 3],
        imageUrl: `static/15 inches/${i}.jpeg`,
        size: "15 inches",
        type: "rim",
        brand: "Generic"
    })),
    ...[6, 7].map((i) => ({
        name: `15 inch Premium Rim - Design ${i}`,
        price: [80000, 85000][i - 6],
        imageUrl: `static/15 inches/${i}.jpeg`,
        size: "15 inches",
        type: "rim",
        brand: "Generic"
    })),
    // Larger Rims
    { name: "16 inch Alloy Rim", price: 5500, imageUrl: "/images/rims/16-rim-1.jpg", size: "16 inches", type: "rim", brand: "Generic" },
    { name: "17 inch Alloy Rim", price: 6500, imageUrl: "/images/rims/17-rim-1.jpg", size: "17 inches", type: "rim", brand: "Generic" },
    { name: "18 inch Alloy Rim", price: 7500, imageUrl: "/images/rims/18-rim-1.jpg", size: "18 inches", type: "rim", brand: "Generic" },
    { name: "19 inch Alloy Rim", price: 8500, imageUrl: "/images/rims/19-rim-1.jpg", size: "19 inches", type: "rim", brand: "Generic" },
    { name: "20 inch Alloy Rim", price: 9500, imageUrl: "/images/rims/20-rim-1.jpg", size: "20 inches", type: "rim", brand: "Generic" },
    { name: "21 inch Alloy Rim", price: 10500, imageUrl: "/images/rims/21-rim-1.jpg", size: "21 inches", type: "rim", brand: "Generic" },
];

const tireProducts = [
    { name: "TracMax Performance Tire", price: 7500, imageUrl: "/images/tires/tracmax-1.jpg", brand: "TracMax", type: "tyre", size: "Generic" },
    { name: "Rapid All Season", price: 6500, imageUrl: "/images/tires/rapid-1.jpg", brand: "Rapid", type: "tyre", size: "Generic" },
    { name: "Yokohama AVID", price: 9500, imageUrl: "/images/tires/yokohama-1.jpg", brand: "Yokohama", type: "tyre", size: "Generic" },
    { name: "Michelin Pilot Sport", price: 12500, imageUrl: "/images/tires/michelin-1.jpg", brand: "Michelin", type: "tyre", size: "Generic" },
    { name: "Michelin Defender", price: 8500, imageUrl: "/images/tires/michelin-2.jpg", brand: "Michelin", type: "tyre", size: "Generic" },
    { name: "Continental PureContact", price: 11500, imageUrl: "/images/tires/continental-1.jpg", brand: "Continental", type: "tyre", size: "Generic" },
    { name: "PowerTrac Premium", price: 8000, imageUrl: "/images/tires/powertrac-1.jpg", brand: "PowerTrac", type: "tyre", size: "Generic" },
    { name: "TransMate Commercial", price: 7800, imageUrl: "/images/tires/transmate-1.jpg", brand: "TransMate", type: "tyre", size: "Generic" },
    { name: "AutoGrip All Terrain", price: 7200, imageUrl: "/images/tires/autogrip-1.jpg", brand: "AutoGrip", type: "tyre", size: "Generic" },
    { name: "Altenzo Performance", price: 8500, imageUrl: "/images/tires/altenzo-1.jpg", brand: "Altenzo", type: "tyre", size: "Generic" },
    { name: "Winda Economy", price: 5500, imageUrl: "/images/tires/winda-1.jpg", brand: "Winda", type: "tyre", size: "Generic" },
    { name: "WindForce Catchfors", price: 6800, imageUrl: "/images/tires/windforce-1.jpg", brand: "WindForce", type: "tyre", size: "Generic" },
    { name: "Dunlop SP Sport", price: 10000, imageUrl: "/images/tires/dunlop-1.jpg", brand: "Dunlop", type: "tyre", size: "Generic" },
    { name: "BridgeStone Turanza", price: 10500, imageUrl: "/images/tires/bridgestone-1.jpg", brand: "BridgeStone", type: "tyre", size: "Generic" },
];

async function main() {
    console.log('Start seeding ...');

    const allProducts = [...rimProducts, ...tireProducts];

    for (const product of allProducts) {
        const existing = await prisma.product.findFirst({
            where: { name: product.name }
        });

        if (!existing) {
            const created = await prisma.product.create({
                data: {
                    ...product,
                    description: `High quality ${product.type} - ${product.name}`,
                    quantity: 10, // Default stock
                },
            });
            console.log(`Created product with id: ${created.id}`);
        } else {
            // Update existing to ensure imageUrl is set
            const updated = await prisma.product.update({
                where: { id: existing.id },
                data: {
                    imageUrl: product.imageUrl,
                    price: product.price // Update price just in case
                }
            });
            console.log(`Updated product with id: ${updated.id}`);
        }
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
