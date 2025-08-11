import { Hono } from "hono";
import { logger } from "hono/logger";
import { poweredBy } from "hono/powered-by";
import { prettyJSON } from "hono/pretty-json";
import { requestId } from "hono/request-id";
import { secureHeaders } from "hono/secure-headers";
import { handle } from "hono/vercel";

export const runtime = "nodejs";

const app = new Hono();

app.use(logger());
app.use(secureHeaders());
app.use(poweredBy());
app.use(prettyJSON());
app.use("*", requestId());

app.get("/hello", async (c) => {
	return c.text("Hello, world!");
});

export const GET = handle(app);
export const POST = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
export const PUT = handle(app);
export default app;
