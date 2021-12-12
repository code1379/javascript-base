// !name 和 age 虽然没有使用属性描述符来定义，但是他们也是具备对应的特性的
// value： 赋值的value
// configurable: true
// writeable: true
// enumerable: true
var obj = {
  name: "why",
  age: 18,
};

// 数据属性描述符
Object.defineProperty(obj, "address", {
  value: "北京市",
  // 该特性不可删除，不可以冲新定义属性描述符
  configurable: false,
  //该特性是否可枚举
  enumerable: false,
  // 改特性是属性是否可以赋值（写入职）
  writable: false,
});

Object.defineProperty(obj, "height", {
  // 如果都没写的话，传递空对象默认值
  // value: undefined,
  // configurable: false,
  // writable: false,
  // enumerable: false,
});

delete obj.name;
console.log(obj.name);
// 1. configurable 不可删除
delete obj.address;
console.log(obj.address);

// 1. configurable 不可重新设置
Object.defineProperty(obj, "address", {
  value: "广州市",
  configurable: true,
});

// 2. 测试 enumerable 是否可枚举
for (let key in obj) {
  console.log(key);
}

console.log(Object.keys(obj));

// 3. 测试 writable
obj.address = "上海市";
console.log(obj.address);
