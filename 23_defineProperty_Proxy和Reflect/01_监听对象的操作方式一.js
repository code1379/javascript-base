const obj = {
  name: "why",
  age: 18,
};

// Object.defineProperty(obj, "name", {
//   get: function () {
//     console.log("监听到obj对象的name属性被访问了");
//     // return undefined;
//   },
//   set: function () {
//     console.log("监听到obj对象的name属性被设置了");
//   },
// });

Object.keys(obj).forEach((key) => {
  let value = obj[key];
  Object.defineProperty(obj, key, {
    get() {
      console.log(`监听到obj对象的${key}属性被访问了`);
      // 默认返回 undefined
      return value;
    },
    set(newValue) {
      console.log(`监听到obj对象的${key}属性被设置了`);
      // ! 因为是闭包，所以我们设置 value 的值就可以
      value = newValue;
    },
  });
});

obj.name = "kobe";
obj.age = 30;

console.log(obj.name);
console.log(obj.age);
