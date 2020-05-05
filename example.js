const addOne = (x) => {
    return x +1; 
};
const addTwo = (x) => {
    return x + 2; 
};




const sum = (x) => {
    let ret = 0;
    for (let i=0;i<x;i++){
        if(i % 2  === 0) {
            ret += addTwo(i); 
        } else {
            ret += addOne(i); 
        }
    }
    return ret;
};
window.flamegraphjs.setThreshold(0.0001);
window.main = () => {
    sum(2);
    const m = window.flamegraphjs.normalOutput();
    document.getElementById('main').value = m;
};

