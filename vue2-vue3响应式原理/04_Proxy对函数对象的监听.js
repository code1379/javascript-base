function foo() {}

const fooProxy = new Proxy(foo, {
  apply(target, thisArg, argArray) {
    console.log("对 foo 函数进行了 apply 调用");
    target.apply(thisArg, argArray);
  },
  construct(target, argArray, newTarget) {
    console.log("对 foo 函数进行了 new 调用");
    return new target(...argArray);
  },
});

fooProxy();

// fooProxy.apply({}, ["abc", "cba"]);

const f = new fooProxy("abc", "cba");
