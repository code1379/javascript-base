var info = { name: "dell" };

function foo(obj) {
  return { ...obj, name: "why" };
}

info = foo(obj);
