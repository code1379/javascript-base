// 06-56
Function.prototype.hyapply = function (thisArg, args) {
  thisArg = thisArg ? Object(thisArg) : window;
  var fn = this;
  thisArg.fn = fn;
  var result = thisArg.fn(...args);

  delete thisArg.fn;

  return result;
};

function sum(num1, num2) {
  console.log("sum被调用", this, num1, num2);
  return num1 + num2;
}

// 系统调用
// var result = sum.apply("abc", [20, 30]);
var result = sum.hyapply("abc", [20, 30]);
console.log(result);
