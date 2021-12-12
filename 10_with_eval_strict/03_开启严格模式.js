"use strict";
// ! 没用 var 声明
message = "hello world";
console.log(message);

// ! 静默错误
true.name = "abc";

function foo() {
  "use strict";
  true.foo = "foo";
}
