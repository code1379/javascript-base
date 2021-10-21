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
    },
    set(newValue) {
      console.log(`监听到obj对象的${key}属性被设置了`);
      value = newValue;
    },
  });
});

console.log(obj.name);
obj.name = "kobe";
