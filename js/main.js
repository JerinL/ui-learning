// let -> used for initialize the myVariable
// const -> used for tha variable is constant
// import {fName} from "./main1";

// import { greet } from "./utils.js";
// import User from './main1.js';


// import { greet } from "./test.js";

// console.log(greet("World"));

// import Test from "./Test.js";

// const uu1 = new User(1,"jerin","@gmail.com");
// console.log(uu1.display);

// // console.log(greet("Batrick"))

// console.log(m.fName());
// console.log(m.default());

// const uu = findUser(1);
// console.log(uu);

console.log("hii broo");
let myVariable = "j e r  i n";
console.log(myVariable.indexOf("e"));
console.log(myVariable.split(""));
console.log(myVariable.slice("r"));
console.log(myVariable.toUpperCase());

// console.log(fName());
// console.log(fName())

let myNumber = 121;

console.log(Number(1));

const num = 22;
const num2 = 44;
const sum1 = num + num2;

console.log(sum1);

console.log(num === num2);

const strNum = "1010";
console.log(Number(strNum));

console.log(Number.isInteger(num2));
console.log(sum1.toString());

console.log(Math.PI);
console.log(Math.trunc(Math.PI));

console.log(Math.round(12.98));

console.log(Math.ceil(12.11));

console.log(Math.floor(12.99));

console.log(Math.pow(10, 2));
console.log(Math.min(3, 6, 3, 4, 5, 6, 7));

console.log(Math.max(3, 6, 3, 4, 5, 6, 7));
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.round(Math.random() * 10) + 1);
console.log(Math.ceil(Math.random() * 10) + 1);

const myName = "jerin";

console.log(myName.charAt(Math.floor(Math.random() * 5)));
console.log(myName.charAt(Math.floor(Math.random() * 5)));
console.log(myName.charAt(Math.floor(Math.random() * 5)));
console.log(myName.charAt(Math.floor(Math.random() * 5)));

console.log(Number(true));
console.log(Number(false));

if (sum1 == 66) {
  console.log(true);
} else {
  console.log(false);
}

let viewer;
let reply;

if (viewer) {
  reply = `Enjoy ${viewer}`;
} else {
  reply = `sorry its not available`;
}
//console.log(reply)

let age = 18;
let vId = false;
let replay;
if (age < 18) {
  replay = `your age is ${age} you are not qualified`;
} else if (age == 18 && vId) {
  replay = `you are eligible for vote`;
} else {
  replay = "you dont have a voter id apply for that";
}
console.log(replay);

let value = "volworin";
switch (value) {
  case "jerin":
    console.log("jerin");
    break;
  case "jack":
    console.log("jack");
    break;
  case "volworine":
    console.log("volvorine");
    break;
  default:
    console.log("default");
}
// greet();

switch (5) {
  case 2:
    console.log("jerin");
    break;
  case 4:
    console.log("jack");
    break;
  case 6:
    console.log("volvorine");
    break;
  default:
    console.log("default");
}

let a = 22;

let b = 10;

let c = a + b <= 20 ? a + b : 20;
console.log(c);

let suscriber = "subscribed";
let response = suscriber ? "welcome" : " please subscribe";
console.log(response);

let score = 50;
let grade =
  score > 89
    ? "A"
    : score > 79
    ? "B"
    : score > 69
    ? "C"
    : score > 59
    ? "D"
    : "FAIL";

console.log(grade);

let player = "rock";
let computer = "rock";
let result = player == computer ? "tie" : "not Tie";
console.log(result);

// let myBoolean1 = alert("omg");
// console.log(myBoolean1);

// let myBoolean = confirm("oops");
// console.log(myBoolean);

// let my = prompt("oops");
// if(my){
//     console.log(my ?? "you did't enter your anything")
// }else{
//     console.log("you did't enter anything")
// }
// console.log(my.trim())
// console.log(my.trim().length)

// for(let i =1;i<=10;i++){
//     console.log(i)
// }
// let j = 10;
// while(j<=50){
//     console.log(j)
//     j = j+10;
// }

let i = 10;
do {
  console.log(i);
  i = i + 10;
} while (i <= 50);

let myName1 = "jerin";
for (i = 0; i < myName1.length; i++) {
  console.log(myName1.charAt(i));
}

//functions....

let upperCaseName = "jerin";
console.log(upperCaseName.toLocaleUpperCase());
console.log(upperCaseName.toLocaleUpperCase().toLocaleLowerCase());

function substract() {
  let a = 5;
  let b = 10;
  return a - b;
}

function substractWithvariable(a, b) {
  c = a - b;
  if (c > 5) {
    c = 3;
  } else if (c !== 2) {
    c = c === 2 ? 100 : 10;
  } else {
    c = 0;
  }
//   Test();
  return c;
}

console.log(substract());

console.log(substractWithvariable(4, 2));

let mail = "jerinjack111@gmail.com".slice(0, 9);
console.log(mail.indexOf("k"));
console.log(mail);

let mail1 = "jerinjack111@gmail.com";

// console.log(getNameFromEmail(mail1))

const nameMy = (mailReq) => {
  console.log(substractWithvariable(10, 10));
  return mail1.slice(0, 5);
};

const nameMy1 = function getNameFromEmail(mailReq) {
  console.log(substractWithvariable(10, 10));
  return mail1.slice(0, 9);
};

console.log(nameMy1(mail1));

console.log(nameMy(mail1));

const myOb = {
  mame: "jerin",
  mail: "test@gmail.com",
};

const sessionObj = JSON.stringify(myOb);

window.sessionStorage.setItem("mySession", sessionObj);

console.log(sessionStorage.getItem("mySession"));
