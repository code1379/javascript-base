var name = "window";
function Person(name) {
  // ! 构造函数中有自己的作用域
  this.name = name;
  this.foo1 = function () {
    console.log(this.name);
  };
  // ! 箭头函数的作用域在这里面。  new 的时候 this 指向当前对象
  this.foo2 = () => console.log(this.name);
  this.foo3 = function () {
    return function () {
      console.log(this.name);
    };
  };
  this.foo4 = function () {
    return () => {
      console.log(this.name);
    };
  };
}

var person1 = new Person("person1");
var person2 = new Person("person2");

person1.foo1(); // 隐式调用 "person1"
person1.foo1.call(person2); // 显示调用 "person2"

person1.foo2(); // ! 箭头函数 this => 上级作用域 "window" ×，我们找到的是上层作用域 "person1"
person1.foo2.call(person2); // ! => "window" 这里也是找上层作用域 "person1"

person1.foo3()(); // 独立函数 => "window"
person1.foo3.call(person2)(); // 独立函数 => "window"
person1.foo3().call(person2); // 显示绑定 => "person2"

person1.foo4()(); // 返回箭头函数 => person1
person1.foo4.call(person2)(); // 返回箭头函数  => person2
person1.foo4().call(person2); // => person1
