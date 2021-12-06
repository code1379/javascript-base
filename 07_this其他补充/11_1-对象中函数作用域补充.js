// 定义对象没有产生作用域
var obj = {
  // ! 函数在绑定的时候是全局作用域
  foo: function () {
    // parentScope 是全局
  },
};
