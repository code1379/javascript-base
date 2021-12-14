var p1 = {
  name: "张三",
  age: 18,
  height: 1.88,
  address: "广州",
  eating: function () {
    console.log(this.name + "在吃东西");
  },
  running: function () {
    console.log(this.name, +"在跑步");
  },
};

var p2 = {
  name: "李四",
  age: 20,
  height: 1.98,
  address: "北京",
  eating: function () {
    console.log(this.name + "在吃东西");
  },
  running: function () {
    console.log(this.name, +"在跑步");
  },
};

var p3 = {
  name: "王五",
  age: 30,
  height: 1.78,
  address: "上海",
  eating: function () {
    console.log(this.name + "在吃东西");
  },
  running: function () {
    console.log(this.name, +"在跑步");
  },
};

// ! 如果我们要创建 10 个呢？ 就写 10 次？ 存在大量重复代码
// * 目前我们已经学习了两种方式 1. new Object方式； 2. 字面量创建的方式；
// ! 创建类似的对象时，需要写大量重复代码
