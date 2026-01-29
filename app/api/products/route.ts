import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        brand: true,
        diameter: true,
      },
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verify admin token
    const token = request.cookies.get('adminToken')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const {
      name, type, price, description, quantity, imageUrl, isActive,
      brand, diameter, // Relations
      rimWidth, tireProfile // Specifics
    } = await request.json();

    // Validate required fields
    if (!name || !type || !brand || !diameter || !price || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 1. Resolve Brand (ID)
    let brandRecord = await prisma.brand.findUnique({
      where: { id: brand }
    });

    if (!brandRecord) {
      return NextResponse.json({ error: 'Invalid brand' }, { status: 400 });
    }

    // 2. Resolve Diameter (Value)
    const diameterValue = parseInt(diameter);
    const diameterRecord = await prisma.diameter.findUnique({
      where: { value: diameterValue }
    });

    if (!diameterRecord) {
      return NextResponse.json({ error: 'Invalid diameter' }, { status: 400 });
    }

    // Create new product
    const newProduct = await prisma.product.create({
      data: {
        name,
        type,
        price: parseFloat(price),
        description,
        quantity: quantity ? parseInt(quantity) : 0,
        imageUrl,
        isActive: isActive !== undefined ? isActive : true,
        rimWidth: type === 'rim' ? rimWidth : null,
        tireProfile: type === 'tyre' ? tireProfile : null,
        brand: {
          connect: { id: brandRecord.id },
        },
        diameter: {
          connect: { id: diameterRecord.id },
        },
      },
      include: {
        brand: true,
        diameter: true,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  // Basic DELETE based on search params or ID? 
  // Usually DELETE is on [id] route.
  // We need to keep GET/POST here.
  return NextResponse.json({ error: 'Use /api/products/[id] for deletion' }, { status: 405 });
}
