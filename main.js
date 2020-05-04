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
}

const collect = (moduleName) => {
    return (fn) => {
        return function() {
            const name = moduleName + "`" + (fn.name || 'anonymous');
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

const main3 = function(x){
    return x+1; 
}
const main2 = collect("src/main.js")(main3);

const main1 = collect("src/main.js")(() => {
    let ret = 0;
    for (let i = 0; i < 2; i++) {
        ret += main2(i);
    }
    return ret;
});
const all = function(){
    main1();
}
const mainAll = collect("src/main.js")(all);
const main = () => {
    mainAll();
    const input = document.getElementById('main');
    input.value = normalOutput();
};
window.main = main;
