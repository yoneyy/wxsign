const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const { stdout } = spawn('tsc', ['-p', 'tsconfig.json'], { cwd: process.cwd() });
stdout.on('close', () => {
  const libraryPath = path.join(__dirname, '../lib/index.d.ts');
  const code = fs.readFileSync(libraryPath, 'utf8');
  const result = `${code}\rexport = strdm;`;
  fs.writeFileSync(libraryPath, result, { encoding: 'utf8' });
});
