import { cookies } from "next/headers"
import prisma from "@/lib/prisma";

export async function getSession() {
    const sessionId = (await cookies()).get("session_id")?.value

    if (!sessionId) {
        return null
    }

    const session = await prisma.session.findUnique({
        where: { id: sessionId },
        include: { user: true },
    })

    // Check if session exists and is not expired
    if (!session || session.expiresAt < new Date()) {
        // Session expired, delete it
        if (session) {
            await prisma.session.delete({ where: { id: sessionId } })
        }
        (await cookies()).delete("session_id")
        return null
    }

    return session
}

export async function getCurrentUser() {
    const session = await getSession()
    return session?.user || null
}

export async function deleteSession() {
    const sessionId = (await cookies()).get("session_id")?.value

    if (sessionId) {
        await prisma.session.delete({ where: { id: sessionId } })
    }

    (await cookies()).delete("session_id")
}

