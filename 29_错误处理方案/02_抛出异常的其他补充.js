class HYError {
  constructor(errorCode, errorMessage) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }
}

class GYError extends Error {
  constructor(errorCode, errorMessage) {
    super(errorMessage);
    this.errorCode = errorCode;
  }
}

function foo(type) {
  console.log("foo函数开始执行");

  if (type === 0) {
    // 1. 抛出一个字符串类型（基本的数据类型）,开发中很少抛出基本类型
    // throw "type 不能为0"
    // throw 100

    // 2. 比较常见的是抛出一个对象类型
    // throw {
    //   errorCode: -1001,
    //   errorMessage: "type不能为0~"
    // }

    // 3. 更常见的是创建类，并且创建这个类对应的对象
    // throw new HYError(-1001, "type不能为0~");

    // 4. 真实开发中 JS 已经给我们提供了一个 Error 类
    // * 这个类里面是不提供 errorCode 的，我们可以自己搞一个类，让我们的类继承 Error 类。不过前端用 errorCode 也比较少一点
    throw new Error("type不能为0~");
    // throw new GYError(-1001, "type 不能为0~");
    // * Error 类返回的信息其实对应的是函数的调用栈
  }
  console.log("foo函数结束执行");
}

foo(0);
// try {
//   foo(0);
// } catch (err) {
//   console.log("err", err.errorCode);
// }

console.log("后续代码继续执 行");
