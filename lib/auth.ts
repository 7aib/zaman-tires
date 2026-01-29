import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export interface AdminUser {
    username: string;
    role: string;
}

export function verifyToken(token: string): AdminUser | null {
    try {
        const decoded = Buffer.from(token, 'base64').toString('utf-8');

        // Robust split for payload and hmac
        const lastDotIndex = decoded.lastIndexOf('.');
        if (lastDotIndex === -1) return null;

        const data = decoded.substring(0, lastDotIndex);
        const hmac = decoded.substring(lastDotIndex + 1);

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
        console.error('Token verification failed:', error);
        return null;
    }
}
