#!/usr/bin/env node
// Exports the SQLite database (products, brands, diameters) into static JSON
// files under public/data/ so the site can be built as a static export with
// zero Node processes at runtime.
//
// Usage:
//   node scripts/export-data.mjs
//
// The database is located by checking (in order):
//   - $DATABASE_URL or $DB_PATH (values from the shell or a root .env)
//   - ./dev.db and ./prisma/dev.db
//
// Uses the built-in `node:sqlite` module on Node 22.5+; falls back to
// @prisma/client on older runtimes. If no database can be opened, an empty
// dataset is written with a warning so builds never fail.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = resolve(root, "public", "data");

// Minimal .env loader (no dotenv dependency). Only sets keys that are not
// already present in the environment.
function loadEnv() {
  const envFile = resolve(root, ".env");
  if (!existsSync(envFile)) return;
  for (const line of readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const [, key, raw] = m;
    if (process.env[key] === undefined) {
      process.env[key] = raw.replace(/^["']|["']$/g, "");
    }
  }
}

function candidateDbPaths() {
  const candidates = [];
  const fromEnv = process.env.DB_PATH || process.env.DATABASE_URL;
  if (fromEnv) candidates.push(resolve(root, fromEnv.replace(/^file:/, "")));
  candidates.push(resolve(root, "dev.db"));
  candidates.push(resolve(root, "prisma", "dev.db"));
  candidates.push(resolve(root, "prod.db"));
  return candidates;
}

async function exportNodeSqlite(path) {
  const { DatabaseSync } = await import("node:sqlite");
  const db = new DatabaseSync(path, { readOnly: true });

  const products = db
    .prepare(
      "SELECT id, name, type, description, price, quantity, imageUrl, diameterId, brandId, rimWidth, tireProfile, isActive, createdAt, updatedAt FROM Product ORDER BY createdAt DESC"
    )
    .all();
  const brands = db
    .prepare("SELECT id, name, type FROM Brand ORDER BY name ASC")
    .all();
  const diameters = db
    .prepare("SELECT id, value FROM Diameter ORDER BY value ASC")
    .all();
  db.close();

  const brandMap = new Map(brands.map((b) => [b.id, b]));
  const diameterMap = new Map(diameters.map((d) => [d.id, d]));

  const productsOut = products.map((p) => ({
    ...p,
    isActive: Boolean(p.isActive),
    brand: brandMap.get(p.brandId) ?? null,
    diameter: diameterMap.get(p.diameterId) ?? null,
  }));

  return { products: productsOut, brands, diameters };
}

async function exportPrisma() {
  const { PrismaClient } = await import("@prisma/client");
  const prisma = new PrismaClient();
  try {
    const [products, brands, diameters] = await Promise.all([
      prisma.product.findMany({
        orderBy: { createdAt: "desc" },
        include: { brand: true, diameter: true },
      }),
      prisma.brand.findMany({ orderBy: { name: "asc" } }),
      prisma.diameter.findMany({ orderBy: { value: "asc" } }),
    ]);
    return { products, brands, diameters };
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  loadEnv();

  const paths = candidateDbPaths();
  let data = null;
  let usedPath = null;

  // 1) Prefer node:sqlite (built-in on Node 22.5+).
  try {
    await import("node:sqlite");
  } catch {
    // fall through to Prisma below
  }

  for (const p of paths) {
    try {
      data = await exportNodeSqlite(p);
      usedPath = p;
      break;
    } catch {
      // try the next candidate
    }
  }

  // 2) Fall back to @prisma/client (Node < 22.5).
  if (!data) {
    try {
      data = await exportPrisma();
      usedPath = "prisma client";
    } catch {
      // fall through to empty dataset
    }
  }

  // 3) No database available - write an empty dataset so the build succeeds.
  if (!data) {
    console.warn(
      `[export-data] No database found. Tried: ${paths.join(", ")}. ` +
        "Writing empty product data. Provide DATABASE_URL (or a dev.db file) " +
        "and run `node scripts/export-data.mjs` to populate the site."
    );
    data = { products: [], brands: [], diameters: [] };
  }

  mkdirSync(dataDir, { recursive: true });
  writeFileSync(resolve(dataDir, "products.json"), JSON.stringify(data.products, null, 2));
  writeFileSync(resolve(dataDir, "brands.json"), JSON.stringify(data.brands, null, 2));
  writeFileSync(resolve(dataDir, "diameters.json"), JSON.stringify(data.diameters, null, 2));

  console.log(
    `[export-data] Used ${usedPath || "no database (empty)"}: wrote ${data.products.length} products, ` +
      `${data.brands.length} brands, ${data.diameters.length} diameters to public/data/`
  );
}

main().catch((err) => {
  console.error("Export failed:", err.message);
  process.exit(1);
});
