/**
 * 如果我们有一个函数，在调用这个函数时，如果出现了错误，那么我们应该市区修复这个错误
 */
function sum(num1, num2) {
  // TODO 当传入的参数的类型不正确时，应该告知调用者一个错误
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    //!不应该直接 return，因为会得到 undefined。 我们应该告诉调用者我们的错误是什么？
    // return;
    // throw new Error("参数类型不匹配")
    throw "parameters is error type~";
  }
  return num1 + num2;
}

// 调用者
console.log(sum({ name: "why" }, true));

console.log("后续代码会继续执行");
