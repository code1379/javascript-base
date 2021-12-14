function foo() {
  function bar() {}
  return bar;
}

// ! 这两个函数不是同一个对象
var fn1 = foo();
var fn2 = foo();

console.log(fn1 === fn2);

function Person(name, age) {
  // * 单纯从属性来讲，是没有问题的
  this.name = name;
  this.age = age;
  // ! 在创建不同方法时，每一个对象都会创建不同的 函数
  // ! 有没有必要我们对每个对象（对于通用方法）都创建一个新的函数
  // ! 假设我们创建了 100 个对象，每个里面的 方法对应的都是新的。那么我们在堆内存中就多了 100 个这样的函数（浪费空间，没有必要）
  this.eating = function () {
    console.log(this.name + "在吃放");
  };
  this.running = function () {
    console.log(this.name + "在跑步");
  };
}

var p1 = new Person("战三", 18);
var p2 = new Person("李四", 28);

console.log(p1.eating === p2.eating);
console.log(p1.running === p2.running);
