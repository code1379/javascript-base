function foo() {
  var name = "foo";
  var age = 18;
  function bar() {
    console.log(name);
    console.log(age);
  }
  return bar;
}

var fn = foo();
fn();

// ! 为什么该销毁的东西没有销毁？

// TODO 1. ECStack 调用栈
// TODO 2. GEC 全局指向上下文 VO=GO=0x100={Date, String, foo: 0x00001, fn: undefined}
