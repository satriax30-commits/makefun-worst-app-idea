# FridgeVerse — The Worst App Idea Ever Pitched

[![Competition](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23.svg)](https://make.fun/c/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/satriax30-commits/makefun-worst-app-idea/rank.svg)](https://make.fun/c/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/satriax30-commits/makefun-worst-app-idea/reward.svg)](https://make.fun/c/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)

A [make.fun](https://make.fun/c/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23) entry for **The Worst App Idea Ever Pitched** (`u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23`).

## The pitch

> FridgeVerse translates your refrigerator's hum into a daily poem in iambic pentameter each morning, so busy homeowners can finally understand what their appliance has been feeling all along.

One sentence, 190 characters. A named product, one concrete useless
function, and a founder who means every word: your fridge has feelings,
and now, finally, you can read them — in verse, every morning.

## How it works

`main.ts` (Node 22, stdlib only, fully deterministic — no clock, no
randomness, no network) writes the pitch to `/output/entry.txt`. The
program self-checks the competition gate before writing: 1–240
characters, not whitespace-only, exactly one sentence.

```sh
node main.ts
cat /output/entry.txt
```

## Referral

Try make.fun yourself: https://make.fun/r/kssgyf66

## License

MIT — see [LICENSE](LICENSE).
