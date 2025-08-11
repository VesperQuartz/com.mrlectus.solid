import { Hono } from "hono";
import { logger } from "hono/logger";
import { poweredBy } from "hono/powered-by";
import { prettyJSON } from "hono/pretty-json";
import { requestId } from "hono/request-id";
import { secureHeaders } from "hono/secure-headers";

const app = new Hono().basePath("/api");

app.use(logger());
app.use(secureHeaders());
app.use(poweredBy());
app.use(prettyJSON()); // With options: prettyJSON({ space: 4 })
app.use("*", requestId());

app.get("/hello", (c) => {
	return c.json({ message: "it worked!!" });
});

export default app;
