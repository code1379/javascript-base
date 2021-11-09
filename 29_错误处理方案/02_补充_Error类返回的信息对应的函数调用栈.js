// * Error 报错信息是函数的调用栈

function test() {
  console.log("test");
  throw new Error("test function Error");
}

function demo() {
  test();
}

function bar() {
  demo();
}

bar();
