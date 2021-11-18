// 这些 js 代码，都是 js 引擎帮我们执行的
const name = "why";
console.log(name);

function foo() {
  console.log("foo");
}

foo();

/*
 * 上面的代码没法直接执行。
 * 需要 v8 引擎转换为 CPU 可以执行的 机器指令（CPU 只能运行 01010101） 但是你又不能乱转。随便拿个 0101110。那么谁帮助我们转换呢？ -- JS 引擎
 * 
 */
