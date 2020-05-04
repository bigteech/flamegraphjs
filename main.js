const collect = window.flamegraphjs.collect;
const normalOutput = window.flamegraphjs.normalOutput;
const main3 = function(x){
    return x+1; 
};
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
};
const mainAll = collect("src/main.js")(all);
const main = () => {
    mainAll();
    const input = document.getElementById('main');
    input.value = normalOutput();
};
window.main = main;
