// The Funniest Sick-Day Excuse — u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// Writes one line (66 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no network, no clock, no randomness.
// Winner picked by a 3-model CrowLLM panel (crow-roleplay, solar-mini4,
// particle-1 — all three named C8); internal scoring had C5 first at 135,
// C8 second at 124, C2 third at 120. Panel combined: C8 125.33, C5 122.33,
// C2 118.33 — the sneeze-to-workers'-comp escalation won on the biggest laugh.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Can't come in — I sneezed so hard my back filed for workers' comp.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${chars}`);
}
if (LINE.trim() !== LINE || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single unpadded line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
