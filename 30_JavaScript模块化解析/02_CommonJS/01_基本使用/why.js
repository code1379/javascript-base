const name = "why";
const age = 18;
function sum(num1, num2) {
  return num1, num2;
}

// 1. 导出方案 module.exports
// module(是why.js 这个文件本身的对象)，对象上有个属性叫 exports（也是一个对象）
module.exports = {
  name,
  age,
  sum,
};

// 2. exports
