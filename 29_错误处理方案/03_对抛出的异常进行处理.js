function foo(type) {
  if (type === 0) {
    throw new Error("type 不能为0~");
  }
  throw new Error("foo error message~");
}

function bar() {
  try {
    foo(0);
    console.log("bar函数后续的继续执行");
  } catch (e) {
    console.log(e);
    foo(1);
  } finally {
    // 不管发生异常还是没发生异常，一定会执行
    console.log("finally代码执行");
  }
}

function test() {
  bar();
}

function demo() {
  test();
}

// 两种处理方法：
// 1. 第一种是不处理，会继续将异常抛给上级执行栈。如果直到全局都没有捕获，会造成错误
// demo()
// 2. 使用 try catch 捕获异常
try {
  demo();
} catch (e) {
  console.log("打印error", e);
}

console.log("hello world");
