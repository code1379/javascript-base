// 1. 编写箭头函数
// 第一部分 () : 放函数参数
// 第二部分 => : 箭头
// 第三部分 {} : 放函数体
var foo = (num1, num2, num3) => {
  var result = num1 + num2 + num3;
  return result;
};

var foo = function () {};

var nums = [1, 2, 3, 4, 5];

// 高阶函数在使用时，可以传递箭头函数
nums.forEach((item, index, arr) => {});

// 箭头函数一些常见写法
// 简写一：如果参数只有一个，() 可以省略
nums.forEach((item) => {});

// 简写二：如果函数执行体只有一句话 {} 可以省略
// ! 强调：并且它会默认将这行代码的执行结果作为返回值
nums.forEach((item) => console.log(item));
nums.filter((item) => item % 2 === 0);
// filter/map/reduce
nums
  .filter((item) => item % 2 === 0)
  .map((item) => item * 100)
  .reduce((preValue, item) => preValue + item, 0);

// 简写三：如果一个箭头函数，只有一行代码，并且返回一个对象，这个时候如何简写
var bar = () => {
  return { name: "dell", age: 18 };
};

var bar = () => ({ name: "dell", age: 18 });
