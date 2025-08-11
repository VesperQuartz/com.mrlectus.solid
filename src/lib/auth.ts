import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { haveIBeenPwned, openAPI } from "better-auth/plugins";
import { db } from "./db";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg", // or "mysql", "sqlite"
	}),
	emailAndPassword: {
		enabled: true,
	},
	plugins: [openAPI(), haveIBeenPwned()],
});
