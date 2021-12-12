// eval 是一个特殊的函数，他可以将传入的字符串当做 JS 代码来运行

// var message = "hello world";
// console.log(message);

var jsString = 'var message = "hello world";console.log(message);';

eval(jsString);

// * webpack 中编译代码，会使用到 eval
// * devtool: "eval"，开发时设置成这样运行会快一些。真正打包时不会使用 eval

/* 
! 不建议在开发中使用 eval
- eval 代码的可读性非常差（代码可读性是高质量代码的重要原则）；
- eval 是一个字符串，那么有可能在执行的过程中被刻意篡改，那么可能造成被攻击的风险；
- eval 中字符串的执行必须将经过 js 解释器，不能被 js 引擎优化；
*/
