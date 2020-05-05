const helperPluginUtils = require("@babel/helper-plugin-utils");
const parser = require("@babel/parser");
Object.defineProperty(exports, "__esModule", {
    value: true
});

const tmp = parser.parse(`window.flamegraphjs.collect("path")("body")`, {
    sourceType: "script",
}).program.body[0].expression;

const tmp2 = parser.parse(`var name = window.flamegraphjs.collect("path")("body")`, {
    sourceType: "script",
}).program.body[0];


const getCollectAst = (t, path, body) => {
    const ret = {
        ...tmp
    };
    ret.callee = {
        ...tmp.callee
    };
    ret.arguments = [body];
    ret.callee.arguments = [t.stringLiteral(path)];
    return t.expressionStatement(ret);
};
const getCollectAst2 = (t, path, body) => {
    const name = body.id.name;
    const ret = {
        ...tmp2
    };
    ret.declarations = [...ret.declarations];
    ret.declarations[0] = {
        ...ret.declarations[0]
    };
    ret.declarations[0].id.name = name;

    ret.declarations[0].init = {
        ...ret.declarations[0].init
    };
    const caller = ret.declarations[0].init;

    caller.callee = {
        ...caller.callee
    };
    caller.arguments = [body];
    caller.callee.arguments = [t.stringLiteral(path)];
    return t.variableDeclaration('var', ret.declarations);
};

const trans = (path, state, api) => {
    if (path.node.done) {
        return;
    }
    path.node.done = 1;
    const start = path.node.loc.start;
    path.replaceWith(getCollectAst(api.types, state.file.opts.filename + ` ${start.line}:${start.column}`, path.node));

};

const trans2 = (path, state, api) => {
    if (path.node.done) {
        return;
    }
    path.node.done = 1;
    path.replaceWith(getCollectAst2(api.types, state.file.opts.filename, path.node));

};


exports.default = helperPluginUtils.declare((api, options) => {
    const {
        spec
    } = options;
    return {
        name: "wrapper-functions",
        visitor: {
            FunctionDeclaration(path, state) {
                if (!path.isFunctionDeclaration()) return;
                trans2(path, state, api);
            },
            FunctionExpression(path, state) {
                if (!path.isFunctionExpression()) return;
                trans(path, state, api);
            },
            ArrowFunctionExpression(path, state) {
                if (!path.isArrowFunctionExpression()) return;
                trans(path, state, api);
            }
        }
    };
});
