// 代码执行过程
var age = 100;

function foo(num) {
  console.log(m);
  var m = 10;
  var n = 20;

  function bar() {
    console.log(age); // ! 如果一直找到 GO 都没有 age 的话，会报错 age 没有定义错误
  }

  bar();
}

foo(321);

// bar 的父级作用域是 foo，foo 的父级作用域是 GO
