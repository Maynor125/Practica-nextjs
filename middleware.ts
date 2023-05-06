import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest) {
    const requestHeadrs = new Headers(request.headers);
    requestHeadrs.set('next-js-warro','que lo que mi lidel')

    const response = NextResponse.next({
        request:{
            headers:requestHeadrs,
        }
    })

    if(request.nextUrl.pathname.endsWith("/information")){
       return NextResponse.redirect(
           new URL("/information/character",request.url)
       )
    }

    if (request.nextUrl.pathname.startsWith("/information")) {

        const user ={
            name:"maynor rodriguez",
            autenticated:false,
        }

        if(!user.autenticated)
        {
           return NextResponse.redirect(
               new URL("/login",request.url)
           )
        }
    }

    return response;
}

export const config = {
   matcherr:[
    "/information/:path*",
    "((?!api|_next/static|_next/image|favicon.ico.*))"
   ], 
}