import { NextResponse } from 'next/server'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
 
export async function middleware(request) {

    const { isAuthenticated } = getKindeServerSession();


  if (!(await isAuthenticated())) {
    return NextResponse.redirect(new URL("/api/auth/login?post_login_redirect_url=/protected", request.url))
  }

  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}