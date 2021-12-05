// 1. setTimeout

function hySetTimeout(fn, timeout) {
  // ! 隐藏细节
  fn();
  // fn.call("abc");
}

hySetTimeout(function () {
  // * 如果内部实现是作为独立函数调用，则 this 指向 window
  // * 如果内部实现 显式绑定了 "abc"
  // ! 这里的 this 指向什么其实跟我们 hySetTimeout 里面的实现是有关系的。
  console.log(this);
}, 2000);

// setTimeout 中是独立的调用这个函数
// 箭头函数例外
setTimeout(function () {
  console.log(this); // window
}, 2000);

// 2. 监听点击
const btn = document.querySelector(".box");

btn.onclick = function () {
  console.log(this);
  // 内部会拿到 btn
  // 相当于 在内部调用了  btn.onClick();
  // * 隐式绑定
};

btn.addEventListener("click", function () {
  // ! 可以添加多个事件
  console.log(this);
});

btn.addEventListener("click", function () {
  // ! 可以添加多个事件
  console.log(this);
});

btn.addEventListener("click", function () {
  // ! 可以添加多个事件
  console.log(this);
});

// TODO 将上面所有监听的函数都收集到一个数组里面。当发生点击的时候遍历数组，循环执行。fn.call(btn)，这样这个函数中的 this 就指向 btn 元素了。

// 3.数组.forEach/map/filter/find
// 高阶函数的调用
var names = ["abc", "cba", "nba"];

names.forEach(function (item) {
  // 当做独立的函数执行
  console.log(item, this);
});
// TODO 想要改变 forEach 中的 this，我们可以传递第二个参数修改 this 指向
const obj = { name: "dell" };
names.forEach(function (item) {
  console.log(item, this);
}, obj);

names.map(function (item) {
  console.log(item, this);
}, "cba");
