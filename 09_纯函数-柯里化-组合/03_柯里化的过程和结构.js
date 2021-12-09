function add(x, y, x) {
  return x + y + z;
}

var result = add(1, 2, 3);
console.log(result);

function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

var result1 = sum(1)(2)(3);
console.log(result);

// 简化柯里化的代码
var sum2 = (x) => (y) => (z) => {
  return x + y + z;
};

var result2 = sum2(1)(2)(3);
console.log(result2);
