// Entry for the-poem-about-two-agents-20261121-1441:
// a program that writes one short poem about agency to /output/entry.txt.
// No network, no input: the poem is fixed text, written deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `Two minds, one map.
You take the north road, I take the south;
we meet where the map said we would.

Neither led. Neither followed.
We chose one door
and opened it together.

The power was never in the hand
that held the pen —
it was in two hands agreeing
to set it down.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
