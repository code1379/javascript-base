const jsonString1 =
  '{"name":"why","age":18,"friends":{"name":"kobe"},"hobbies":["篮球","足球"]}';

const info = JSON.parse(jsonString1);
console.log(info);

// 解析拦截
const info2 = JSON.parse(jsonString2, (key, value) => {
  if (key === "age") {
    return value - 1;
  }
  return value;
});
