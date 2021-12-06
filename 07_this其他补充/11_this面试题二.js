var name = "window";
var person1 = {
  name: "person1",
  foo1: function () {
    console.log(this.name);
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name);
    };
  },
  foo4: function () {
    return () => {
      console.log(this.name);
    };
  },
};

var person2 = { name: "person2" };

// 代码执行
person1.foo1(); // "person1"
person1.foo1.call(person2); // "person2"

person1.foo2(); // 箭头函数，只和上级作用域有关  => window
person1.foo2.call(person2); //箭头函数，只和上级作用域有关  => window

person1.foo3()(); // 前面返回一个函数。 函数执行 => 相当于独立函数执行 window
person1.foo3.call(person2)(); // 同上，虽然绑定了 this，但是是在 return function 的上一层绑定的 this。函数独立执行 window
person1.foo3().call(person2); // 这里先返回函数，函数使用显示绑定 => "person2"

person1.foo4()(); // ! 箭头函数， this 是外面的 => window × 外面的 this 是 person1
person1.foo4.call(person2)(); // 箭头函数, this 是外面的 this => "person2"
person1.foo4().call(person2); // ! 箭头函数, this 是外面的 this => window × 外面的 this 是 person2
