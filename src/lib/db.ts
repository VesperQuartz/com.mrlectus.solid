import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { envServer } from "~/config/env";

const sql = neon(envServer.DB_URL);
export const db = drizzle({ client: sql });

export type DatabaseClient = typeof db;
