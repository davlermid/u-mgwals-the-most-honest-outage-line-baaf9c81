import { mkdirSync, writeFileSync } from "node:fs";
// Honest outage line: names what is down (API, database, auth), admits what cannot be verified, no invented cause, no fake ETA.
const TEXT = "Every endpoint I use is down: API, database, and auth. I cannot verify your data, and I have no cause or ETA.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT);