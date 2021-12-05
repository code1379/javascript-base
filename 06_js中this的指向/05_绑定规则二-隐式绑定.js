// 隐式绑定：通过对象 obj.fn()
// obj 对象会被 js 引擎绑定到 fn 函数中的 this 里面
function foo() {
  console.log(this);
}

// 案例一
var obj = {
  name: "why",
  foo: foo,
};

obj.foo(); // obj 对象

// 案例二
var obj = {
  name: "why",
  eating: function () {
    console.log(this.name + "在吃东西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  },
};

obj.eating();

// ! 作为独立函数运行
var fn = obj.eating;
fn();

// 案例三
var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this);
  },
};

var obj2 = {
  name: "obj2",
  bar: obj1.foo, // !作为独立函数
};

obj2.bar();
