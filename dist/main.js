<ref *3> NodePath {
  parent: Node {
    type: 'Program',
    start: 0,
    end: 415,
    loc: SourceLocation { start: [Position], end: [Position] },
    sourceType: 'module',
    body: [ [Node], [Node], [Node], [Node], [Node], [Node] ],
    directives: []
  },
  hub: <ref *1> Hub {
    file: File [Map] {
      _c: Map(0) {},
      dynamicData: {},
      pipeline: Pipeline {},
      log: [Logger],
      opts: [Object],
      parserOpts: [Object],
      pluginVisitors: [Array],
      pluginPasses: [Array],
      metadata: [Object],
      dynamicImportTypes: {},
      dynamicImportIds: {},
      dynamicImports: [],
      declarations: {},
      usedHelpers: {},
      path: [NodePath],
      ast: [Node],
      code: 'const normalOutput = window.flamegraphjs.normalOutput;\n' +
        '\n' +
        'const main2 = function(x) {\n' +
        '    return x + 1;\n' +
        '};\n' +
        '\n' +
        'function main3(){\n' +
        "    console.log('22l');\n" +
        '}\n' +
        'const main1 = () => {\n' +
        '    let ret = 0;\n' +
        '    for (let i = 0; i < 2; i++) {\n' +
        '        ret += main2(i);\n' +
        '    }\n' +
        '    return ret;\n' +
        '};\n' +
        'const main = () => {\n' +
        '    main1();\n' +
        "    const input = document.getElementById('main');\n" +
        '    input.value = normalOutput();\n' +
        '};\n' +
        'window.main = main;\n',
      shebang: '',
      hub: [Circular *1],
      scope: [Scope]
    },
    options: undefined
  },
  contexts: [
    TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    }
  ],
  data: {},
  shouldSkip: false,
  shouldStop: false,
  removed: false,
  state: undefined,
  opts: {
    FunctionDeclaration: { enter: [Array] },
    FunctionExpression: { enter: [Array] },
    ArrowFunctionExpression: { enter: [Array] },
    _exploded: {},
    _verified: {},
    BlockStatement: { exit: [Array] },
    Program: { exit: [Array] },
    ThisExpression: { enter: [Array] },
    Identifier: { enter: [Array] },
    JSXIdentifier: { enter: [Array] }
  },
  skipKeys: {},
  parentPath: <ref *2> NodePath {
    parent: Node {
      type: 'File',
      start: 0,
      end: 415,
      loc: [SourceLocation],
      program: [Node],
      comments: [],
      tokens: [Array]
    },
    hub: <ref *1> Hub { file: [File [Map]], options: undefined },
    contexts: [ [TraversalContext] ],
    data: {},
    shouldSkip: false,
    shouldStop: false,
    removed: false,
    state: undefined,
    opts: {
      FunctionDeclaration: [Object],
      FunctionExpression: [Object],
      ArrowFunctionExpression: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      Identifier: [Object],
      JSXIdentifier: [Object]
    },
    skipKeys: {},
    parentPath: null,
    context: TraversalContext {
      queue: [Array],
      parentPath: undefined,
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    },
    container: Node {
      type: 'File',
      start: 0,
      end: 415,
      loc: [SourceLocation],
      program: [Node],
      comments: [],
      tokens: [Array]
    },
    listKey: undefined,
    inList: false,
    parentKey: 'program',
    key: 'program',
    node: Node {
      type: 'Program',
      start: 0,
      end: 415,
      loc: [SourceLocation],
      sourceType: 'module',
      body: [Array],
      directives: []
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [Circular *2],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype],
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    type: 'Program',
    typeAnnotation: null
  },
  context: TraversalContext {
    queue: [
      [NodePath],
      [NodePath],
      [Circular *3],
      [NodePath],
      [NodePath],
      [NodePath]
    ],
    parentPath: <ref *2> NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: null,
      context: [TraversalContext],
      container: [Node],
      listKey: undefined,
      inList: false,
      parentKey: 'program',
      key: 'program',
      node: [Node],
      scope: [Scope],
      type: 'Program',
      typeAnnotation: null
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype],
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    state: undefined,
    opts: {
      FunctionDeclaration: [Object],
      FunctionExpression: [Object],
      ArrowFunctionExpression: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      Identifier: [Object],
      JSXIdentifier: [Object]
    },
    priorityQueue: []
  },
  container: [
    Node {
      type: 'VariableDeclaration',
      start: 0,
      end: 54,
      loc: [SourceLocation],
      declarations: [Array],
      kind: 'const'
    },
    Node {
      type: 'VariableDeclaration',
      start: 56,
      end: 104,
      loc: [SourceLocation],
      declarations: [Array],
      kind: 'const'
    },
    Node {
      type: 'FunctionDeclaration',
      start: 106,
      end: 149,
      loc: [SourceLocation],
      id: [Node],
      generator: false,
      expression: false,
      async: false,
      params: [],
      body: [Node]
    },
    Node {
      type: 'VariableDeclaration',
      start: 150,
      end: 272,
      loc: [SourceLocation],
      declarations: [Array],
      kind: 'const'
    },
    Node {
      type: 'VariableDeclaration',
      start: 273,
      end: 394,
      loc: [SourceLocation],
      declarations: [Array],
      kind: 'const'
    },
    Node {
      type: 'ExpressionStatement',
      start: 395,
      end: 414,
      loc: [SourceLocation],
      expression: [Node]
    }
  ],
  listKey: 'body',
  inList: true,
  parentKey: 'body',
  key: 2,
  node: Node {
    type: 'FunctionDeclaration',
    start: 106,
    end: 149,
    loc: SourceLocation { start: [Position], end: [Position] },
    id: Node {
      type: 'Identifier',
      start: 115,
      end: 120,
      loc: [SourceLocation],
      name: 'main3'
    },
    generator: false,
    expression: false,
    async: false,
    params: [],
    body: Node {
      type: 'BlockStatement',
      start: 122,
      end: 149,
      loc: [SourceLocation],
      body: [Array],
      directives: []
    }
  },
  scope: Scope {
    uid: 2,
    parent: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype],
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    hub: <ref *1> Hub { file: [File [Map]], options: undefined },
    parentBlock: Node {
      type: 'Program',
      start: 0,
      end: 415,
      loc: [SourceLocation],
      sourceType: 'module',
      body: [Array],
      directives: []
    },
    block: Node {
      type: 'FunctionDeclaration',
      start: 106,
      end: 149,
      loc: [SourceLocation],
      id: [Node],
      generator: false,
      expression: false,
      async: false,
      params: [],
      body: [Node]
    },
    path: [Circular *3],
    labels: Map { _c: Map(0) {} },
    references: [Object: null prototype] {},
    bindings: [Object: null prototype] {},
    globals: [Object: null prototype] {},
    uids: [Object: null prototype] {},
    data: [Object: null prototype] {}
  },
  type: 'FunctionDeclaration',
  typeAnnotation: null
}
