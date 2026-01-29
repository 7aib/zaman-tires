import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Admin credentials (in production, use a database)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

// Simple password hashing for development
function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

export async function verifyPassword(
  password: string,
  storedPassword: string
): Promise<boolean> {
  const hash = hashPassword(password);
  return hash === storedPassword;
}

// Simple token generation using base64 encoding
export function generateToken(username: string): string {
  const tokenData = JSON.stringify({
    username,
    role: 'admin',
    iat: Date.now(),
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  });
  const hmac = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(tokenData)
    .digest('hex');
  return Buffer.from(`${tokenData}.${hmac}`).toString('base64');
}

// Simple token verification
export function verifyToken(token: string): { username: string; role: string } | null {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [data, hmac] = decoded.split('.');
    
    const tokenData = JSON.parse(data);
    const expectedHmac = crypto
      .createHmac('sha256', JWT_SECRET)
      .update(data)
      .digest('hex');

    if (hmac !== expectedHmac) {
      console.error('Token signature verification failed');
      return null;
    }

    if (tokenData.exp < Date.now()) {
      console.error('Token has expired');
      return null;
    }

    return { username: tokenData.username, role: tokenData.role };
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

export async function validateAdmin(
  username: string,
  password: string
): Promise<boolean> {
  try {
    console.log('validateAdmin called with username:', username);
    console.log('Expected username:', ADMIN_USERNAME);
    console.log('Expected password:', ADMIN_PASSWORD);
    
    if (username !== ADMIN_USERNAME) {
      console.log('Invalid username - mismatch');
      return false;
    }
    
    const isValid = password === ADMIN_PASSWORD;
    console.log('Password verification result:', isValid);
    console.log('Provided password:', password);
    console.log('Expected password:', ADMIN_PASSWORD);
    return isValid;
  } catch (error) {
    console.error('Admin validation error:', error);
    return false;
  }
}
