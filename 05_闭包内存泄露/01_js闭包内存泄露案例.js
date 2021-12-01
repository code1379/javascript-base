function createFnArray() {
  // var arr = [1,1,1,1,1,1,1];
  // 这个数组占据多大的内存空间？ 可以计算出来。 1024 相当于 1024 个字节。
  // 现在我们填充的是 int 类型。整数：4个字节   1024=1kb;  1024*4=4kb; 1024*1024*4=4m; 占据的空间是 4M
  var arr = new Array(1024 * 1024).fill(1);

  return function () {
    console.log(arr.length);
  };
}

var arrayFn = createFnArray();
// 因为 fn 中使用了 arr.length; 所以 createFnArray 的 AO 不会被销毁。
// AO 不会被销毁，意味着 arr 也是不会被销毁的。
// 我们一旦这样做，我们内存中，就有一个数组（堆内存中），数组中的一项引用的 AO，AO 里面有 arr（堆内存中），arr 对应的是一个数组，在内存中会创建堆内存 4M 的空间。
arrayFn();

// ! 如果我没有将 arrayFn 置为 null。相当于 在 GO arrayFn => λ[fn] 0x000; AO[λ]
27:04