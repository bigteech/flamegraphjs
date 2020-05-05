const helperPluginUtils = require("@babel/helper-plugin-utils");
const parser = require("@babel/parser");
Object.defineProperty(exports, "__esModule", {
    value: true
});

const tmp = parser.parse(`window.jsflamegraph("path")("body")`, {
    sourceType: "script",
}).program.body[0].expression;

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
let count = 0;
exports.default = helperPluginUtils.declare((api, options) => {
    const {
        spec
    } = options;
    return {
        name: "wrapper-functions",
        visitor: {
            ArrowFunctionExpression(path, state) {
                if (!path.isArrowFunctionExpression()) return;
                if (path.node.done) {
                    return;
                }
                path.node.done = 1;
                path.replaceWith(getCollectAst(api.types, state.file.opts.filename, path.node));
            }
        }
    };
});
