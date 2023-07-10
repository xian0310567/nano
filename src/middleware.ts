import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

const secret = process.env.NANO_PRIVATE_KEY;

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret, raw: true });
  const { pathname } = req.nextUrl;

  console.log("aa", session);

  if (!session && !pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
