function foo() {
  var name = "why";
  var age = 18;

  function bar() {
    debugger;
    console.log(name);
    // console.log(age);
  }
  return bar;
}

var fn = foo();
/**
 * 正常情况下，FEC 中 AO
 *  name: "why",
 *  age: 18
 *
 *  bar 函数中引入了 name，那么 name 肯定是不会被销毁的。
 *  那么 age 会被销毁吗？ 因为 bar 的 ParentScope 指向 AO，所以 AO 是不会被销毁的（这是 ECMA 给我们的规范）
 *  ! 但是 js 引擎：v8 引擎察觉到我们始终就没有用到 age 这个属性，是不是应该在 AO 中删除掉？ -- 从规范来说不应该删除，从引擎优化角度应该删除
 *  * 现在 age 是简单类型，但是如果 age = new Array(1024*1024).fill("aaaaa")
 *  * js 引擎会给我们做一个优化，会删除掉
 */
fn();

/**
 * bar 函数执行时，它的 ParentScope 指向上级作用域的 AO
 *
 */
