// 1. 禁止意外创建全局变量
msg = "msg";
console.log(msg);

function foo() {
  // ! 会创建全局
  age = 20;
}

foo();

console.log(age);

// 2. 不允许函数有相同的参数名称
function foo(x, y, x) {
  console.log(x, y, x);
}

foo(10, 20, 30);

// 3. 静默错误
true.name = "true name";
NaN = 123;

var obj = {};
Object.defineProperty(obj, "name", {
  // 不可删除
  configurable: false,
  // 不可重写
  writable: false,
  value: "why",
});

obj.name = "kobe"; // 严格模式下报错
delete obj.name; // 严格模式下报错

// 4. 严格模式下不允许使用原先的 八进制模式
var num = 0123; // 以 0 开头是八进制数据，严格模式下不允许使用。
// * 新的八进制使用 0o 十六进制使用 0x

// 5. with语句不允许使用

// 6. eval 函数不会向上引用变量了
var jsString = 'var msg = "hello"; console.log(msg);';
eval(jsString); // 相当于在全局执行
console.log(msg); // 全局 msg = 'hello'; ! 开启严格模式，不会给全局赋值，相当于局部作用域
