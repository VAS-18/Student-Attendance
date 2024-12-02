import { drizzle } from 'drizzle-orm'

async function main() {
    const db1 = drizzle('postgres-js', process.env.DATABASE_URL);
}

main();


export const db = drizzle(db1);