var obj = {
  name: "dell",
  age: 18,
};

// TODO 1. 禁止对象继续添加新的属性
Object.preventExtensions(obj);

obj.height = 1.88;
obj.address = "广州市";

console.log(obj);

// TODO 2. 禁止对象配置/删除里面属性。 因为默认的对象的 configurable = true
// 1.对对象进行遍历
// for (var key in obj) {
//   Object.defineProperty(obj, key, {
//     configurable: false,
//     enumerable: true,
//     writable: true,
//     value: obj[key],
//   });
// }
// 2. seal
Object.seal(obj);
delete obj.name;
console.log(obj.name);

// TODO 3. 让属性不可以吸修改（writable：false）
Object.freeze(obj);
obj.name = "kobe";
console.log(obj.name);
