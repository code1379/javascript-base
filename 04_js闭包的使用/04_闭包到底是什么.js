function foo() {
  function bar() {
    console.log("bar");
  }
  return bar;
}

var fn = foo();
fn();

// GEC VO: GO fn=undefined foo=0x00001
// FEC VO:AO var=0x00002 return 0x00002
// fn执行 VO:AO bar 的 parentScope
