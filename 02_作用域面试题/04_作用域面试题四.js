var a = 100;

function foo() {
  console.log(a);
  return;
  var a = 100;
}

foo();

// 全局变量提升 GEC GO a=undefined foo=0x00001
// 代码执行 GO a=100
// 函数 foo 变量提升 AO  a=undefined 函数执行 打印 undefined 返回 undefined
