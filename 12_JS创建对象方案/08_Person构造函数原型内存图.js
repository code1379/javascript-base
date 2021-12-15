function Person() {}
// * new 一个对象时，会把 对象的 __proto__ 指向 构造函数的 prototype 对象。
var p1 = new Person();
var p2 = new Person();

/**
 * Person 对象
 * parentScope
 * prototype(Person 函数的原型对象) Person.prototype
 * 函数的执行体(var p1 = new Person()) p1.__proto__
 */

// 都为 true
// console.log(p1.__proto__ === Person.prototype);
// console.log(p2.__proto__ === Person.prototype);

// TODO 1. 给 p1 设置 name
// p1.name = "why";
// TODO 2. 给 原型添加 name
p1.__proto__.name = "kobe";
Person.prototype.name = "james";
p2.__proto__.name = "curry";

console.log(p1.name);
console.log(p2.name);
