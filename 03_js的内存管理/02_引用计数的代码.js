var obj = { name: "why" }; // 也指向了 obj 堆内存的引用
var info = { name: "kobe", friends: obj }; // 引用了 obj
var p = { name: "james", friends: obj }; // 引用了 obj

// retain 0x00001  count = 3
// info.friends = null // retain obj count = 2
