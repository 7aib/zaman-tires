import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

function verifyToken(token: string): { username: string; role: string } | null {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [data, hmac] = decoded.split('.');

    if (!data || !hmac) return null;

    const tokenData = JSON.parse(data);
    const expectedHmac = crypto
      .createHmac('sha256', JWT_SECRET)
      .update(data)
      .digest('hex');

    if (hmac !== expectedHmac) return null;
    if (tokenData.exp < Date.now()) return null;

    return { username: tokenData.username, role: tokenData.role };
  } catch (error) {
    return null;
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verify admin token
    const token = request.cookies.get('adminToken')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = params;
    const {
      name,
      type,
      price,
      description,
      quantity,
      imageUrl,
      isActive,
      brand, // Brand ID
      diameter, // Diameter value (e.g. 17)
      rimWidth,
      tireProfile
    } = await request.json();

    // Check if product exists first
    const existingProduct = await prisma.product.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // 1. Resolve Brand (if provided)
    let brandConnect = undefined;
    if (brand) {
      const brandRecord = await prisma.brand.findUnique({
        where: { id: brand }
      });
      if (brandRecord) {
        brandConnect = { connect: { id: brandRecord.id } };
      }
    }

    // 2. Resolve Diameter (if provided)
    let diameterConnect = undefined;
    if (diameter) {
      const diameterValue = parseInt(diameter);
      const diameterRecord = await prisma.diameter.findUnique({
        where: { value: diameterValue }
      });
      if (diameterRecord) {
        diameterConnect = { connect: { id: diameterRecord.id } };
      }
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name,
        type,
        price: price !== undefined ? parseFloat(price) : undefined,
        description,
        quantity: quantity !== undefined ? parseInt(quantity) : undefined,
        imageUrl,
        isActive: isActive !== undefined ? isActive : undefined,
        rimWidth: type === 'rim' ? rimWidth : (type === 'tyre' ? null : undefined),
        tireProfile: type === 'tyre' ? tireProfile : (type === 'rim' ? null : undefined),
        brand: brandConnect,
        diameter: diameterConnect,
      },
      include: {
        brand: true,
        diameter: true,
      }
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verify admin token
    const token = request.cookies.get('adminToken')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = params;

    // Check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json(existingProduct, { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}
