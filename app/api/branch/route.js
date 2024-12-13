import { BRANCH } from "@/app/db/schema";
import { NextResponse } from "next/server";
import { db } from "@/app/db";

export async function GET(req) {

    const result = await db.select().from(BRANCH);
    console.log(result); // Log the result for debugging
    return NextResponse.json({ branch: result });
}