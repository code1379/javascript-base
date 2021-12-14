function foo(x, y, z) {
  // ! 函数.length 可以打印出函数参数个数
  return x + y + z;
}

// 柯里化函数的实现
function hyCurrying(fn) {
  // fn 参数的个数
  const argsLength = fn.length;

  function curried(...args) {
    // TODO 如果参数个数和原来的一样，直接调用原来的函数就可以
    // 判断当前已经接收的参数的个数，和参数本身需要接收的参数是否已经一致了。
    if (args.length >= argsLength) {
      // ! 但是我们一般不这样做，因为我们可能在调用的时候改变了 this 的指向
      // * 我们这里需要保证调用 fn的 this 和 调用外面绑定了 this 的 fn 的指向是一样的。
      // * 因为我们在外面调用 的 是 curried，所以这里直接绑定函数中的 this 即可。
      return fn.apply(this, args);
    } else {
      // ! 不够，我们还需要返回一个函数，一直传到它够了为止。
      function curried2(...args2) {
        // TODO 递归调用 curried
        return curried.apply(this, [...args, ...args2]);
      }

      return curried2;
    }
  }

  return curried;
}

var curryingFoo = hyCurrying(foo);

console.log(curryingFoo(1, 2, 3));
console.log(curryingFoo.call({ name: "why" }, 1, 2, 3));
console.log(curryingFoo.call({ name: "why" }, 1, 2)(3));

curryingFoo(1, 2)(3);
