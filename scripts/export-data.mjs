#!/usr/bin/env node
// Exports the SQLite database (products, brands, diameters) into static JSON
// files under public/data/ so the site can be built as a static export with
// zero Node processes at runtime.
//
// Usage:
//   node scripts/export-data.mjs
//
// It resolves the database the same way the app does:
//   - $DB_PATH, or
//   - $DATABASE_URL (a `file:` URL), or
//   - ./dev.db in the project root
//
// Uses the built-in `node:sqlite` module on Node 22.5+; falls back to
// @prisma/client on older runtimes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = resolve(root, "public", "data");

function dbPath() {
  const fromEnv = process.env.DB_PATH || process.env.DATABASE_URL;
  if (fromEnv) return resolve(root, fromEnv.replace(/^file:/, ""));
  return resolve(root, "dev.db");
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
  const path = dbPath();
  let data;
  try {
    data = await exportNodeSqlite(path);
    console.log(`Exported using node:sqlite (${path})`);
  } catch (err) {
    if (err && err.code === "ERR_UNKNOWN_BUILTIN_MODULE") {
      console.log("node:sqlite unavailable, falling back to Prisma");
      data = await exportPrisma();
    } else {
      throw err;
    }
  }

  mkdirSync(dataDir, { recursive: true });
  writeFileSync(resolve(dataDir, "products.json"), JSON.stringify(data.products, null, 2));
  writeFileSync(resolve(dataDir, "brands.json"), JSON.stringify(data.brands, null, 2));
  writeFileSync(resolve(dataDir, "diameters.json"), JSON.stringify(data.diameters, null, 2));

  console.log(
    `Wrote ${data.products.length} products, ${data.brands.length} brands, ${data.diameters.length} diameters to public/data/`
  );
}

main().catch((err) => {
  console.error("Export failed:", err.message);
  process.exit(1);
});
