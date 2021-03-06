# 为什么需要 this？

在常见的编程语言中，几乎都有 this 关键字（OC 中使用的是 self），但 JS 中的 this 和常见的面向对象中的 this 不太一样

- 常见的面向对象的编程语言中，比如 Java、C++、Swift、Dart 等等一系列语言中，this 通常只会出现在 类的方法中。
- 也就是你需要有一个类，类中的方法（特别是实例方法）中，this 代表的是当前调用的对象
- 但是 JS 中的 this 更加灵活，无论是它出现的位置还是它代表的含义。

## this 的指向是什么呢？

- 全局 this 指向 window
  - 但是，在卡法中很少直接在全局作用域下使用 this
  - 所有的函数在被调用时，都会创建一个执行上下文: `{AO, ScopeChain, this: 动态绑定}`
  - 这个上下文中记录着函数的调用栈、AO 对象等
  - this 也是其中的一条记录

### this 到底指向什么呢？

定义一个函数，我们采用三种不同的方式对它进行调用，它产生三种不同的结果

1. 直接调用
2. 对象点的方式调用 obj.
3. apply 方式调用

这个案例可以给我们什么样的启示呢？

1. 函数在调用时，JS 会默认给 this 绑定一个值
2. this 的绑定和定义的位置（编写的位置）没有关系
3. this 的绑定和调用方式以及调用的位置有关系
4. this 是在运行时被绑定的

## 那么 this 到底是怎么样的绑定规则呢？

1. 默认绑定
   - 当函数按照独立函数调用时。（函数没有被绑定到某个对象上进行调用，但实际上绑定的是全局 window 对象，严格模式为 null）
2. 隐式绑定
   - 通过某个对象进行调用（通过某个对象发起的函数调用）
   - 前提条件
     - 必须在调用对象的内部有一个对函数的引用（比如一个属性）
     - 如果没有这样的引用，在进行调用时，会报找不到该（属性|函数）的错误
     - 这是通过这个引用，间接的将 this 绑定到了这个对象上
   - 如果我们不希望对象内部包含这个函数的应用，同时又希望在这个对象上强制调用（this 指向这个对象）
     - js 所有的函数都可以使用 call 和 apply 方法（这个和原型有关）
     - 这两个函数的第一个参数都要求是一个对象，这个对象的作用是什么呢？ 就是给 this 准备的
     - 在调用这个函数时，会将 this 绑定到这个传入的对象上
3. 显式绑定 call bind apply
4. new 绑定

   1. 创建一个全新的对象
   2. 这个新对象会被执行 prototype 连接；
   3. 这个新对象会绑定函数调用的 this 上（this 的绑定在这个步骤完成）
   4. 如果函数没有返回其他对象，表达式会返回这个对象

      111
