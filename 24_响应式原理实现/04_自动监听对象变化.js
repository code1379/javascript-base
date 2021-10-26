// 封装一个响应式的函数
// let reactiveFns = [];
// ! 放到数组里面不是特别好， name 发生改变的所有需要重新执行的函数， age 发生改变的所有需要重新执行的函数

// * 那么这么做有什么好处呢？
// * 1. 我们根据不同的属性都创建不同的 Depend 实例。
// * 2. 我们可以创建 notify
class Depend {
  constructor() {
    this.reactiveFns = [];
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }

  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

const depend = new Depend();

function watchFn(fn) {
  depend.addDepend(fn);
}

// 对象的响应式（开发中常见）
const obj = {
  name: "dell", // 不同属性对应不同 depend 对象
  age: 18, // 不同属性对应不同 depend 对象
};

// TODO 1. 100 行响应式代码
function foo() {
  const name = obj.name;
  console.log(obj.name);
  console.log("你好啊，李银河");
  console.log("Hello World");
}

// 监听对象的属性变化：Proxy(vue3)/Object.defineProperty(vue2)

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver);
    depend.notify();
  },
});

watchFn(foo);

function bar() {
  console.log("普通的函数");
  console.log("这个函数不需要有任何响应式");
}

objProxy.name = "dell";
// 修改之后不需要手动执行
// depend.notify();
objProxy.name = "kobe";
