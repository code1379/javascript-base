function foo() {
  // var moni = {}
  // this = moni
  console.log("foo~");

  // return this; // 默认返回
}

// foo 就是一个普通的函数
foo();

// 换一种方式来调用 foo 函数，通过 new 关键字去调用一个函数，那么这个函数就是一个构造函数
var f1 = new foo();
console.log(f1);

// ! 当我们通过 new 去调用一个函数时，和通过普通调用有什么区别？
