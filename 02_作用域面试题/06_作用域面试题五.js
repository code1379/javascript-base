function foo() {
  var a = (b = 10);
  // var a = b = 10
  // 转换为 var a = 10;
  // b = 10
}

foo();

// console.log(a); // ! 代码报错 a 没有定义

console.log(b); // 100
