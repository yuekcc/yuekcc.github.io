import fs from 'node:fs/promises';

export class CodePrinter {
  _code = [];
  print(str) {
    this._code.push(str);
  }

  get value() {
    return this._code.join('\n');
  }

  async writeFile(out) {
    await fs.writeFile(out, this.value, 'utf-8');
  }
}
