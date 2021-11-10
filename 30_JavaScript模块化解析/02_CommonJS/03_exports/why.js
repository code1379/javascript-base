const name = "why";
const age = 18;
function sum(num1, num2) {
  return num1 + num2;
}

// 源码
// module.exports = {};
// exports = module.exports

// 第二种导出方式
exports.name = name; // ===  module.exports.name = name
exports.age = age; // === module.exports.age = age
exports.sum = sum; // === module.exports.sum = sum

// ! 最终能导出的一定是 module.exports
// ! 错误导出方式，这里相当于 exports 指向了别的引用
exports = {
  name,
  age,
  sum,
};
