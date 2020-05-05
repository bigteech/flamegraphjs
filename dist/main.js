const addOne = window.flamegraphjs.collect('example.js 1:15')(x => {
    return x + 1;
});
const addTwo = window.flamegraphjs.collect('example.js 4:15')(x => {
    return x + 2;
});

const sum = window.flamegraphjs.collect('example.js 11:12')(x => {
    let ret = 0;
    for (let i = 0; i < x; i++) {
        if (i % 2 === 0) {
            ret += addTwo(i);
        } else {
            ret += addOne(i);
        }
    }
    return ret;
});
window.flamegraphjs.setThreshold(0.0001);
window.main = window.flamegraphjs.collect('example.js 23:14')(() => {
    sum(2);
    const m = window.flamegraphjs.normalOutput();
    document.getElementById('main').value = m;
});

