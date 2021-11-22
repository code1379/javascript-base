var obj = { name: "why" }; // 也指向了 obj 堆内存的引用
var info = { name: "kobe", friends: obj }; // 引用了 obj
var p = { name: "james", friends: obj }; // 引用了 obj

// retain 0x00001  count = 3
// info.friends = null // retain obj count = 2

// 这些引用都指向 0x000001，那么我的计数器就加 1
// 当计数器为 0 时，就会被自动回收

// 弊端：循环引用
var obj1 = { friend: obj2 };
var obj2 = { friend: obj1 };
