import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Define which routes should be protected
const protectedRoutes = ["/dashboard", "/account", "/settings"]
const authRoutes = ["/signin", "/signup", "/forgot-password"]

export function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get("session_id")
    const { pathname } = request.nextUrl

    // Check if the route is protected and user is not authenticated
    if (protectedRoutes.some((route) => pathname.startsWith(route)) && !sessionCookie) {
        const url = new URL("/signin", request.url)
        url.searchParams.set("callbackUrl", pathname)
        return NextResponse.redirect(url)
    }

    // Redirect authenticated users away from auth pages
    if (authRoutes.includes(pathname) && sessionCookie) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (public directory)
         * - api routes (API endpoints)
         */
        "/((?!_next/static|_next/image|favicon.ico|public|api).*)",
    ],
}

