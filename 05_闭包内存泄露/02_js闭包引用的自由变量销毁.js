function foo() {
  var name = "why";
  var age = 18;

  function bar() {
    console.log(name, age);
  }
  return bar;
}

var fn = foo();

fn();

/**
 * bar 函数执行时，它的 ParentScope 指向上级作用域的 AO
 */

var baz = foo();
/**
 * 重新执行一次，代码又会重新执行一般，创建一个新的 bar 函数。创建一个新的函数执行上下文和一个新的AO。
 * 所以当 fn = null 时， baz 并不会指向 null
 */
