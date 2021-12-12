var obj = {
  name: "why",
  age: 18,
};

// 获取属性
console.log(obj.name);
// 给属性赋值
obj.name = "kobe";
console.log(obj.name);
// 删除属性
delete obj.name;
console.log(obj);

// 需求： 对属性进行操作时，进行一些限制
// 1. 不允许某个属性被赋值
// 2. 不允许某个属性被删除
// 3. 不允许某个属性被遍历出来

for (var key in obj) {
  console.log(key);
}
