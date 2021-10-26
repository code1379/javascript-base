function Student(name, age) {
  this.name = name;
  this.age = age;
}

function Teacher() {}

const stu = new Student("why", 18);
console.log(stu);

console.log(stu.__proto__ === Student.prototype);

// TODO 我希望 new Student 时，调用的依然是 Student。但是我希望你创建出来的类型是 Teacher 类型

const newStu = Reflect.construct(Student, ["why", 18], Teacher);
console.log(newStu);
