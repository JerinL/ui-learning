// let -> used for initialize the myVariable
// const -> used for tha variable is constant 

console.log("hii broo");
myVariable = "j e r  i n";
console.log(myVariable.indexOf("e"));
console.log(myVariable.split(""))   ;
console.log(myVariable.slice("r"));
console.log(myVariable.toUpperCase());


myNumber = 121;

console.log(Number(1))


const num = 22;
const num2 = 44;
const sum1 = num + num2;

console.log(sum1)

console.log(num === num2)

const strNum = "1010";
console.log(Number(strNum));


console.log(Number.isInteger(num2));
console.log(sum1.toString())

console.log(Math.PI);
console.log(Math.trunc(Math.PI));

console.log(Math.round(12.98))

console.log(Math.ceil(12.11))

console.log(Math.floor(12.99))

console.log(Math.pow(10,2))
console.log(Math.min(3,6,3,4,5,6,7))

console.log(Math.max(3,6,3,4,5,6,7))
console.log(Math.floor(Math.random()*100)+1)
console.log(Math.round(Math.random()*10)+1)
console.log(Math.ceil(Math.random()*10)+1)


const myName = "jerin";

console.log(myName.charAt(Math.floor(Math.random()*5)))
console.log(myName.charAt(Math.floor(Math.random()*5)))
console.log(myName.charAt(Math.floor(Math.random()*5)))
console.log(myName.charAt(Math.floor(Math.random()*5)))



console.log(Number(true))
console.log(Number(false))

if(sum1 == 66){
    console.log(true)
}else{
    console.log(false)
}

let viewer;
let reply;

if(viewer){
    reply = `Enjoy ${viewer}`;
}else{
    reply = `sorry its not available`
}
//console.log(reply)

let age = 18;
let vId = false;
let replay;
if(age < 18){
    replay =`your age is ${age} you are not qualified`
}else if(age ==18 && vId){
    replay = `you are eligible for vote`
}else{
    replay = "you dont have a voter id apply for that";
}
console.log(replay)

let value = "volworin";
switch(value){
    case "jerin":
        console.log("jerin");
        break;
    case"jack":
        console.log("jack");
        break;
    case"volworine":
        console.log("volvorine");
        break;
    default:
        console.log("default")            
}



switch(5){
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
        console.log("default")            
}


let a = 22;

let b = 10;

let c = a + b <= 20 ? a+b : 20;
console.log(c)


let suscriber = "subscribed";
let response = suscriber ? "welcome" : " please subscribe";
console.log(response);


let score = 50;
let grade = score > 89 ? "A" : 
            score > 79 ? "B" :
            score > 69 ?  "C":
            score > 59 ? "D" : "FAIL";

            console.log(grade);



let player = "rock";
let computer = "rock";
let result  =  player == computer ? "tie" : "not Tie"
console.log(result);

let myBoolean1 = alert("omg");
console.log(myBoolean1);

let myBoolean = confirm("oops");
console.log(myBoolean);

let my = prompt("oops");
if(my.length){
    console.log(my ?? "you did't enter your anything")
}else{
    console.log("you did't enter anything")
}