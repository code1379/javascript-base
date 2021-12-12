// var message = "Hello world!";
// console.log(message);

//* with 语句： 可以形成自己的作用域
var obj = {
  name: "why",
  age: 18,
  message: "obj message",
};
function foo() {
  function bar() {
    // ! 如果全局也没有 message 会报错
    // console.log(message);

    with (obj) {
      // 当前 obj 中如果没有，还会在 obj 所在作用域 和上层作用域中找
      console.log(message);
    }
  }
  bar();
}

foo();

var info = { name: "kobe" };

with (info) {
  console.log(name);
}

// ! 那么 with 有什么用呢？
// - 可以给函数，或者其他的专门执行一些代码的代码块，我们专门给它指定查找变量的对象。我们可以明确的传入

// * 这个只要知道一下就好。不推荐使用 with
// * 特别是严格模式下 "use strict"; 严格模式下不允许使用 with 语句
