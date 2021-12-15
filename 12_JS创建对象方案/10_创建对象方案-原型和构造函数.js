function Person(name, age) {
  var moni = {};
  // ! 我们不能直接将普通属性直接 Person.prototype 赋值
  // Person.prototype.name = name;
  // Person.prototype.age = age;
  this.name = name;
  this.age = age;

  // return moni
}

// ! 这样每个实例里
Person.prototype = {
  eating: function () {
    console.log(this.name + "eating");
  },
  running: function () {
    console.log(this.name + "running");
  },
};

Object.defineProperty(Person.prototype, "constructor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: Person,
});

var p1 = new Person("why", 17);
var p2 = new Person("kobe", 18);

p1.eating();
p2.eating();
// Function.prototype.hycall = function () {
//   console.log(this);
// };

// foo.hycall();
