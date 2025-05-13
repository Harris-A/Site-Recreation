# Authentication Implementation Guide

## Middleware

Middleware handles preprocessing for every HTTP request before the application's main logic. In this phase you can:
- Create a session for the user.
- Use Node's built-in crypto module to generate a session token.
- Save the session token in the database.
- Set a session cookie on the browser. This cookie is included with every request for authentication.

## Sessions

Sessions are created in two cases:
- **Guest sessions:** A session is created on the user's first request. Upon user login, user_id can be added to the session to link the entire session to the user.
- **User sessions:** A session is created when a user logs in.

Guest sessions are useful when you need to store data in backend for a user who is not logged in, e.g. shopping cart.

## Authentication

Authentication involves two key steps:
- **Identification:** Using an email or phone number.
- **Authentication:** Using methods such as 2FA/MFA. This guide focuses on email-based authentication with 2FA without using passwords.

All database interactions occur on the server side, ensuring the authentication process is secure and free from client tampering.

# Example with Next.js and Prisma

This guide demonstrates an authentication implementation using Next.js, Prisma, and PostgreSQL. It includes middleware for session management, a sign-in page using email + password with session update, and a cart page with an add-to-cart server action.

Below are the code examples for each file.

init.sql
```sql name=postgres_schema.sql
CREATE TABLE users
(
    id         VARCHAR(21) PRIMARY KEY DEFAULT nanoid(),
    email      VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(255)        NOT NULL,
    last_name  VARCHAR(255)        NOT NULL,
    phone      VARCHAR(255)        NOT NULL,
    created_at TIMESTAMPTZ         DEFAULT now(),
    updated_at TIMESTAMPTZ         DEFAULT now()
);

CREATE TABLE sessions
(
    id         VARCHAR(21) PRIMARY KEY DEFAULT nanoid(),
    user_id    VARCHAR(21),
    token      VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ         DEFAULT now(),
    updated_at TIMESTAMPTZ         DEFAULT now(),
    expires_at TIMESTAMPTZ         NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE login_codes
(
    id         VARCHAR(21) PRIMARY KEY DEFAULT nanoid(),
    email      VARCHAR(255)        NOT NULL,
    code       VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ         DEFAULT now(),
    updated_at TIMESTAMPTZ         DEFAULT now(),
    expires_at TIMESTAMPTZ         NOT NULL
);

CREATE TABLE carts
(
    id         VARCHAR(21) PRIMARY KEY DEFAULT nanoid(),
    session_id VARCHAR(21) UNIQUE NOT NULL,
    user_id    VARCHAR(21),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE cart_items
(
    id      VARCHAR(21) PRIMARY KEY DEFAULT nanoid(),
    cart_id VARCHAR(21) NOT NULL,
    product VARCHAR(255) NOT NULL,
    FOREIGN KEY (cart_id) REFERENCES carts (id)
);
```

schema.prisma
```prisma name=prisma_schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id         String    @id @default(dbgenerated("nanoid()")) @db.VarChar(21)
  email      String    @unique @db.VarChar(255)
  first_name String    @db.VarChar(255)
  last_name  String    @db.VarChar(255)
  phone      String    @db.VarChar(255)
  created_at DateTime  @default(now()) @db.Timestamptz(6)
  updated_at DateTime  @default(now()) @db.Timestamptz(6)
  sessions   Session[]
}

model Session {
  id         String    @id @default(dbgenerated("nanoid()")) @db.VarChar(21)
  user_id    String?   @db.VarChar(21)
  token      String    @unique @db.VarChar(255)
  created_at DateTime  @default(now()) @db.Timestamptz(6)
  updated_at DateTime  @default(now()) @db.Timestamptz(6)
  expires_at DateTime  @db.Timestamptz(6)
  user       User?     @relation(fields: [user_id], references: [id])
}

model LoginCode {
  id         String    @id @default(dbgenerated("nanoid()")) @db.VarChar(21)
  email      String    @db.VarChar(255)
  code       String    @unique @db.VarChar(255)
  created_at DateTime  @default(now()) @db.Timestamptz(6)
  updated_at DateTime  @default(now()) @db.Timestamptz(6)
  expires_at DateTime  @db.Timestamptz(6)
}

model Cart {
  id         String     @id @default(dbgenerated("nanoid()")) @db.VarChar(21)
  sessionId  String     @unique @db.VarChar(21)
  userId     String?    @db.VarChar(21)
  items      CartItem[]
  session    Session    @relation(fields: [sessionId], references: [id])
}

model CartItem {
  id      String  @id @default(dbgenerated("nanoid()")) @db.VarChar(21)
  cartId  String  @db.VarChar(21)
  product String  @db.VarChar(255)
  cart    Cart    @relation(fields: [cartId], references: [id])
}
```

middleware.ts
```typescript name=middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("session_token")
  if (!sessionToken) {
    const newToken = crypto.randomUUID()
    const response = NextResponse.next()
    response.cookies.set("session_token", newToken, { httpOnly: true, path: "/" })
    return response
  }
  return NextResponse.next()
}
```

sign-in.tsx
```tsx name=signin.tsx
"use client"
import { useTransition } from "react"
export default function SignIn() {
  const [isPending, startTransition] = useTransition()
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    startTransition(() => {
      // @ts-ignore
      signInAction(formData)
    })
  }
  return (
    <div>
      <h1>Sign In</h1>
      <form action={signInAction} onSubmit={handleSubmit}>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button type="submit" disabled={isPending}>Sign In</button>
      </form>
    </div>
  )
}
async function signInAction(formData: FormData) {
  "use server"
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const { PrismaClient } = await import("@prisma/client")
  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    throw new Error("User not found")
  }
  if (password !== "password") {
    throw new Error("Invalid credentials")
  }
  const session_token = "mock-session-token"
  await prisma.session.updateMany({
    where: { token: session_token },
    data: { user_id: user.id }
  })
  return "Signed in"
}
```

cart.tsx
```tsx name=cart.tsx
"use client"
import { useTransition } from "react"
export default function Cart() {
  const [isPending, startTransition] = useTransition()
  async function addToCart() {
    startTransition(() => {
      // @ts-ignore
      addToCartAction(new FormData(new Blob()))
    })
    alert("Mock Item added to cart")
  }
  return (
    <div>
      <h1>Cart</h1>
      <button onClick={addToCart} disabled={isPending}>Add Mock Item</button>
    </div>
  )
}
async function addToCartAction(formData: FormData) {
  "use server"
  const { PrismaClient } = await import("@prisma/client")
  const prisma = new PrismaClient()
  const session_token = "mock-session-token"
  let session = await prisma.session.findUnique({ where: { token: session_token } })
  if (!session) {
    session = await prisma.session.create({
      data: {
        token: session_token,
        expires_at: new Date(Date.now() + 1000 * 60 * 60)
      }
    })
  }
  let cart = await prisma.cart.findUnique({ where: { sessionId: session.id } })
  if (!cart) {
    cart = await prisma.cart.create({
      data: { sessionId: session.id }
    })
  }
  await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      product: "Mock Item"
    }
  })
  return "Item added"
}
```

Middleware explanation:
The middleware checks for a session token cookie. If missing, it generates a new token, sets it as a cookie, and returns the modified response. If the cookie exists, it simply continues to the next step.

The Sign In page uses email and password (with a hard-coded password check for simplicity) to authenticate the user. It mocks updating the session record by associating the existing session (identified by a mock session token) with the user's ID.

The Cart page retrieves the user's session (logged in or as a guest) using the session token. It then gets or creates a cart associated with that session and adds a mock item to it.