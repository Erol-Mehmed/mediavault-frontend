import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('refresh-token')?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith('./login');
  const isProtectedRoute =
    request.nextUrl.pathname.startsWith('/account') ||
    request.nextUrl.pathname.startsWith('/media');

  // No refresh token -> block protected routes
  if (!refreshToken && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Has refresh token -> block login page
  if (refreshToken && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/account/:path*', '/media/:path*', '/login'],
};
