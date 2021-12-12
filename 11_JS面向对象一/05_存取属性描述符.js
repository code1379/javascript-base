var obj = {
  name: "why",
  age: 18,
  _address: "北京市",
};

// 存取属性描述符 get 和 set 不能和 writable 和 value 共存
// 1. 隐藏某一个私有属性，不希望直接被外界使用和访问
// 2. 如果我们希望截获某一个属性它访问和设置的过程时，也会使用存取属性描述符
Object.defineProperty(obj, "address", {
  configurable: true,
  enumerable: true,
  get: function () {
    return this._address;
  },
  set: function (value) {
    this._address = value;
  },
});

console.log(obj);

console.log(obj.address);
obj.address = "上海市";
console.log(obj.address);
