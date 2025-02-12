import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./utils/schema.ts",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:N3zUMC6ZlbBK@ep-lucky-butterfly-a5tl6id0-pooler.us-east-2.aws.neon.tech/Interview%20Edge?sslmode=require",
  }
});