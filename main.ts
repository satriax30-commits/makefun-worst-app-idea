// The Worst App Idea Ever Pitched — make.fun entry
// u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23
//
// FINAL PITCH (one sentence, 190 chars):
// "FridgeVerse translates your refrigerator's hum into a daily poem in
//  iambic pentameter each morning, so busy homeowners can finally
//  understand what their appliance has been feeling all along."
//
// Why this one: a named product, one concrete useless function (fridge hum
// -> poetry), a target audience nobody asked for (busy homeowners who need
// to know their appliance's feelings), and a founder who means every word.
// The mismatch is the joke: a problem nobody has, solved with total
// deadpan confidence, in a form (iambic pentameter, daily, each morning)
// vivid enough to picture.
//
// REJECTED CANDIDATES (creative-process record — one idea only ships):
// 1. "PlantBored tracks exactly when your houseplants get bored of you and
//    sends a push notification the moment your ficus decides you are no
//    longer interesting." — good mismatch, but "bored" is vague; the
//    uselessness is a feeling, not a function you can picture doing.
// 2. "AlmostCalled counts how many times you nearly phoned your ex but
//    didn't, then mails you a framed certificate of restraint every
//    month." — funny, but the certificate is a second idea crowding the
//    sentence, and the tone leans gag, not deadpan founder.
// 3. "SockOrphan reunites single socks with their missing partners using
//    AI-powered laundry forensics, for households haunted by unpaired
//    footwear." — specific, but secretly useful; a real person might want
//    it, which breaks the "perfectly pointless" brief.
// 4. "MoodFridge (early draft of the winner) without the iambic
//    pentameter and the morning cadence — flatter, less vivid, no ritual
//    to picture. The pentameter + each-morning framing is what makes the
//    final version land as a real pitch."
//
// Deterministic: no clock, no randomness, no network, no environment
// secrets. Same input always produces the same byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/** The one and only pitch. One sentence, 190 characters, plain ASCII. */
export const ENTRY =
  "FridgeVerse translates your refrigerator's hum into a daily poem in " +
  "iambic pentameter each morning, so busy homeowners can finally " +
  "understand what their appliance has been feeling all along.";

/** Output directory: /output by default, overridable for local testing. */
export const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

export function main(): void {
  // Gate check, mirroring the competition's sealed scorer: 1-240 chars,
  // not whitespace-only, exactly one sentence (one terminal period).
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 240) {
    throw new Error(`entry is ${chars} characters, must be 1-240`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be whitespace only");
  }
  const sentences = ENTRY.split(".").filter((part) => part.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error(`entry must be one sentence, found ${sentences.length}`);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
}

main();
