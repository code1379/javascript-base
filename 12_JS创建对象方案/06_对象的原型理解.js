//我们每个对象都有一个 [[prototype]]，这个属性可以称之为对象的原型（隐式原型）。
var obj = { name: "why" }; // [[prototype]]
var info = {}; // [[prototype]]

// TODO 1. 解释原型的概念和看一下原型
/**
 * 早期的 ECMA 是没有规范如何查看 [[prototype]] 的。
 * 很多浏览器为了让我们看到所谓的 [[prototype]]，给对象提供了一个属性，可以让我们查看一些这个原型对象（浏览器提供） __proto__ 不是所有浏览器都支持
 */

console.log(obj.__proto__); // {}
console.log(info.__proto__); // {}

var obj = { name: "why", __proto__: {} };

// * ES5 之后获取原型
// ! 因为写法太长，我们一般使用 __proto__;
console.log(Object.getPrototypeOf(obj));

// TODO 2. [[prototype]] 原型有什么用呢？
// ! 当我们从一个对象中获取某一个属性时，它会触发[[get]]操作
// 简单分为两步 1. 在当前对象中去查找对应的属性，如果找到就直接使用 2.如果没有找到，那么会沿着原型去查找
// obj.age = 18;
obj.__proto__.age = 19;
console.log(obj.age);
// 为了方便继承
