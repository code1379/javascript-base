function foo() {
  console.log(arguments);
  var newArr = [];
  // 1. 直接 for 循环
  for (var i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i] * 10);
  }

  console.log(newArr);
  // 2. argument 转成 array 类型
  // 2.1 自己遍历 arguments中所有的元素

  // 2.2 Array.prototype.slice
  // 因为arguments 可以遍历，slice 内部是用 for 实现的，所以也可以使用
  var newArr2 = Array.prototype.slice.call(arguments);
  console.log(newArr2);
  var newArr3 = [].slice.call(arguments);
  console.log(newArr3);
  // 2.3 ES6 的语法
  var newArr4 = Array.from(arguments);
  console.log(newArr4);
  var newArr5 = [...arguments];
  console.log(newArr5);
}

foo(1, 2, 3, 4, 5);

/// ==== Array.prototype.slice
Function.prototype.aaa = function () {
  console.log(this);
};

function foo() {}
// * 原型上有的话我们可以直接调用
foo.aaa();

var names = ["aaa", "bbb", "ccc", "ddd"];

// TODO 如果我们在其他地方想调用这个aaa
// ! 但是直接调用的话，里面的 this 是 Function.prototype
Function.prototype.aaa();
Function.prototype.aaa.call(["aaa", "bbb", "ccc"]);

var nums = [1, 2, 3, 4, 5];
console.log(nums.slice(1));

Array.prototype.slice(); // ! 直接调用 this 指向 Array.prototype
Array.prototype.slice.call(["aaa", "bbb", "ccc"]);

// * 谈及 slice 的实现
Array.prototype.hyslice = function (start = 0, end) {
  console.log(this);

  var arr = this;
  end = end ? end : arr.length;
  var newArray = [];
  // TODO 内部进行遍历
  for (var i = start; i < end; i++) {
    newArray.push(arr[i]);
  }

  return newArray;
};

var newArrayNames = Array.prototype.hyslice.call(["aaa", "bbb", "ccc"], 1, 3);
console.log(newArrayNames);
