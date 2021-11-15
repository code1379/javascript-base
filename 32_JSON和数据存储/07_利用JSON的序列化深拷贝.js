const obj = {
  name: "why",
  age: 18,
  friends: {
    name: "kobe",
  },
  hobbies: ["篮球", "足球"],
  foo: function () {
    console.log(foo);
  },
};

// TODO 将 obj 对象的内容放到 info 变量中
// 1. 引用赋值
const info = obj;
obj.age = 100;

console.log(info.age);
// 2. 浅拷贝
const info2 = { ...obj }; // 或者使用 Object.assign({}, obj)
obj.age = 1000;
console.log(info2.age);

obj.friends.name = "james";
console.log(info.friends.name);

// 3. 利用 stringify 和 parse 实现深拷贝( JSON.parse stringify 本身不会对 函数进行处理 )
const info3 = JSON.parse(JSON.stringify(obj));

obj.friends.name = "curry";
console.log(info3.friends.name);
console.log(info3);
