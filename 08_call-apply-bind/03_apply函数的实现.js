function foo() {
  console.log("foo 被执行", this);
}

function sum(num1, num2) {
  console.log(num1, num2);
}

var bar = foo.bind("abc");
bar();
