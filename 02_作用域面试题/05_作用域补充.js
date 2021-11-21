function foo() {
  var m = 100;
}

foo();

console.log(m); // !报错，全局没有声明。如果没有加 var 会在全局 window上添加
