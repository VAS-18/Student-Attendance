import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { config } from "dotenv";

config({ path: ".env.local" });

export default defineConfig({
  out: './drizzle',
  schema: './app/db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
