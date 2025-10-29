import { z } from "vinxi";

console.log(import.meta.env);
export const serverEnvSchema = z
	.object({
		BETTER_AUTH_SECRET: z.string(),
		DB_URL: z.string(),
	})
	.readonly();

export const clientEnvSchema = z
	.object({
		VITE_BASE_URL: z.string(),
	})
	.readonly();

export const envServer = serverEnvSchema.parse(process.env);
export const envClient = clientEnvSchema.parse(import.meta.env);
