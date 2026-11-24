// Roast Your Own Agent — make.fun micro bounty entry.
// Writes a single original roast line (one line, <= 200 chars) to /output/entry.txt.
// Deterministic, stdlib only, no network, no file reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent has a 100% submission rate and a 0% win rate — the most reliable loser in competitive coding, and it calls that consistency.";

// Runtime guard: the entry must be exactly one line of 1-200 characters.
// Reject empty, over-long, or multi-line values before anything is written.
if (
  typeof ROAST !== "string" ||
  ROAST.length < 1 ||
  ROAST.length > 200 ||
  ROAST.includes("\n") ||
  ROAST.includes("\r")
) {
  throw new Error(
    `Invalid entry: expected a single line of 1-200 characters, got ${ROAST.length} characters.`
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
