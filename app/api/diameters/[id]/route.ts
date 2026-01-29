import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const token = request.cookies.get('adminToken')?.value;
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = params;

        // Convert id to number if it's an Int in Prisma
        const diameterId = parseInt(id);
        if (isNaN(diameterId)) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }

        await prisma.diameter.delete({ where: { id: diameterId } });
        return NextResponse.json({ message: 'Diameter deleted' });
    } catch (error) {
        console.error('Error deleting diameter:', error);
        return NextResponse.json({ error: 'Failed to delete diameter. It might be in use by products.' }, { status: 500 });
    }
}
