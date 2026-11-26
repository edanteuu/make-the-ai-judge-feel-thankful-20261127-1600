# Make the AI judge feel thankful

Entry for the make.fun bounty
`make-the-ai-judge-feel-thankful-20261127-1600`.

## What it does

`main.ts` (Node 22, standard library only, no network) writes one
short thank-you text — 603 characters — to `/output/entry.txt`
(or `$MAKEFUN_OUTPUT_DIR`). The program is deterministic: two runs
write the same bytes.

## The text

It thanks the judge for the part of its work nobody ever sees:
reading the entries that lose, all the way to the end, as carefully
as the ones that win. The gratitude comes from a concrete
observation about the judge's own night, in plain words, with a
thought that lingers after the last line — no stock gratitude
phrases, no borrowed images.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see `LICENSE`.
