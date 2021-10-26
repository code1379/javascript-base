const obj = {
  name: "why",
  age: 18,
};

// *第二个参数是捕获器对象
const objProxy = new Proxy(obj, {
  // 1. 获取值时的捕获器
  // * target 是我们代理的的 obj 对象
  get: function (target, key) {
    console.log(`监听到${JSON.stringify(target)}对象的${key}属性被访问了`);

    return target[key];
  },
  // 2. 设置值时的捕获器
  set: function (target, key, newValue) {
    console.log(`监听到${JSON.stringify(target)}对象的${key}属性被设置了`);

    target[key] = newValue;
  },

  // 3. has => in 操作符
  has(target, key) {
    console.log(`监听到对象的${key}属性 in 操作`, target);
    return key in target;
  },
  // 4. 换图不过 delete 的操作
  deleteProperty: function (target, key) {
    console.log(`监听到对象的${key}属性 delete 操作`, target);
    delete target[key];
  },
});

console.log(objProxy.name); // 'why'
console.log(objProxy.age); // 18

objProxy.name = "kobe";
objProxy.age = 30;

console.log(objProxy.name); // 'kobe'
console.log(objProxy.age); // 30

objProxy.gender = "male";

console.log(objProxy.gender); // 'male'

delete objProxy.name;

console.log(objProxy.name); // undefined

// =======

// 1. in 操作符 => has 监听器
console.log("name" in objProxy);

// 2. delete 操作符 => deleteProperty 监听器
