var names = ["abc", "cba", "nba", "dna"];

// slice 只要给它传入一个 start/end，那么对于同一个数组来说，它会给我们返回确定的值
// slice 函数本身它是不会修改原来的数组
// slice 函数本身就是一个纯函数
var result = names.slice(1, 10);
console.log(result);
console.log(names);

// splice 在执行时，有修改掉调用的数组对象本身，修改的这个操作就是产生的副作用
// splice 不是一个纯函数

var result2 = names.splice(1);
console.log(result2);
console.log(names);
