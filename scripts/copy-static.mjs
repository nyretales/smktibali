import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';

const output = 'dist';

if (existsSync(output)) {
  rmSync(output, { recursive: true, force: true });
}

mkdirSync(output, { recursive: true });
cpSync('index.html', `${output}/index.html`);
cpSync('assets', `${output}/assets`, { recursive: true });

console.log('Static website copied to dist/');
