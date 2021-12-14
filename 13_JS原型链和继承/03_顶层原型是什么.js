var obj = { name: "why" };
console.log(obj.address);

// 到底找到那一层对象之后停止继续查找了呢？
// 字面对象 obj 的原型是 [Object: null prototype] {}
// [Object: null prototype] {} 就是顶层的原型
console.log(obj.__proto__);

// null
console.log(obj.__proto__.__proto__);

// obj.__proto__ => [Object: null prototype] {}
// 那么这个顶层的原型哪里来的呢？
