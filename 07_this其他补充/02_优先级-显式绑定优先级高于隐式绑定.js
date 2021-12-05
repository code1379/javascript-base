var obj = {
  name: "obj",
  foo: function () {
    console.log(this.name);
  },
};

// * 隐式调用
obj.foo();

var person = {
  name: "person",
};

// * 显式调用
// 1. call/apply 的显示绑定高于隐式绑定
obj.foo.call(person);

// 2. bind 隐式绑定
// ! 但是这里不能说明 bind 的显示绑定的优先级高于隐式绑定。因为我们返回的 是 bind 之后的结果
// ! 因为 obj 压根就没出现
var bar = obj.foo.bind({ name: "bind" });

bar();
