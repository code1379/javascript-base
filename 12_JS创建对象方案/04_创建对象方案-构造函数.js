// ! 首字母大写，这样我们就知道这是一个构造函数。在调用的时候就知道 我们使用了 new 关键字
function person(name, age, height, address) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.address = address;

  this.eating = function () {
    console.log(this.name + "在吃东西~");
  };
  this.running = function () {
    console.log(this.name + "在跑步~");
  };
}

// ! 跟工厂函数相比， p1 拥有类型了
var p1 = new person("张三", 18, 1.88, "北京市");
console.log(p1);
console.log(p1.__proto__.constructor);

// 缺点
