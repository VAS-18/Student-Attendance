import { NextResponse } from "next/server";

export async function GET(req) {
    NextResponse.json('hello world');
}