import {markdownItAst} from './markdown-it-ast.js'
import {createMarkdownExit} from 'markdown-exit'
import doc from './docs/2021/aes-decrypt.md' assert {type: 'text'}

const md = createMarkdownExit();
const tokens = md.parse(doc, {})
//console.log(tokens)
const result = markdownItAst(tokens)
console.log(result)
