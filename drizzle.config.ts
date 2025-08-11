import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: "./repo/schema",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DB_URL!,
	},
});
