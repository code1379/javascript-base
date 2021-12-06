var name = "window";
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  },
};

function sayName() {
  var sss = person.sayName;
  sss(); // 1. 作为独立函数 window
  person.sayName(); // 2. 隐式调用 person
  // (person.sayName)(); // 3. 快速格式化，会格式化掉。 这样也是当做独立函数 执行 window × 这里是隐式调用
  (b = person.sayName)(); // 4. 特殊绑定（把等号右边的函数当做独立函数执行） window
}

// 函数执行
sayName();
