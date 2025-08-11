import { APIEvent } from "@solidjs/start/server";
import app from "~/lib/hono";

export const GET = (e: APIEvent) => app.fetch(e.request);
export const POST = (e: APIEvent) => app.fetch(e.request);
