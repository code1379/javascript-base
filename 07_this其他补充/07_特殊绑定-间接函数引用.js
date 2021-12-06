// 争论：代码规范 ; 要不要加 分号

var obj = {
  name: "obj",
  foo: function () {
    console.log(this);
  },
};

var obj2 = {
  name: "obj2",
};

obj2.bar = obj.foo;

obj2.bar(); // this 是 obj2 是隐式绑定

// ! 前面括号会把 obj.foo 函数返回给我们。属于独立函数调用
(obj2.bar = obj.foo)(); // this 指向 window
