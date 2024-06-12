import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: any) => {
    try {
        console.log({request});

        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        return NextResponse.json({message: "ok", data}, {status: 200})
    } catch(e) {
        return NextResponse.json({message: "Error", e}, {status: 500})
    }
}
export const POST = async (request: { body: any; }) => {
    try {
        console.log(request.body);
        
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        return NextResponse.json({message: "ok", data}, {status: 200})
    } catch(e) {
        return NextResponse.json({message: "Error", e}, {status: 500})
    }
}
