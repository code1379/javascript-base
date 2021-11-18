// 代码执行过程

console.log(name); // undefined
foo(); // 会打印 "foo"

function foo() {
  console.log(m);
  var m = 10;
  var n = 20;
  console.log("foo");
}

foo(); // 会打印 "foo"
var name = "why";

// foo 也在 window 对象上。
console.log(window);

// * 解析
// 编译阶段，函数不会执行。
var GlobalObject = {
  String: "类",
  window: GlobalObject,
  name: undefined,
  foo: "堆内存 存储 foo 函数  1.父级作用域[[scope]] 2. 函数的执行体(代码块) 返回内存地址 0xa00  => 指向堆内存地址",
};

// * 当执行 foo 的时候，会将 foo 的堆内存地址拿过来调用。
// 1. 创建函数执行上下文(FEC) functional executional context
// 2. 函数执行上下文中，会创建 AO 对象(Activation Object活跃对象 最后会被销毁，当函数不在被占用时，会被销毁)
// 2.1 AO 预编译 m = undefined | n = undefined |
// 3. 执行函数
// 4. 函数执行完成，弹出栈
// 5. 接着执行 ECStack 中的代码
