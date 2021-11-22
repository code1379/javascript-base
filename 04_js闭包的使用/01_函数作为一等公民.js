// function foo(arg) {
//   console.log("foo", arg);
// }

// foo(123);

function foo(aaa) {
  if (typeof aaa === "function") {
    aaa();
  } else {
    console.log("aaa", aaa);
  }
}

function bar() {
  console.log("bar");
}

foo(bar);
foo(123);

//我不知道你要加减，你把你计算的函数传递进来
function calc(num1, num2, calcFn) {
  calcFn(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiple(num1, num2) {
  return num1 * num2;
}

calc(1, 2, add);
