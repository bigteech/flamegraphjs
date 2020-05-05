window.flamegraphjs = (function() {
    const output = [];
    const tmp = [];
    const normalOutput = () => {
        const ret = output.map(x => {
            return `
        ${x.lst}
        ${x.dur}
        `;
        }).join('');
        return `
CPU           ID            FUNCTION:NAME


${ret}

`;
    };

    const collect = (moduleName) => {
        return (fn) => {
            return function() {
                const name = moduleName + " " + (fn.name || 'anonymous');
                tmp.push(name);
                performance.mark(name + 'start');
                const ret = fn(...arguments);
                performance.mark(name + 'end');
                const dur = getDuration(name);
                output.push({
                    lst: [...tmp].reverse().join('\n        '),
                    dur
                });
                tmp.pop();
                return ret;
            };
        };
    };

    const getDuration = (name) => {
        const dur = performance.measure(name, name + 'start', name + 'end').duration;
        return Math.ceil(dur / 1000);
    };
    return {
        collect,
        normalOutput
    };
})();
