var message = "Hello Global!";

function foo() {
  console.log(message);
}

function bar() {
  var message = "Hello Bar";
  foo();
}

bar();

// 经典面试题
// 函数在创建的时候，作用域就已经确定好了

// * 解析
// * 预编译阶段
// 1. ECStack 执行上下文栈
// 2. GEC 全局执行上下文的 VO 指向 GO，预编译 GO message foo=0x00a VO指向AO+作用域 bar=0x00b VO指向AO {  message: undefined } + 作用域
// ! 注意函数中的 VO 是 AO 全局的 VO 是 GO
// * 代码执行阶段
// 1. GO message = Hello Global!
// 2. 函数 bar 执行，创建 FEC 函数执行上线文 FEC1  => bar { message = "Hello Bar"} 作用域 AO: ParentScope(GO)
// 3. FEC1 中 foo 执行，创建 FEC2 => 打印 message 自己里面没有，沿着作用域链 AO:ParentScope(GO) 打印 "Hello Global"
