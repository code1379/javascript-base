"use strict";

function foo() {
  console.log(this); // 严格模式下，自执行函数指向 undefined
}

foo();

var obj = { name: "why", foo: foo };

obj.foo();

var bar = obj.foo;
bar();

// * setTimeout 对于我们来说，是一个黑盒子。 因为这个函数是浏览器实现的。

// ! 没有绑定的话，一般就是自执行函数
// ! 我们猜测里面的不是直接执行这个函数。猜测里面进行了 window 绑定。

setTimeout(() => {
  console.log(this); // 上级作用域中的 this
}, 1000);

setTimeout(function () {
  console.log(this); // Window
}, 1000);
