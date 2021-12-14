var obj = {
  name: "why",
  age: 18,
};

// [[get]] 操作
// 1. 在当前的对象中查找属性
// 2. 如果没有找到，这个时候会去原型(__proto__)对象上查找

obj.__proto__ = {
  // address: "北京市",
};

obj.__proto__.__proto__ = {
  // address: "广州市",
};

obj.__proto__.__proto__.__proto__ = {
  address: "上海市",
};

// 原型链

console.log(obj.address);
