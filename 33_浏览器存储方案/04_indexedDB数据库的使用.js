// 打开数据库（和数据库建立连接）
const dbRequest = indexedDB.open("why");

dbRequest.onerror = function (err) {
  console.log("打开数据库失败");
};

let db = null;
dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

// 第一次打开、或者版本发生更新
dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;

  // 创建一些存储对象(keyPath 是主键)
  db.createObjectStore("users", { keyPath: "id" });
};

class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const users = [
  new User(1, "why", 18),
  new User(2, "dell", 19),
  new User(3, "huangyi", 20),
];

const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    const transaction = db.transaction("users", "readwrite");
    const store = transaction.objectStore("users");
    switch (i) {
      case 0:
        console.log("点击了新增");
        for (const user of users) {
          const request = store.add(user);
          request.onsuccess = function () {
            console.log(`${user.name}插入成功`);
          };
        }
        transaction.oncomplete = function () {
          console.log("添加操作全部完成");
        };
        break;
      case 1:
        console.log("点击了查询");
        // 查询方式 1 (知道主键，根据主键查询。异步操作)
        const request = store.get(1);
        request.onsuccess = function (event) {
          console.log(event.target.result);
        };

        // 查询方式 2 (遍历查询，游标从 0 开始)
        const request = store.openCursor();
        request.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            console.log(cursor.key, cursor.value);
            cursor.continue();
          } else {
            console.log("查询完成");
          }
        };
        break;
      case 2:
        console.log("点击了删除");
        const deleteRequest = store.openCursor();
        deleteRequest.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            if (cursor.key === 1) {
              cursor.delete();
            } else {
              console.log("删除完成");
            }
          } else {
            console.log("查询完成");
          }
        };
        break;
      case 3:
        console.log("点击了修改");

        const updateRequest = store.openCursor();
        updateRequest.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            if (cursor.key === 1) {
              const value = cursor.value;
              value.name = "curry";
              cursor.update();
            } else {
              console.log("更新完成");
            }
          } else {
            console.log("查询完成");
          }
        };
        break;
    }
  };
}
