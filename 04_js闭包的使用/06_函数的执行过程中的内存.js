var message = "hello";
function foo() {
  var name = "foo";
  var age = 18;
}

function test() {
  console.log("test");
}

foo();
test();

// ! EC stack 调用（执行上下文）栈 中执行 上下文 context
// TODO 预解析的时候，会生成作用域，函数会指向对应的 堆内存（函数内代码并未执行）

// ---
// TODO 0. GO 会最先创建好（GO不会被销毁）
// TODO 1. ECStack（调用栈）
// TODO 2.1 创建全局执行上下文 VO=GO=0x100={Date, String, message: undefined, foo: 0x00001堆内存中有 1.函数的作用域 parentScope:GO 2. 函数体的字符串 , test: 0x00002}
// * 相当于 1. GO中的 foo指向0x00001 2. 函数中的 parentScope 指向GO。两者相互指向
// TODO 2.2 GO中的{test: 0x00002 堆内存中有 1.函数的作用域 parentScope:GO 2. 函数体的字符串}
// TODO 3. 函数 foo 执行
// TODO 3.1 先进行预解析，创建 FEC（函数执行上下文 foo），VO=AO=0x200={name: undefined, age: undefined} 这里相当于 函数执行上下文中 VO 指向了 0x200
// * 函数执行只会创建 FEC，FEC 中存储 VO。函数预解析的时候，会创建 {parentScope, VO, 函数体}
// * 函数执行完毕，如果没有引用，将销毁FEC（别的地方没有引用的话会销毁 VO 指向）
// TODO 3.2 执行代码 VO=AO=0x200={name:"foo", age: 18}
// TODO 3.3 代码执行完毕，销毁 FEC（函数执行上下文 foo），意味着 VO将不再指向 0x200。因为没有变量指向 0x200，0x200 会被垃圾回收掉。
// ! 函数的作用域在创建的时候就确定了
