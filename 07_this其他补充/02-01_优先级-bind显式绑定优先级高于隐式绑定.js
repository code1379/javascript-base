// 3. bind 更明显的比较
// bind 优先级高于隐式绑定
function foo() {
  console.log(this);
}

var obj = {
  name: "obj",
  foo: foo.bind("aaa"),
};

obj.foo();
