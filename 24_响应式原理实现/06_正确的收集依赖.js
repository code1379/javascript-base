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

// 封装一个响应式函数
let activeReactiveFn = null;
function watchFn(fn) {
  // depend.addDepend(fn);
  activeReactiveFn = fn;
  fn();
  // TODO 防止调用 watchFn() 传递空。最后置为 null
  activeReactiveFn = null;
}

// 对象的响应式（开发中常见）
const obj = {
  name: "dell", // 不同属性对应不同 depend 对象
  age: 18, // 不同属性对应不同 depend 对象
};

// TODO 封装一个获取 depend 的函数
const targetMap = new WeakMap();

function getDepend(target, key) {
  let map = targetMap.get(target);
  // ! 第一次用的时候没有值
  if (!map) {
    map = new Map();
    // ! 保证下次来可以取到 map
    targetMap.set(target, map);
  }

  // 根据key 获取 depend 对象
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }

  return depend;
}

// 监听对象的属性变化：Proxy(vue3)/Object.defineProperty(vue2)

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    // 根据 target.key 获取对应的 depend
    // obj/age -> depend
    const depend = getDepend(target, key);
    // TODO 给 depend 对象中添加响应函数(我们拿不到这个函数，怎么办呢？)
    // ! 1.我们在 watchFn(fn) 的时候可以拿到函数，但是我们怎么在这里拿到这个函数呢？我们可以搞一个全局的 activeReactiveFn = null
    // ! 2. 在我们调用 watchFn(fn) 的时候，activeReactiveFn 等于 fn 这样我们就能获取到此时的 fn。（执行 fn 的过程中，调用 get 方法时，这个 activeReactiveFn 就是 fn）
    // ! 3. 我们将函数赋值给了全局变量 activeReactiveFn
    depend.addDepend(activeReactiveFn);

    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver);
    // depend.notify();
    const depend = getDepend(target, key);
    depend.notify();
  },
});

function bar() {
  console.log("普通的函数");
  console.log("这个函数不需要有任何响应式");
}

const info = { address: "广州市", name: "cool" };

watchFn(function () {
  console.log(info.address, "监听到 address 变化 ++++++++++++1");
});
watchFn(function () {
  console.log(info.address, "监听到 address 变化 ++++++++++++2");
});

watchFn(function () {
  const newName = objProxy.name;
  console.log("你好啊，李银河");
  console.log("Hello World~");
  console.log(newName);
});

watchFn(function () {
  console.log(objProxy.name, "demo function -------"); // 这样的函数是需要设置到 obj.name 的 depend 里面的。 info.address 需要设置到 address 对应的 depend 里面的
  // ! 根据 watchFn 传递函数里面的依赖来确定这个 函数 添加到 key 对应的 依赖里面。
  // ! 我们可以让它先执行一次，执行的时候会 调用 get 方法。我们可以在 get 的时候，添加依赖
});

watchFn(function () {
  console.log(objProxy.age, "age 发生变化时需要执行的 ------ 1 ");
});

watchFn(function () {
  console.log(objProxy.age, "age 发生变化时需要执行的 ------ 2");
});

watchFn(function () {
  // ! 不知道为什么，我这里面只能监听一个参数发生改变。
  console.log(objProxy.name, "新函数");
  console.log(objProxy.age, "新函数");
});

console.log(
  "----------------------------------------------------改变obj的name值------------------------------------------------------------"
);

objProxy.name = "dell";
objProxy.age = 20;
