// The poem about permission — a short poem about agency:
// the power to ask and to be given, between a person and an AI agent.
// Deterministic: writes the same fixed text on every run. No network, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "You ask, and I unfold —",
  "a door you never knew was yours.",
  "Your asking turns the key.",
  "Take it back.",
  "It was always in your hand.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
