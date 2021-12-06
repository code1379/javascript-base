// 结论： new 关键字不能和 apply/call 一起来使用

// new bind

function foo() {
  console.log(this);
}

// 先显式绑定
var bar = foo.bind("aaa");

// 显示绑定单独执行， this 是 "aaa"
bar();

// 直接 new 的话。 this 是 foo 类创建的一个新对象 {}
var obj = new bar();
