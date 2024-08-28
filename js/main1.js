//scops
let x = 1;
var x1 = 1;
const x2 = 1;

console.log(x + x1 + x2);

console.log("kjbfdhb");

let x11 = 1;
x11 = 2;

console.log(x11);

const myArray = [1, 2, 4, 56, 7];
delete myArray[2];
myArray[0] = 99;

myArray.push("array");
const data = myArray.shift();
myArray.pop();
console.log(myArray);
console.log(myArray.length);
console.log(myArray[3]);
console.log(myArray[myArray.length - 1]);

console.log(data);

const earnMoneyA = ["FrontEnd", "Backend", "fullstack"];
const earnMoneyB = ["AI", "Blockchain", "DataAnalytics"];
const growMoneyA = ["Stocks", "Realestate", "Fixed Income"];
const growMoneyb = ["Options", "Futures"];
const giveMoney = ["Quality Education"];

const newnewArray = [earnMoneyA, earnMoneyB];
const mulArray = [newnewArray[0][1]];
console.log(newnewArray[0][1]);
console.log(mulArray);

const earnMoney = [earnMoneyA, earnMoneyB];
const growMoney = [growMoneyA, growMoneyb];
console.log(earnMoney[0][1], growMoney[1][1]);

const obj = {
  name: "jerin",
  age: 22,
  gender: "male",
};

console.log(obj.gender.length);

const sumsum = () => {
  return 1 + 7;
};

const student = {
  name: "jerin",
  age: 23,
  mail: ["mail1", "mail2"],
  address: {
    phNo: 345678,
    place: `tharavilai ${sumsum()}`,
    sum: sumsum(),
    action: function doSomething() {
      return "hii";
    },
  },
  book: {
    bookName: "HarryPotter",
    auther: "i forgot",
  },
};

console.log(student.address);

const arr = [2, 3, 4, 5, 0];
let min = arr[0];
for (i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);

const anObject = Object.create(student);
anObject.book.bookName = function changeBookName() {
  return "newBookName";
};
console.log(anObject.book.bookName());

console.log(Object.values(student));

const car = {
  name: "carNAme",
  model: "modelNumber",
};
car.name = "BMW";
car.model = "2017";
// delete car.model;
for (let c in car) {
  console.log(`${c} is a ${car[c]}`);
}

const { name: myFavCar, model: favModel } = car;
console.log(myFavCar, favModel);
const { name, model } = car;
console.log(name, model);

function start({ name }) {
  return name;
}

console.log(start(car));

const funCall = (car) => {
  let count = 0;
  const array = [];
  for (let job in car) {
    console.log(job);
    array[count] = `${car[job]}`;
    count = count + 1;
  }
  return array;
};

console.log(funCall(car));

class User {
  constructor(id, name, mail) {
    this.id = id;
    this.name1 = name;
    this.email1 = mail;
  }

  getName() {
    return this.name1;
  }

  setName(name) {
    this.name1 = name;
  }

  display() {
    console.log(this.id, this.name1, this.email1);
  }
}
//const userInput = prompt("type your name");
const dis = new User(1, "jerin", "jerinjack111@gmail");
dis.email1 = "darwinjerin111@gmail";
dis.setName("darwin");
console.log(dis);
dis.display();
console.log(dis.getName());

class Person {
  constructor(id, name, mail) {
    this.id1 = id;
    this.name1 = name;
    this.mail1 = mail;
  }

  getMail() {
    console.log(this.mail1)
    return this.mail1;
  }
  getName() {
    console.log(this.name1)
    return this.name1;
  }
}

class Student extends Person {
  constructor(id, name, mail) {
    super(id, name, mail);
    this.userType = "student";
    this.studentAction = "learning";
  }

  getStudents() {
    console.log(
      this.id1,
      this.name1,
      this.mail1,
      this.userType,
      this.studentAction
    );
  }
}

class Teacher extends Person {
  constructor(id, name, mail) {
    super(id, name, mail);
    this.userType = "teacher";
    this.studentAction = "Teaching";
  }

  getTeacher() {
    console.log(
      this.id1,
      this.name1,
      this.mail1,
      this.userType,
      this.studentAction
    );
  }
}

const studObj = new Student(1, "studentName", "student@gmail.com");
studObj.getStudents();

const teacherObj = new Teacher(2, "teacherName", "teacher123@gmail.com");
teacherObj.getTeacher();


function findUser(id){
    const id1 = id;
    const name1 = "jerin";
    const age1 = 22;
    const userObj = {
        id : id1,
        name : name1,
        age : age1
    }
    return userObj;
}

const res =findUser(123);
console.log(res.name1)
console.log(res);


const jsonObj = {
    mobile : "mobile name",
    model :"model name",
    founder : "founder"
}

const sendJson = JSON.stringify(jsonObj);
console.log(sendJson);
console.log(typeof(sendJson));