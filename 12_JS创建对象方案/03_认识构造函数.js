function foo() {
  console.log("foo~");
}

// foo 就是一个普通的函数
foo();

// 换一种方式来调用 foo 函数，通过 new 关键字去调用一个函数，那么这个函数就是一个构造函数
new foo();

// ! 当我们通过 new 去调用一个函数时，和通过普通调用有什么区别？
