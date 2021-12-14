// * 1. 相对字面量来说，减少了很多的代码

function createPerson(name, age, height, city) {
  var p = {};
  p.name = name;
  p.age = age;
  p.height = height;
  p.city = city;
  p.eating = function () {
    this.name + "在吃东西";
  };
  p.running = function () {
    this.name + "在跑步";
  };
  return p;
}

var p1 = createPerson("张三", 18, 1.88, "广州市");
var p2 = createPerson("李四", 28, 1.98, "北京市");
var p3 = createPerson("王五", 8, 1.78, "上海市");

// ! 对应对像没有对应的类名 => 现在都是 Object 类型
console.log(p1, p2, p3);
/**
 * 并不是最好的方案
 * 优点
 * - 只能解决代码重复的问题
 * 工厂模式的缺点
 * 1. 对应对像没有对应的类名(获取不到对象真实的类名)
 */
