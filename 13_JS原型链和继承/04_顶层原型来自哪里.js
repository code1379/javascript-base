var obj1 = {}; // 创建了一个对象

var obj2 = new Object(); // 创建了一个对象

// 本质是一样的，obj1 是语法糖

function Person() {}

var p = new Person();
/**
 * 1. 在内存中创建一个对象
 *    var moni = {}
 * 2. this 的赋值
 *    this = moni
 * 3. 将 Person 函数的显式原型 prototype 赋值给前面创建出来的对象的隐式原型
 *    moni.__proto__ = Object.prototype
 * 4. 执行代码体
 * 5. 返回对象 return moni
 */

// obj2.__proto__ = Object.prototype
// 实例的隐式原型指向父类的 prototype

// ----------------------------------

var obj = { name: "why", age: 18 };

// Object.prototype
console.log(obj.__proto__);
console.log(Object.prototype);
console.log(obj.__proto__ === Object.prototype);

// [Function: Object] 本质上是一个 Function
console.log(Object);

// ! 这里面东西很多的，只不过都是不可枚举的
// [Object: null prototype] {}
console.log(Object.prototype);

// [Function: Object]
console.log(Object.prototype.constructor);

// 将所有的属性打印出来
// 1:00
console.log(Object.getOwnPropertyDescriptors(Object.prototype));
