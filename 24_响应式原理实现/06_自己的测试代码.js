// 收集依赖

class Depend {
  dependFns = [];

  addDependFn(fn) {
    this.dependFns.push(fn);
  }

  notify() {
    console.log(this.dependFns);
    this.dependFns.forEach((fn) => fn());
  }
}

const depend = new Depend();

let globalReactiveFn = null;

function watchFn(fn) {
  globalReactiveFn = fn;
  fn();
  globalReactiveFn = null;
}

// TODO 封装一个获取 depend 的函数
const targetMap = new WeakMap();
function getDepend(target, key) {
  // TODO 1.第一步使用 weakMap
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  // TODO 2. 第二部使用 map 对 key 创建对应的 Depend 实例
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }

  return depend;
}

const obj = {
  name: "dell",
  age: 18,
};

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    const depend = getDepend(target, key);
    depend.addDependFn(globalReactiveFn);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver);
    const depend = getDepend(target, key);
    depend.notify();
  },
});

watchFn(() => {
  console.log(objProxy.name, "name");
  console.log("同一函数中，监听了 age");
  console.log(objProxy.age, "Age");
});

watchFn(() => {
  console.log(objProxy.age, "age");
});

console.log(
  "------------------------------ 分割线 -------------------- 上面打印的是 watchFn 的时候调用的代码"
);

objProxy.name = "kobe";

// 只有监听 的函数会被执行
console.log(objProxy.name);

objProxy.age = 10;
