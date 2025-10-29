import { z } from "vinxi";

export const serverEnvSchema = z
	.object({
		BETTER_AUTH_SECRET: z.string(),
		DB_URL: z.string(),
	})
	.readonly();

export const envServer = serverEnvSchema.parse(process.env);
