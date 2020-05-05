const normalOutput = window.flamegraphjs.normalOutput;

const main2 = function (x) {
    return x + 1;
};

const main1 = window.flamegraphjs.collect('example.js')(() => {
    let ret = 0;
    for (let i = 0; i < 2; i++) {
        ret += main2(i);
    }
    return ret;
});
const main = window.flamegraphjs.collect('example.js')(() => {
    main1();
    const input = document.getElementById('main');
    input.value = normalOutput();
});
window.main = main;
