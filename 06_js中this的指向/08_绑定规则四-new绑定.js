// new 绑定
// 我们通过一个new 关键字调用一个函数时（构造器），这个时候this是在调用这个构造器时创建出来的对象
// this = 创建出来的 对象
// 这个绑定过程就是 new 绑定
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.study = function () {
    console.log(this.name + " study");
  };
}

var p1 = new Person("why", 18);
// 1. 生成一个新对象 {}
// 2. this 指向这个新对象
// 3. 将 this 指向的属性赋值给 {name, age, study}
// 4. 返回这个对象
var p2 = new Person("kobe", 28);

var obj = {
  foo: function () {
    console.log(this);
  },
};

// ! new 绑定和 隐式绑定冲突，考虑优先级
new obj.foo();
