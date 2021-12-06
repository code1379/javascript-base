var name = "why";

var foo = () => {
  console.log(this);
};

// 直接调用
foo();

// 显示调用
foo.call("abc");

var obj = { foo: foo };

// 隐式调用
obj.foo();

// 2. 应用场景

var obj = {
  data: [],
  getData: function () {
    // 发送网络请求，将结果放到上面 data 属性中
    // obj.getData => 显示调用所以这层的 this 是 obj 对象
    const self = this;
    // setTimeout(() => {
    //   console.log(this);
    // }, 2000);

    setTimeout(function () {
      var result = ["abc", "cba", "nba"];

      // 这里使用  this 的话， this 是 window。
      self.data = result;
    }, 2000);
  },
};
