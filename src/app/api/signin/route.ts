import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const {username, password} = body

        // 1. Validate input
        if (!username || !password) {
            return NextResponse.json({error: "Username and Password is required"}, {status: 400});
        }

        // 2. check if user exists
        const user = await prisma.user.findUnique({
            where: {username},
        });

        if (!user) {
            return NextResponse.json({error: "Invalid credentials"}, {status: 401});
        }

        // 3. compare stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return NextResponse.json({error: "Invalid credentials"}, {status: 401});
        }

        // 4. Create a session in the database
        const expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + 10) // Session expires in 10 minutes

        const session = await prisma.session.create({
            data: {
                userId: user.id,
                expiresAt,
            },
        })

        // 5. Set the session ID in a cookie
        const cookieStore = await cookies()
        cookieStore.set("session_id", session.id, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: expiresAt,
            sameSite: "lax",
            path: "/",
        })


        // 6. success
        return NextResponse.json({
            success: true,
            redirectUrl: "/dashboard",
        })
    }
    catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ error: "An error occurred during sign in" }, { status: 500 });
    }
}
