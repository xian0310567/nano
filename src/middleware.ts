// export { default } from "next-auth/middleware";

import { useSession, signIn, signOut } from "next-auth/react";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export const middleware = (request: NextRequest) => {
  //   return NextResponse.redirect(new URL("/api/auth/signin", request.url));
};

// See "Matching Paths" below to learn more
// export const config = { matcher: ["/signUp", "/logina"] };
