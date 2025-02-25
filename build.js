import { build } from 'bun';
import fs from 'node:fs/promises';
import path from 'node:path';
import md from './build/bun-plugin-md';
import { CodePrinter } from './build/CodePrinter';
import { listDocs } from './build/doc-list';

async function step1() {
  console.log('STEP1 create doc-modules.js');
  const outputFile = 'doc-modules.js';

  const docModule = new CodePrinter();
  docModule.print(`const docModules = {}`);

  const docs = listDocs('docs');
  for (const file of docs) {
    const modPath = path.resolve(file);
    docModule.print(
      `docModules[${JSON.stringify(file.replaceAll('\\', '/'))}] = () => import(${JSON.stringify(modPath)});`,
    );
  }

  docModule.print('export default docModules;');
  await docModule.writeFile(outputFile);
}

async function step2() {
  console.log('STEP2 bundle webapp');

  await build({
    target: 'browser',
    plugins: [md()],
    entrypoints: ['./src/index.html'],
    outdir: 'out',
    splitting: true,
    minify: true,
    publicPath: '/',
    naming: {
      chunk: 'chunk/[hash].[ext]',
    },
  });
}

console.log('BEGIN');
await step1();
await step2();
console.log('DONE');
