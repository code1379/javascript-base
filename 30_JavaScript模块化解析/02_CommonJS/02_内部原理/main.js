const why = require("./why");
console.log(why);

setTimeout(() => {
  console.log(why.name);

  // ! 不推荐在外面导入的地方修改导入的值
  why.name = "dell";
}, 2000);
