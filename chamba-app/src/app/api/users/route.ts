import {NextResponse} from 'next/server'
import {sql} from "@vercel/postgres";

export async function GET() {
    const users = await getAllUsers();
    return NextResponse.json(users);
}

const getAllUsers = async () => {
    const {rows} = await sql`SELECT *
                             FROM USERS`;
    return rows;
}
