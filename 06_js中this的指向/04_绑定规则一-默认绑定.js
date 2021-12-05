// * 默认绑定：独立函数调用
// 1. 案例一
function foo() {
  console.log(this);
}

foo();

// obj.foo
// foo.apply("")

// 2. 案例二
function foo1() {
  console.log(this);
}

function foo2() {
  console.log(this);
  foo1();
}

function foo3() {
  console.log(this);
  foo2();
}

foo3();

/**
 * 三个 this 指向的都是 window。
 * ! 因为都是当做独立的函数进行调用
 * */

// 3. 案例三
var obj = {
  name: "why",
  foo: function () {
    console.log(this);
  },
};

var zoo = obj.foo;
zoo(); // 这里的this指向的也是 window 对象， 因为函数是被当做独立的函数执行的

// 4.案例四
function foo4() {
  console.log(this);
}

var obj1 = {
  name: "why",
  foo4: foo4,
};

var bar = obj1.foo;
bar(); // window

// 5. 案例五
function foo5() {
  function bar() {
    console.log(this);
  }
  return bar;
}

var fn = foo5();
fn();

// ===

var obj2 = {
  name: "why",
  eating: fn,
};
obj2.eating(); // ! 隐式绑定
