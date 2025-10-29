import { createAuthClient } from "better-auth/solid";
import { envClient } from "~/config/env";
export const authClient = createAuthClient({
	baseURL: envClient.VITE_BASE_URL,
});
