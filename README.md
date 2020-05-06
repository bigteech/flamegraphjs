#### 作用
在运行时统计函数执行时间，生成flamegraph。   

#### 原理
babel plugin 织入代码，类似java aspectj编译时增强。   
javascript runtime 使用 performance.measure 得到duration 进而算出sample   
javascript runtime 序列化函数栈   
flamegraph.pl 生成svg用来浏览器访问   

#### 使用
npm run trans  静态织入代码  
npm run gensvg 生成svg

####  api
window.flamegraphjs.normalOutput() 得到采样数据   
window.flamegraphjs.setThreshold(0.0001) 设置采样阈值，消除噪音
