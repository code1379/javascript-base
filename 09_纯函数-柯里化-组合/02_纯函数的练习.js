// foo 函数是否是一个纯函数？
// 1. 相同的输入一定产生相同的输出
// 2. 在执行的过程中不会产生任何的副作用
function foo(num1, num2) {
  return num1 * 2 + num2 * num2;
}

// bar 函数不是纯函数。
// bar 会修改全局的变量
var name = "abc";
function bar() {
  console.log("bar 其他的代码执行");
  name = "cba";
}

bar();
console.log(name);

// baz 不是纯函数
// baz 修改了传入的参数（原始数据）。
function baz(info) {
  info.age = 100;
}
var obj = { name: "why" };
baz(obj);

// test 函数是纯函数。
function test(info) {
  return {
    ...info,
    age: 100,
  };
}

var obj1 = { name: "why", age: 18 };

test(obj1);
test(obj1);
test(obj1);
test(obj1);

// 有输出不是纯函数
// 1.有输出语句
// 2. 对参数进行了修改
function printInfo(info) {
  console.log(info.name, info.age);
  info.name = "哈哈哈";
}

// 那么纯函数有什么用呢？
// redux、react 函数组件

// ! React 的函数组件（类组件）
function HelloWorld(props) {
  // ! React 不允许你直接修改 props （Vue 也不允许修改）
  props.info = {};
  props.info.name = "why";
}

var template = ```
<HelloWorld info="{name: 'dell', age: 18}" />
```;
