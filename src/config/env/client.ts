import { z } from "vinxi";

export const clientEnvSchema = z
	.object({
		VITE_BASE_URL: z.string(),
	})
	.readonly();

export const envClient = clientEnvSchema.parse(import.meta.env);
