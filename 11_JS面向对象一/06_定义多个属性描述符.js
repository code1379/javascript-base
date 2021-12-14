var obj = {
  // 私有属性(S 里面是没有严格意义上的私有属性)
  _age: 18,
  _eating: function () {},
  _name: "why",
  // ! 这种设置 name 的方式，可以在打印 obj 的时候看到。相当于设置了 enumerable 为 true
  set name(value) {
    this._name = value;
  },
  get name() {
    return this._name;
  },
};

Object.defineProperties(obj, {
  nickname: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "little why",
  },
  age: {
    configurable: false,
    enumerable: false,
    get: function () {
      return this._age;
    },
    set: function (value) {
      this._age = value;
    },
  },
});

console.log(obj._age);
console.log(obj);
