var obj = {
  name: "dell",
  age: 18,
  _address: "北京",
};

function listenGet() {
  console.log("get listener");
}
function listenSet() {
  console.log("set listener");
}

Object.defineProperty(obj, "address", {
  configurable: true,
  enumerable: true,
  set(value) {
    listenSet();
    this._address = value;
  },
  get() {
    listenGet();
    return this._address;
  },
});

console.log(obj.address);

obj.address = "上海";
