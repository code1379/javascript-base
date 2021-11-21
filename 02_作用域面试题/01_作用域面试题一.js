var n = 100;

function foo() {
  n = 200;
}

foo();

console.log(n);

// 1. 变量提升 GO n = undefined foo = 0x00001
// 2. 代码执行 n = 100;
// foo 执行 AO 没有，ParentScope -> GO， n = 200
