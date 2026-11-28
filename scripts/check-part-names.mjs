// We never name the parts inside our products (modems, chips, sensors) in the docs. See AGENTS.md.
// Runs before every build (npm "prebuild"), so CI fails if a part name is published.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const PART_NAMES = /SIMCom|A767\d|SIM7\d{3}|Quectel|u-blox|ESP32|Espressif|ADS1262|ADXL355|W5500|ATGM336|TPS63020|BQ24073/i;
const ROOTS = ['src', 'public', 'astro.config.mjs'];
const TEXT = /\.(mdx?|astro|[cm]?[jt]sx?|json|css|html|svg|txt|ya?ml)$/i;

const files = (path) =>
  statSync(path).isDirectory()
    ? readdirSync(path).flatMap((name) => files(join(path, name)))
    : TEXT.test(path) ? [path] : [];

const hits = [];
for (const file of ROOTS.flatMap(files)) {
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    const m = line.match(PART_NAMES);
    if (m) hits.push(`${file}:${i + 1}: ${m[0]}`);
  });
}

if (hits.length) {
  console.error('Component part names must not appear in the docs (see AGENTS.md):\n' + hits.join('\n'));
  process.exit(1);
}
console.log('check-part-names: no component part names found');
