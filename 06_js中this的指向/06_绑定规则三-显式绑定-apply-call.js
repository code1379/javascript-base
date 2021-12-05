function foo() {
  console.log(this);
}

// foo 直接调用和 call 和apply 调用的不同在于 this 绑定的不同
// foo 直接调用指向的是全局对象（window）
foo();

var obj = {
  name: "obj",
};

// call/apply 是可以指定 this 的绑定对象
foo.call(obj);
foo.apply(obj);
foo.apply("aaa");

// 2. call 和 apply 有什么区别？
function sum(num1, num2) {
  console.log(num1 + num2, this);
}

sum.call("call", 20, 30);
sum.apply("apply", [20, 30]);

// 3. call 和 apply 在执行函数时，是可以明确绑定this，这个绑定规则称之为显式绑定
