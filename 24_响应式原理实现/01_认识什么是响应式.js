// 变量的响应式
let m = 100;

// 一段代码
console.log(m);
console.log(m * 2);
console.log(m ** 2);
console.log("hello world");

// TODO 当 m 发生变化时，我希望上面这段代码可以重新执行

m = 200;

// 对象的响应式（开发中常见）
const obj = {
  name: "dell",
  age: 18,
};

// TODO 1. 100 行响应式代码
const name = obj.name;
console.log(obj.name);

// TODO 2. 200 行响应式代码
console.log(obj.age);
