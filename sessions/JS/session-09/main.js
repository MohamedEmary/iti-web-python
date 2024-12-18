/* // let x = 1;
// let x = 2;

console.log(y);
let y = 3;

for (let i = 0; i < 5; i++) {
  // console.log(i);
}

console.log(i); // ReferenceError: i is not defined

for (var j = 0; j < 5; j++) {
  // console.log(j);
}

console.log(j); // 5 */

// =======================

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// var y = "global";

// function func() {
//   var x = "function scope";
// }

// // console.log(window);

// let myName = "mohamed";
//
// console.log(myName.startsWith("m"));
// console.log(myName.includes("oha"));
//
// console.log(myName.padStart(10, "*"));
// console.log(myName.padEnd(10, "*"));
//
// myName = "   hi   ";
// console.log(myName.trim());
// console.log(myName.trimStart());
// console.log(myName.trimEnd());
//
// let n1 = 1000; // number
// let n2 = 1000n; // bigInt
// console.log(n1 == n2); // true --> same value different datatype
// console.log(n1 === n2); // false --> different datatype
//
// // to make reading numbers easier ES6 introduced _ as a separator
// let num = 1_0000000000000000000000000000_000_000_00000;
// console.log(num);
//
// num = 100000000;
// console.log("without exponential: ", num);
// console.log("with exponential: ", num.toExponential());
//
// num = 1_0000000000000000000000000000_000_000_00000n;
// console.log(num);
//
// let bool = Boolean("" || 20);
// console.log(bool);
// bool = Boolean(0 || 10);
// console.log(bool);
//
// const myObj = {
//   fname: "Mohamed",
// };
//
// console.log((myObj.lname = "Emary"));
//
// // console.log(myObj.address.city); // error
// console.log(myObj?.address?.city); // undefined
//
// let arr = [1, 2, 3, 4];
// let [a, b, , c, d] = arr;
// console.log(a, b, c, d); // 1 2 4 undefined
// // c is 4 because we skipped the 3rd element
// // d is undefined because there is no 5th element in the array
//
// const anotherObj = {
//   fname: "Mohamed",
//   lname: "Emary",
//   gender: "Male",
// };
//
// const { fname: MyFName, lname, gender } = anotherObj;
// console.log(MyFName, lname, gender);
// // MyFName is alias for fname and now name has to be called MyFName
//
// const obj2 = {
//   fname: "Mohamed",
//   lname: "Emary",
//   gender: "Male",
//   address: {
//     city: "Cairo",
//     country: "Egypt",
//   },
// };
//
// /* 
// let { fname, lname: LastName, address } = obj2;
// console.log(fname, LastName, address);
// */
//
// ({
//   fname,
//   lname: LastName,
//   address: { city, country },
// } = obj2);
// // console.log(fname, LastName, address); // error
// console.log(fname, LastName, city, country);
//
// ({
//   fname,
//   lname: LastName,
//   address: { city, country },
//   address,
// } = obj2);
// console.log(fname, LastName, address);
// console.log(fname, LastName, city, country);
//
// let mohamed = {
//   fname: "Mohamed",
//   lname: "Emary",
//   age: 23,
// };
//
// for (const key in mohamed) {
//   console.log(`${key} = ${mohamed[key]}`);
// }
//
// let names = ["Mohamed", "Emary", "Ali"];
// for (const personName of names) {
//   console.log(personName);
// }
//
// console.log(Object.entries(mohamed)); // [ [ 'fname', 'Mohamed' ], [ 'lname', 'Emary' ], [ 'age', 23 ] ]
// for (const [key, val] of Object.entries(mohamed)) {
//   console.log(key, "=", val);
// }
//
