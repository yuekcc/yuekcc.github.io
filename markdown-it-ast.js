export function markdownItAst(tokens) {
  function h(token, content) {
    return {
      type: token && token.type.replace('_open', ''),
      props: {
        tag: token?.tag,
        info: token?.info,
        level: token?.level,
        meta: token?.meta,
      },
      children: content ? [content]: [],
    }
  }

  let root = h(null);
  let curr = root;
  let stack = [];

  for (const token of tokens) {
    let tmp;
    if (token.nesting === 1) { // 1 表示 open
      tmp = h(token);
      curr.children.push(tmp);
      stack.push(curr);
      curr = tmp;
    } else if (token.nesting === -1) { // -1 表示关闭 
      tmp = stack.pop();
      curr = tmp;
    } else if (token.nesting === 0) { // 0 表示自关闭
      if (token.type = 'fence') {
        curr.children.push(h(token, token.content));
      } else {
        curr.children.push(token.content);
      }
    }
  }
  return root.children;
}
