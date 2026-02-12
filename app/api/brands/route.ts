import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const brands = await prisma.brand.findMany({
            orderBy: { name: 'asc' }
        });
        return NextResponse.json(brands);
    } catch (error: any) {
        console.error('Error fetching brands:', error);
        return NextResponse.json({ error: 'Failed to fetch brands', details: error?.message || 'Unknown error', code: error?.code }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const token = request.cookies.get('adminToken')?.value;
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { name, type } = await request.json();

        if (!name) {
            return NextResponse.json({ error: 'Name is required' }, { status: 400 });
        }

        const existing = await prisma.brand.findUnique({
            where: { name }
        });

        if (existing) {
            return NextResponse.json({ error: 'Brand already exists' }, { status: 409 });
        }

        const newBrand = await prisma.brand.create({
            data: {
                name,
                type: type || 'both' // Default to 'both'
            }
        });

        return NextResponse.json(newBrand, { status: 201 });
    } catch (error: any) {
        console.error('Error creating brand:', error);
        return NextResponse.json({ error: 'Failed to create brand', details: error?.message || 'Unknown error', code: error?.code }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    // We need a way to parse ID from URL in App Router if this is catch-all or just query param.
    // Usually DELETE needs dynamic route like /api/brands/[id].
    // If not, we can use searchParams?
    return NextResponse.json({ error: 'Use /api/brands/[id] for deletion' }, { status: 405 });
}
