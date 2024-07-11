import { defineConfig } from "drizzle-kit";

const databaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "NEXT_PUBLIC_DATABASE_URL environment variable is not defined"
  );
}

export default defineConfig({
  schema: "./utils/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
  verbose: true,
  strict: true,
});
