# 柯里化

- 柯里化也是属于函数式编程里面一个非常重要的概念

## 维基百科解释

- 在计算机科学中，柯里化（currying），又译为卡瑞华或加里化
- 是把接收**多个参数的函数**，变成**接受一个单一参数**（最初函数的第一个参数）的函数，并且**返回接受余下的参数**，而且**返回结果的新函数**的技术；
- 柯里化声称**“如果你固定某些参数，你将得到接受余下参数的一个函数”**

## 老师总结

- **只传递给函数一部分参数来调用它**，让**它返回一个函数去处理剩余的参数**；
- 这个过程就称之为柯里化。

```js
function foo(m, n, x, y) {}
foo(1, 2, 3, 4);

// 把上面函数变为下面函数的写法，就是 柯里化的过程。
function bar(m) {
  return function (n) {
    return function (x) {
      return function (y) {
        m + n + x + y;
      };
    };
  };
}

bar(10, 20);
```

## 柯里化的作用

1. 让函数的职责单一

   - 在函数式编程中，我们其实往往希望**一个函数处理的问题尽可能的单一，而不是将一大堆的处理过程交给一个函数来处理**
   - 那么**我们是否就可以将每次传入的参数在单一的函数中进行处理**，处理完成在**下一个函数中再使用处理后的结果**
   - 传入的参数需要分别被进行如下处理

     - 第一个参数 + 2
     - 第二个参数 \* 2
     - 第三个参数 \*\* 2

     ```js
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

     function newSum(x) {
       x = x + 2;
       return function (y) {
         y = y * 2;
         return function (z) {
           z = z ** 2;
           return x + y + z;
         };
       };
     }
     ```
