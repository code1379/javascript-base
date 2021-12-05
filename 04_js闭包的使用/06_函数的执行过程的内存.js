function foo() {
  var name = "foo";
  var age = 18;
}

function test() {
  console.log("test");
}

foo();

test();

// 内存图

// 1. GEC 全局执行上下文
//    GO foo=0x00001 test=0x00002 Date String window

// 2. 代码执行
//
