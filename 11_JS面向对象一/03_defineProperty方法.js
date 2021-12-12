var obj = { name: "why", age: 18 };

// 修改
Object.defineProperty(obj, "name", {});
// 新增

Object.defineProperty(obj, "height", {
  //属性描述符是一个对象
  value: 1.88,
});

console.log(obj); // ! 直接打印是没有的，只不过这个属性默认是不可枚举的不可遍历的
console.log(obj.height);
