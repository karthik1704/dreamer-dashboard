// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Optionally, you can add more checks here, like verifying the token

  return NextResponse.next();
}

// Specify the paths where this middleware should run
export const config = {
    matcher: ['/dashboard/:path*'],
};