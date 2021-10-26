const obj = {
  // 我们自己默认会把这种 _ 开头的变量当做私有属性
  _name: "why",
  get name() {
    console.log("obj get" + String(this) + "/s");
    return this._name;
  },
  set name(newValue) {
    this._name = newValue;
  },
};

// obj.name = "kobe";

// console.log(obj.name);

// TODO 我们如果象监听 obj 对象的操作，我们依然可以使用 proxy

const objProxy = new Proxy(obj, {
  get(target, propertyKey, receiver) {
    // * receiver 就是创建出来的代理对象
    console.log("get 方法被访问", propertyKey, receiver);
    // 通过 propertyKey 同名的 get 访问
    // ! 那么我们通过 Reflect.get 调用 key 对应的方法，那么 get key() { return this.key } 这个 this 指向的是谁呢？
    // * 这里很明显 this 是 obj 对象
    // TODO 如果我们使用 代理对象来访问属性 objProxy._name 那么就不会走到 obj 的 get name() {} 这个方法。那么我们就希望 this 指向代理对象
    // 没听太明白 17 节课 1:37:00
    // ! 我们应该想办法，让我们在获取的时候的 this 指向 objProxy
    console.log(receiver === objProxy);
    return Reflect.get(target, propertyKey, receiver);
  },
  set(target, propertyKey, newValue, receiver) {
    console.log("set 方法被访问");
    Reflect.set(target, propertyKey, newValue, receiver);
  },
});

// objProxy.name = "kobe";

// console.log(objProxy.name);

// console.log(objProxy._name);

console.log(objProxy.name);

objProxy.name = "kobe";
