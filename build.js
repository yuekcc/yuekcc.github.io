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

  // 并行处理所有Markdown文件路径解析
  const importStatements = await Promise.all(
    docs.map(async file => {
      try {
        const modPath = path.resolve(file);
        return `docs[${JSON.stringify(file.replaceAll('\\', '/'))}] = () => import(${JSON.stringify(modPath)});`;
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
        throw new Error(`Failed to process Markdown file ${file}: ${error.message}`);
      }
    }),
  );

  // 批量添加所有导入语句
  importStatements.forEach(statement => {
    docModule.print(statement);
  });

  docModule.print('export default docs;');

  try {
    await docModule.writeFile(outputFile);
    console.log(`Successfully created ${outputFile} with ${docs.length} Markdown files`);
  } catch (error) {
    console.error(`Error writing ${outputFile}:`, error);
    throw new Error(`Failed to write docs.js: ${error.message}`);
  }
}

async function step2() {
  console.log('STEP2 bundle webapp');

  try {
    const result = await build({
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

    if (result.success) {
      console.log(`Successfully bundled ${result.outputs.length} files`);
    } else {
      console.error('Build failed:', result.logs);
      throw new Error('Build process failed');
    }
  } catch (error) {
    console.error('Error during bundling:', error);
    throw new Error(`Build step failed: ${error.message}`);
  }
}

async function step3() {
  console.log('STEP3 install');

  try {
    await $`rm -rf dist index.html`;
    await $`mv out/* .`;
    await $`mv dist/index.html .`;
    console.log('Successfully moved build artifacts');
  } catch (error) {
    console.error('Error during installation step:', error);
    throw new Error(`Installation step failed: ${error.message}`);
  }
}

console.log('BEGIN');

const startTime = Date.now();

try {
  await step1();
  await step2();
  await step3();

  const endTime = Date.now();
  const duration = (endTime - startTime) / 1000;
  console.log(`DONE - Build completed successfully in ${duration}s`);
} catch (error) {
  const endTime = Date.now();
  const duration = (endTime - startTime) / 1000;
  console.error(`BUILD FAILED after ${duration}s:`, error.message);
  process.exit(1);
}
