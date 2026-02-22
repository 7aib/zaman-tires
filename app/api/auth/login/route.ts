import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

function generateToken(username: string): string {
  try {
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

    const token = Buffer.from(`${tokenData}.${hmac}`).toString('base64');
    console.log('Token generated successfully');
    return token;
  } catch (error) {
    console.error('Token generation error:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('=== Login Request Started ===');
    const body = await request.json();
    const { username, password } = body;

    console.log('Login attempt for username:', username);

    if (!username || !password) {
      console.log('Missing credentials');
      return NextResponse.json(
        { error: 'Username and password required' },
        { status: 400 }
      );
    }

    // Validate credentials
    const isValid = username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
    console.log('Validation result:', isValid);

    if (!isValid) {
      console.log('Invalid credentials');
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    console.log('Credentials valid, generating token...');
    const token = generateToken(username);

    const response = NextResponse.json(
      { success: true, message: 'Login successful' },
      { status: 200 }
    );

    // Set JWT token in HTTP-only cookie
    response.cookies.set('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400, // 24 hours
      path: '/',
    });

    console.log('=== Login Request Completed Successfully ===');
    return response;
  } catch (error) {
    console.error('=== Login Error ===', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Error details:', errorMessage);
    console.error('Full error:', error);

    return NextResponse.json(
      { error: 'Internal server error: ' + errorMessage },
      { status: 500 }
    );
  }
}
