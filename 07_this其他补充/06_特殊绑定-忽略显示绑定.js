function foo() {
  console.log(this);
}

// foo.call({ name: "dell" });

// foo.call("abc");

// * apply/call/bind
// 当传入 null/ undefined 时，自动将 this 绑定成全局对象
// foo.call(null);
// foo.call(undefined)

var bar = foo.bind(undefined);
bar();
