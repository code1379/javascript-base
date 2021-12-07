// 案例1
var foo = () => {
  console.log(arguments);
  console.log("foo");
};

foo();

// 案例二
function bar() {
  var zoo = () => {
    console.log(arguments);
  };

  return zoo;
}

var fn = bar(123);
fn();

// 案例三

var cool = (num1, num2, ...args) => {
  console.log(args);
};

cool(1, 2, 3, 4, 5);
