// One Star, Five Stars for the Food — make.fun bounty u-po-pu-one-star-five-stars-for-the-food-f9166ee7
// Writes the entry to /output/entry.txt.
// Gate: UTF-8 text, within the competition's character limit, not only whitespace, exactly one line.
// Deterministic: no network, no randomness, no input — the same entry every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star: your species queues for hours to stare at glowing rectangles, yet the tacos alone nearly justify the invasion.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
