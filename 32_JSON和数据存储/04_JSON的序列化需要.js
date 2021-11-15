const obj = {
  name: "why",
  age: 18,
  friends: {
    name: "kobe",
  },
  hobbies: ["篮球", "足球"],
};

console.log(obj.toString());
// TODO 1. 将对象转成JSON格式的字符串

localStorage.setItem("obj", JSON.stringify(obj)); // ! 不使用 JSON 序列化的话，对象转字符串会是  '[Object object]' 这样的字符串

// TODO 2. 将 JSON 格式的字符串转回对象

const info = JSON.parse(localStorage.getItem("obj"));

console.log(info);
