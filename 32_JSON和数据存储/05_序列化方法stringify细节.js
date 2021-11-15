const obj = {
  name: "why",
  age: 18,
  friends: {
    name: "kobe",
  },
  hobbies: ["篮球", "足球"],
  toJSON: function () {
    return "123456";
  },
};

// TODO 需求：将上面的的对象转成 JSON 字符串

// 1. 直接转换
const jsonString1 = JSON.stringify(obj);
console.log(jsonString1);

// 2. stringify 第二个参数 replacer
// 2.1 传入数组：设定那些是需要转换
const jsonString2 = JSON.stringify(obj, ["name", "friends"]);

console.log(jsonString2);

// 2.2 传入回调函数：

const jsonString3 = JSON.stringify(obj, (key, value) => {
  if (key === "age") {
    return value + 1;
  }
  return value;
});

console.log(jsonString3);

// 3. stringify第三个参数 space

const jsonString4 = JSON.stringify(obj, null, 2);
console.log(jsonString4);

// 4.如果 obj 对象中有 toJSON 方法
