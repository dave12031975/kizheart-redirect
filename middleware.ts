import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Homepage NICHT redirecten - zeigt die "Wir sind umgezogen" Seite
  // Die Seite hat einen JavaScript-Countdown und Button zur neuen Seite
  if (pathname === '/') {
    return NextResponse.next();
  }

  // Impressum und Datenschutz Seiten behalten (fur rechtliche Grunde)
  if (pathname === '/impressum' || pathname === '/datenschutz') {
    return NextResponse.next();
  }

  // Alle anderen Pfade werden von next.config.ts redirects behandelt
  return NextResponse.next();
}

export const config = {
  // Nur auf diese Pfade anwenden
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    '/((?!_next/static|_next/image|favicon.ico|images).*)',
  ],
};
