// Bundle budget: fail if the client JS total exceeds the budget.
// Budget = measured total (1,467,497 B) + ~15% headroom.
import { readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist', '_astro');
const BUDGET = 1_690_000; // bytes (~1.61 MB)

let total = 0;
for (const f of readdirSync(dir)) {
  if (!f.endsWith('.js')) continue;
  const size = statSync(join(dir, f)).size;
  total += size;
  console.log(`  ${(size / 1024).toFixed(1).padStart(10)} KiB  ${f}`);
}

console.log(`\nTotal client JS: ${(total / 1024 / 1024).toFixed(3)} MB (${total} bytes)`);
console.log(`Budget:          ${(BUDGET / 1024 / 1024).toFixed(3)} MB (${BUDGET} bytes)`);

if (total > BUDGET) {
  console.error(`\nFAIL: client JS total exceeds the ${BUDGET}-byte budget.`);
  process.exit(1);
}
console.log('OK: within budget.');
