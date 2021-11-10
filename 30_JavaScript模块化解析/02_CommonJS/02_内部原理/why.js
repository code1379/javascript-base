const info = {
  name: "why",
  age: 18,
  foo: function () {
    console.log("foo函数");
  },
};

setTimeout(() => {
  info.name = "kobe";
}, 1000);

setTimeout(() => {
  console.log(info);
}, 3000);

module.exports = info;
