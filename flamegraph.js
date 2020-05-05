window.flamegraphjs = (function() {
    let threshold = 10;
    const output = [];
    const tmp = [];
    const normalOutput = () => {
        const ret = output.map(x => {
            return `
        ${x.lst}
        ${x.sample}
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
                tmp.push({
                    name,
                    dur: 0
                });
                performance.mark(name + 'start');
                const ret = fn(...arguments);
                performance.mark(name + 'end');
                const dur = getDuration(name);
                if (tmp.length > 1){
                    tmp[tmp.length - 2].dur -= dur;
                }
                const realDur =  dur + tmp[tmp.length - 1].dur;
                if(realDur <= threshold) {
                    tmp.pop();
                    return ret;
                }
                output.push({
                    lst: [...tmp].reverse().map(x => x.name).join('\n        '),
                    sample: getSampleByDur(realDur)
                });
                tmp.pop();
                return ret;
            };
        };
    };

    const getDuration = (name) => {
        return performance.measure(name, name + 'start', name + 'end').duration;
    };
    const getSampleByDur = (dur) => {
        return Math.ceil(dur * 1000);
    };
    const setThreshold = (x) => {
       threshold = x; 
    };

    return {
        setThreshold,
        collect,
        normalOutput
    };
})();
