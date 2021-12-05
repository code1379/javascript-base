// 在大多数情况下，this 都是出现在函数中
// 在全局作用域下
// 浏览器：window
// node环境: {} module => 加载 => 编译 => 放到一个函数 => 执行这个函数.apply
// function foo(){} foo.apply({})

console.log(this); // window
