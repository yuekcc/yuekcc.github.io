import { Glob } from 'bun';
import path from 'node:path';

export function listDocs(root) {
  const glob = new Glob('**/*.md');
  return Array.from(glob.scanSync(root)).map(file => path.join(root, file));
}
