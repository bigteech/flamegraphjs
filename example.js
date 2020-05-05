const addOne = (x) => {
    return x +1; 
}


const sum = (x) => {
    let ret = 0;
    for (let i=0;i<x;i++){
        ret += addOne(x); 
    }
    return ret;
}


window.main = () => {
    sum(22);
    const m = window.flamegraphjs.normalOutput();
    document.getElementById('main').value = m;
}

