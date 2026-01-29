import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const diameters = await prisma.diameter.findMany({
            orderBy: { value: 'asc' }
        });
        return NextResponse.json(diameters);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch diameters' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const token = request.cookies.get('adminToken')?.value;
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { value } = await request.json();

        if (!value || isNaN(parseInt(value))) {
            return NextResponse.json({ error: 'Valid integer value is required' }, { status: 400 });
        }

        const intValue = parseInt(value);

        const existing = await prisma.diameter.findUnique({
            where: { value: intValue }
        });

        if (existing) {
            return NextResponse.json({ error: 'Diameter already exists' }, { status: 409 });
        }

        const newDiameter = await prisma.diameter.create({
            data: { value: intValue }
        });

        return NextResponse.json(newDiameter, { status: 201 });
    } catch (error) {
        console.error('Error creating diameter:', error);
        return NextResponse.json({ error: 'Failed to create diameter' }, { status: 500 });
    }
}
