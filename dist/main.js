const addOne = window.flamegraphjs.collect('example.js 1:15')(x => {
    return x + 1;
});

const sum = window.flamegraphjs.collect('example.js 6:12')(x => {
    let ret = 0;
    for (let i = 0; i < x; i++) {
        ret += addOne(x);
    }
    return ret;
});

window.main = window.flamegraphjs.collect('example.js 15:14')(() => {
    sum(22);
    const m = window.flamegraphjs.normalOutput();
    document.getElementById('main').value = m;
});

