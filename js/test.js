// // const Test = () => {
// //   console.log("Test Message");
// // };
// // Test();

// // export default Test;

// export function greet(name) {
//   return `Hello, ${name}`;
// }

// export const message = "How you doing?";


// utils.js

import {empJson,empJson1} from "./utils.js";


const manuplateJson = empJson.map(emp => {
  return{
    ...emp,
  fullName:`${emp.firstName} ${emp.lastName}`
  }
});;


console.log(manuplateJson);

const data = empJson1.filter(emp => {
  return emp.id =="2";
});

console.log(data);

