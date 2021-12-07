Function.prototype.hybind = function (thisArg, ...argArr) {
  // 1. 获取真实需要调用的函数
  var fn = this;

  // 2. 绑定 this
  thisArg = thisArg == null ? window : Object(thisArg);

  function proxyFn(...args) {
    // 3. 将 bind
    thisArg.fn = fn;
    // var finalArgs = [...argArr, ...args];

    var result = thisArg.fn(...argArr, ...args);

    delete thisArg.fn;

    return result;
  }

  return proxyFn;
};

function foo() {
  console.log("foo 被执行", this);
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4, this);
}

var zoo = foo.hybind("abc");
var result = zoo();
console.log(result);

var bar = sum.bind("ccc", 1, 2);
var result1 = bar(3, 4);
console.log(result1);
