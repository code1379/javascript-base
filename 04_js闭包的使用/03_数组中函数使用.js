var nums = [10, 5, 11, 100, 55];

// var oddNums2 = nums.map((item) => (item % 2 === 0 ? item : ""));
// console.log(oddNums2)
// console.log(oddNums2.filter(Boolean))

// * 函数和方法的区别
// 函数 function： 独立的 function，那么称之为是一个函数
function foo() {}

// 方法 method: 当函数属于一个对象时，我们称这个函数是对象的方法
var obj = {
  foo: function () {},
};

obj.foo();

// filter：过滤 (item,index,arr)
var oddNums = nums.filter((num) => num % 2 === 0);

console.log(oddNums);

// map：映射
var newNums2 = nums.map(function (item) {
  return item * 10;
});
console.log(newNums2);

// forEach：迭代（遍历）
nums.forEach(function (item) {
  console.log(item);
});

// find/findIndex
var item = nums.find(function (item) {
  return item === 11;
});
console.log(item);

var friends = [
  { name: "why", age: 18 },
  { name: "kobe", age: 40 },
  { name: "james", age: 35 },
  { name: "curry", age: 30 },
];

const findFriend = friends.find(function (item) {
  return item.name === "james";
});
console.log(findFriend);
const friendIndex = friends.find((item) => item.name === "james");
console.log(friendIndex);

// reduce：累加
// 第一个参数是上一个的返回值。函数接收两个参数，第二个参数是初始值
const total = nums.reduce((prev, num) => {
  return prev + num;
}, 0);
console.log(total);
