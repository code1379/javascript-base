// 代码执行过程
var name = "why";

function foo(num) {
  console.log(m);
  var m = 10;
  var n = 20;
  // var name = "foo";
  console.log("foo");
}

foo(321);

// TODO 当我们查找一个变量时，真实的查找路径是沿着作用域链查找。
// FEC(函数执行上下文)中，除了有 AO 之外还有 scope chain(作用域链) VO + ParentScope(父级作用域，在函数定义的时候就会确认) === VO + GO
