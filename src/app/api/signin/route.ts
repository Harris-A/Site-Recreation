import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export async function POST(req: Request) {
    try {
        const { username, password} = await req.json();

        // Validate input
        if (!username || !password) {
            return NextResponse.json({error: "Username and Password is required"}, {status: 400 });
        }

        // check if user exists
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return NextResponse.json({error: "Invalid username or password"}, {status: 401 });
        }

        // compare stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({error: "Invalid username or password"}, {status: 401 });
        }

        // success - (Can generate a session/token here at later date)
        return NextResponse.json({message: "Login successful", user}, {status: 200 });
    }
    catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
