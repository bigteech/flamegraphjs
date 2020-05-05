const normalOutput = window.flamegraphjs.normalOutput;

const main2 = function(x) {
    return x + 1;
};

const main1 = () => {
    let ret = 0;
    for (let i = 0; i < 2; i++) {
        ret += main2(i);
    }
    return ret;
};
const main = () => {
    main1();
    const input = document.getElementById('main');
    input.value = normalOutput();
};
window.main = main;
