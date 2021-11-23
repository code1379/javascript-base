// js 语法允许函数内部再定义函数（JAVA 不允许）
function foo() {
  function bar() {
    console.log("bar");
  }

  return bar;
}

var fn = foo();

fn();

// ===== 例二

function makerAdder(count) {
  function add(sum) {
    return count + sum;
  }
  return add;
}

var add5 = makerAdder(5);

console.log(add5(6));
console.log(add5(10));

var add10 = makerAdder(10);
var add100 = makerAdder(100);

// 例三
// * 高阶函数：如果一个函数接收另外一个函数作为参数，或者该函数会返回另外一个函数作为返回值的函数，那么这个函数称之为高阶函数。
// => markerAdder 和 calc 函数都是高阶函数
