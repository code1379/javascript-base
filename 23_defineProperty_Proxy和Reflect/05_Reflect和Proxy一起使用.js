const obj = {
  name: "why",
  age: 18,
};

const objProxy = new Proxy(obj, {
  get: function (target, propertyKey, receiver) {
    console.log("get", target, propertyKey);
    // ! 之前是
    // return target[propertyKey]
    // ! 我们使用代理对象的目的，是 为了不对对象做*直接操作*。在理论上就有一些 事与愿违。所以我们使用 Reflect 从语言层面，而不是直接返回原来对象的值
    // return Reflect.get(target, propertyKey)

    // * 现在是
    return Reflect.get(target, propertyKey, receiver);
  },
  set: function (target, propertyKey, value, receiver) {
    console.log("set", target, propertyKey, value);
    // ! 之前是 => 这种写法你不知道设置值是否成功。因为什么都不会返回（比如我们使用 Object.freeze(target) 对对象进行冻结之后，就不能再设置值了。）
    // target[propertyKey] = value
    // * 这种写法会返回 Boolean 值，可以知道是否设置成功
    // Reflect.set(target, propertyKey, value)
    // * 现在是
    Reflect.set(target, propertyKey, value, receiver);
  },
});

console.log(objProxy.age);

objProxy.age = 28;

console.log(objProxy.age);
