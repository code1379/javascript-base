// 封装一个响应式的函数
let reactiveFns = [];
function watchFn(fn) {
  reactiveFns.push(fn);
}

// 对象的响应式（开发中常见）
const obj = {
  name: "dell",
  age: 18,
};

// TODO 1. 100 行响应式代码
function foo() {
  const name = obj.name;
  console.log(obj.name);
  console.log("你好啊，李银河");
  console.log("Hello World");
}

watchFn(foo);

function bar() {
  console.log("普通的函数");
  console.log("这个函数不需要有任何响应式");
}

// TODO 2. 200 行响应式代码
function zoo() {
  console.log(obj.age);
}

watchFn(zoo);

reactiveFns.forEach((fn) => fn());
