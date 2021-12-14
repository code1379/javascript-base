var obj = {
  name: "why",
  age: 18,
};

Object.defineProperty(obj, "address", {
  // ! 如果没有配置可枚举属性，默认是 false, 枚举为 true 时，可以展示出来。
  enumerable: false,
  // 配置属性
  configurable: false,
  // 这里可以给很多属性
  value: "北京市",
});

console.log(obj);
// 这里只能打印不出 address
//{ name: 'why', age: 18 }
