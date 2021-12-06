// js 模拟实现（底层使用 C++ 实现的）
// 给所有函数添加一个 gyCall 方法

// 06 30分钟
Function.prototype.gyCall = function (thisObj) {
  // ! 在这里我可以去执行调用的那个函数
  // ! 问题：得可以获取到是哪一个函数执行了 gyCall
  // 此时 this 指的就是 函数本身
  const fn = this;
  // fn();
  // TODO 让函数 fn 中的 this  指向 thisObj
  // ? 如何指向呢？
  // 1. new
  // 2. call bind apply
  // 3. 隐式绑定
  // thisObj[fn.name] = fn;

  // thisObj[fn.name]();

  // TODO 老师的做法
  thisObj.fn = fn;
  thisObj.fn();
};

function foo() {
  console.log("foo函数执行了", this);
}

function sum(num1, num2) {
  console.log("sum函数被执行了", this);
}

// foo.call({ name: "dell" });

foo.gyCall({ name: "why" });
sum.gyCall({});
