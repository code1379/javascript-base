var n = 100;

function foo1() {
  console.log(n);
}

function foo2() {
  var n = 200;
  console.log(n);
  foo1();
}

foo2();

console.log(n);

// 全局作用域提升 GEC GO n=undefined foo1=0x00001 foo2=0x00002
// 代码执行 GO n = 100
// 函数 foo2 FEC 作用域提升 AO n=undefined 代码执行 n = 200 打印200
// 函数 foo1 FEC 作用域提升 AO 无 ParentScope GO 打印 100
