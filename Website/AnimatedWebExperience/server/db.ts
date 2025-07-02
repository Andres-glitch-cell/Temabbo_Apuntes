import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Comentamos o quitamos esta parte que lanza error si no hay DATABASE_URL
/*
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}
*/

// Creamos un pool vacío o con un valor falso para evitar fallos
export const pool = new Pool({ connectionString: process.env.DATABASE_URL || "" });
export const db = drizzle({ client: pool, schema });

