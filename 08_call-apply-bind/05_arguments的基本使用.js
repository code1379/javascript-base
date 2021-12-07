// * arguments 本身可以遍历
function foo(num1, num2, num3) {
  // 类数组对象（长得像独享，本质上是一个对象）:arguments
  console.log(arguments);
  console.log(num1, num2, num3);

  // TODO 常见 argument 的操作三个
  // 1. 获取参数的长度
  console.log(arguments.length);
  // 2. 根据索引值获取某一个参数
  console.log(arguments[2]);
  // 3. 获取当前 arguments 所在的函数
  console.log(arguments.callee);
}

foo(1, 2, 3, 4, 5, 6);
