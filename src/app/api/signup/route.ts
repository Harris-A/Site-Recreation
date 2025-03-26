import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        // Parse the request body
        const body = await req.json();
        const { email, password, firstname, lastname, username } = body;

        // Validate required fields
        if (!email || !password || !firstname || !lastname || !username) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user in the database
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                firstname,
                lastname,
                username,
                emailVerified: null,
            },
        });

        return NextResponse.json({ message: "User created successfully", user }, { status: 201 });
    } catch (error) {
        console.error("Signup error:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
