// 代码执行过程
var name = "why";
var num1 = 20;
var num2 = 30;
var result = num1 + num2;

// * 两种执行环境 1.浏览器 2.node
// * 上面这段代码运行过程

// TODO 1. 代码需要被解析， v8引擎会帮助我们创建 GO(Global Object) 包含全局对象
// !  在代码 解析 成 AST 语法树阶段
Math;
String;
Date;
setTimeout;
console;

// 上面这些都在 GO 中
var globalObject = {
  String: "类",
  Date: "类",
  setTimeout: "函数",
  window: globalObject,
};

console.log(window.window.window);

// TODO 2. 解析的时候。将属性添加到 globalObject 中，这个时候因为代码没有执行。所以没有值。 只有代码执行的时候，才会把值赋值给它
var globalObject = {
  String: "类",
  Date: "类",
  setTimeout: "函数",
  window: globalObject,
  name: undefined,
  num1: undefined,
  num2: undefined,
  result: undefined,
};

// TODO 3. 运行代码。
// 3.1 v8引擎内部会有一个执行上下文栈（Execution context stack）（函数调用栈） 简称 => ECStack
// 3.2 因为我们执行的是全局代码，为了全局代码能够正常的执行，需要创建 全局执行上下文（Global Execution context）（全局代码需要被执行时，才会创建） => GEC
// GEC 在 ECStack 中
// GEC 中存在 VO(variable object) GO(global object)
// 3.3 真正开始执行代码。（经过转换之后的 bytecode 开始执行）代码自上而下依次执行。
var globalObject = {
  String: "类",
  Date: "类",
  setTimeout: "函数",
  window: globalObject,
  name: "why",
  num1: 20,
  num2: 30,
  result: 50,
};
