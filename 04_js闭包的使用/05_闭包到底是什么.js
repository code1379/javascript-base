function foo() {
  // 添加代码
  var name = "foo";
  function bar() {
    console.log("bar", name);
  }
  return bar;
}

var fn = foo();
fn();

// ECStack 调用栈中才有 GEC， GEC VO: GO fn=undefined foo=0x00001 堆内存中 GO 对象 和 fn 对象
// FEC VO:AO var=0x00002 return 0x00002 foo 执行才会创建 bar 函数对象。 执行完之后 foo 的 FEC 会销毁，因为 bar 中没有用到上级父作用域中的任何变量
// fn执行会创建函数执行上下文 VO:AO bar 的 parentScope

// ===
// 在 bar 函数中打印 foo 作用域中的 name

// * 闭包是由两部分组成的
// 函数 + 可以访问的自由变量
