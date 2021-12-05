// var obj = {
//   foo: function () {
//     console.log(this);
//   },
// };

// ! 同时出现显式绑定和隐式绑定。
// obj.foo.call("abc");

function foo() {
  console.log(this);
}

// TODO 如果我们多次绑定都需要 this 指向 "aaa"

foo.call("aaa");
foo.call("aaa");
foo.call("aaa");
foo.call("aaa");

// * 默认绑定和显式绑定 bind 冲突：优先级 显示绑定 > 隐式绑定
// ! 会生成新的函数？还是生成新的引用？
var fooAaa = foo.bind("aaa");

fooAaa();
fooAaa();
fooAaa();
fooAaa();
