function log(date, type, message) {
  console.log(
    `[${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}] - [${type}]: [${message}]`
  );
}

// 都是当前时间，没必要每次都 new 一个 Date
log(new Date(), "DEBUG", "查找到轮播图的bug");
log(new Date(), "DEBUG", "查询菜单的bug");
log(new Date(), "DEBUG", "查询数据的bug");

// 柯里化优化
var newLog = (date) => (type) => (message) =>
  console.log(
    `[${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}] - [${type}]: [${message}]`
  );

// 如果我现在打印的都是当前时间

var nowLog = newLog(new Date());
nowLog("DEBUG")("查找轮播图的bug");
nowLog("FEATURE")("新增了添加用户的功能");

var nowAndDebugLog = newLog(new Date())("DEBUG");
nowAndDebugLog("查找到 xxx Bug");

var nowAndFeatureLog = newLog(new Date())("FEATURE");
nowAndFeatureLog("查找到 xxx Bug");
