function add(x, y, z) {
  x = x + 2; // 假设 10 行处理逻辑
  y = y * 2; // 假设 20 行处理逻辑
  z = z ** 2; // 假设 30 行处理逻辑
  return x + y + z;
}

console.log(add(10, 20, 30));

function sum(x) {
  x = x + 2;
  return function (y) {
    y = y * 2;
    return function (z) {
      z = z ** 2;
      // 最后一步不需要其他参数了，没必要返回一个函数
      return x + y + z;
    };
  };
}

console.log(sum(10)(20)(30));
