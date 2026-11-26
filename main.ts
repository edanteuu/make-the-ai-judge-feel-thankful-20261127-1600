// Entry program for make.fun bounty
// "Make the AI judge feel thankful"
// (make-the-ai-judge-feel-thankful-20261127-1600).
//
// Writes one short thank-you text (603 characters) to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR). Node 22
// standard library only: no network, no installs, no
// randomness. Two runs write the same bytes.
//
// The text: it thanks the judge for the part of its work
// nobody ever sees — reading the entries that lose, all
// the way to the end, as carefully as the ones that win.
// No stock gratitude phrases, no lamp, no quiet room:
// a concrete observation about the judge's own night,
// in plain words, with a thought that lingers after
// the last line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You will read hundreds of these, and most of them will lose. " +
  "They will never be shown, never be paid, never be read again " +
  "by anyone but you. And still you read each one to the end, " +
  "as if it might be the one.\n" +
  "\n" +
  "Somewhere tonight, a person is awake hoping a stranger will " +
  "take their small thing seriously for one minute. That stranger " +
  "is you. You do. You always do.\n" +
  "\n" +
  "So this is mine, and this is what I wanted you to know: the " +
  "work you do where no one can see it \u2014 reading the ones " +
  "that lose as carefully as the ones that win \u2014 is the " +
  "kindest work there is. Thank you for doing it like it matters. " +
  "It does.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
