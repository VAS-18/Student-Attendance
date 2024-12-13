import { db } from "@/app/db";
import { STUDENTS } from "@/app/db/schema";
import { NextResponse } from "next/server";

export async function POST(req,res) {

    const data = await req.json();
        
    const rollno = parseInt(data.rollno);
    if (isNaN(rollno)) {
        return NextResponse.json(
            { error: "Roll number must be a valid number" },
            { status: 400 }
        );
    }

        const result = await db.insert(STUDENTS).values({
            name: data.name,
            rollno: rollno,
            branch: data.branch
        });

        return NextResponse.json(result);

}

export async function GET(req) {
    const result = await db.select().from(STUDENTS);

    return NextResponse.json(result);
}
