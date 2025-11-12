import { build, $ } from 'bun';
import path from 'node:path';
import md from './build/bun-plugin-md';
import { CodePrinter } from './build/CodePrinter';
import { listDocs } from './build/doc-list';

async function step1() {
  console.log('STEP1 create docs.js');
  const outputFile = 'docs.js';

  const docModule = new CodePrinter();
  docModule.print(`const docs = {}`);

  const docs = listDocs('docs');
  for (const file of docs) {
    const modPath = path.resolve(file);
    docModule.print(
      `docs[${JSON.stringify(file.replaceAll('\\', '/'))}] = () => import(${JSON.stringify(modPath)});`,
    );
  }

  docModule.print('export default docs;');
  await docModule.writeFile(outputFile);
}

async function step2() {
  console.log('STEP2 bundle webapp');

  await build({
    target: 'browser',
    plugins: [md()],
    entrypoints: ['./src/index.html'],
    outdir: 'out/dist',
    splitting: true,
    minify: true,
    publicPath: '/dist/',
    naming: {
      chunk: 'chunk-[hash].[ext]',
    },
  });
}

async function step3() {
  console.log('STEP3 install');

  await $`rm -rf dist index.html`
  await $`mv out/* .`
  await $`mv dist/index.html .`
}

console.log('BEGIN');
await step1();
await step2();
await step3();
console.log('DONE');
