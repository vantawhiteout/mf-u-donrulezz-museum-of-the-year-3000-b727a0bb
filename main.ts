// SPDX-License-Identifier: MIT
// Museum of the Year 3000 — one label, beside one ordinary object from today.
import { mkdirSync, writeFileSync } from "node:fs";

const label =
  "Postage stamp, c. 2020. A licked picture stuck to a letter to pay for its slow journey.";

if (Array.from(label).length > 200 || label.trim().length === 0) {
  throw new Error("label must be non-empty UTF-8 text of at most 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
