function foo() {
  console.log(n);
  var n = 200;
  console.log(n);
}

var n = 100;
foo();

// 变量提升 GO n = undefined foo = 0x00001
// 代码执行 GEC GO n = 100
// foo 函数执行 FEC AO 变量提升 n = undefined 代码执行 undefined VO 中 n = 200;
