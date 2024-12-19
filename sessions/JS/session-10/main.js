let arr = [10, 20, , 30, 40, 50];
console.log(arr);
console.log();
console.log(arr.find((x) => x > 30));
console.log(arr.findIndex((x) => x > 30));
arr.forEach((num) => console.log(num)); // ignores empty item
arr.forEach((num, index) => console.log(index, "=", num));
// TODO Review every and some
console.log(arr.every((item) => item > 40)); // false, returns a boolean value (if all values in array are greater than 40)
console.log(arr.every((item) => item > 5)); // true

console.log(arr.some((item) => item > 40)); // true, returns a boolean value (if any value in array is greater than 40)
console.log(arr.some((item) => item > 400)); // false

console.log(arr.with(1, 600)); // replaces value at index 1 with 600 and returns new array

console.log(Array.from("This is a string")); // converts string to array of characters

let arr3 = [
  [1, 2],
  [3, 4],
  [5, [6, 7]],
];
console.log(arr3.flat()); // flattens array by 1 level (depth is 1 by default)
console.log(arr3.flat(1)); // flattens array by 1 level
console.log(arr3.flat(2)); // flattens array by 2 levels

// ========================================================

let set = new Set();
set.add(1);
set.add(1);
set.add(2);
set.add(3);
set.add(3);
set.add(33);
console.log(set);

set = new Set([1, 1, , , 1, 2, 5, 4, 2, [1, 2, 2], [1, 2, 2], [1, 2, 3]]);
console.log(set);

let anotherSet = new Set([1, 2, 3, 4, 5]);
anotherSet.add(8);
anotherSet.add(6);
anotherSet.add(7);
console.log(anotherSet);

console.log(anotherSet.keys());
console.log(anotherSet.keys());
console.log(anotherSet.values());

// TODO difference between map, set, dictionary and which one has sorted values
let map = new Map();
map.set("name", "mohamed");
map.set(30, "age");
map.set([1, 2], "array");
map.set("job", "developer");
console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.size);
console.log(map.get(30));
console.log(map.get([1, 2]));
console.log(map.get("name"));

map.get([1, 2]); // undefined
// This is because the array [1, 2] is a reference to a different object in
// memory, so the map.get([1, 2]) is looking for a different reference in memory
// than the one that was used to set the value in the map.

// To solve this we need to use a variable in both set and get
let key = [1, 2];
map.set(key, "array");
console.log(map.get(key));

console.log(map.has("name"));
console.log(map);
console.log(map.delete("name"));
console.log(map);
map.forEach((item, index) => console.log(index, ":", item));

// ========================================================

// You can set default values for parameters in a function even
// if they are inside an array
function arrParams([x = 10, y = 20, ...arr]) {
  let sum = x + y;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

console.log(arrParams([1, , 5, 6, 8])); // 1 + 20 + 5 + 6 + 8 = 40
// The empty item in the array will take the default value of 20 (y = 20)

function objParams({ name = "Mohamed", age = 90 }) {
  console.log(`Your name is ${name}, and your age is ${age}`);
}
objParams({ name: "Ahmed" });
objParams({ name: "Ahmed", address: "Cairo" }); // address will be ignored

function objParamsRest({ name = "Mohamed", age = 90, ...obj }) {
  console.log("name =", name);
  console.log("age =", age);
  for (const key in obj) {
    console.log(`${key} = ${obj[key]}`);
  }
}
objParamsRest({ name: "Ahmed" });
objParamsRest({ name: "Ahmed", address: "Cairo", age: 23, job: "developer" });
objParamsRest({ name: "Ahmed", age: 23 });

// ========================================================

function outerFunc() {
  console.log("Outer Func");
  return function innerFunc(param = "default") {
    console.log("Inner Func");
    return `Inner Func: ${param}`;
  };
}

let func = outerFunc();
func(); // Inner Func

let innerReturn = outerFunc()();
console.log(innerReturn);

innerReturn = outerFunc()("Hello");
console.log(innerReturn);

// IIFE
(() => console.log("IIFE"))();

function outerWithIIFE() {
  console.log("Outer With IIFE");
  return (() => console.log("Returned IIFE"))();
}

outerWithIIFE();

// Generator function

// TODO What is generator function

function* genFun1() {
  yield 1;
  yield 2;
  yield 3;
}

let x = genFun1();
console.log(x);
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());

function* genFun2() {
  for (let i = 0; i < 2; i++) {
    yield i;
  }
  console.log("after yeild");
}

let y = genFun2();
console.log(y);
console.log(y.next());
console.log(y.next());
console.log(y.next());

function* genFun3() {
  for (let i = 0; i < 3; i++) {
    yield i;
    console.log(`yield ${i}`);
  }
}

let z = genFun3();
console.log(z);
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());

// Hoisting and API calls with yield

// function hoist() {
//   console.log(x);
//   let x = "2";
// }
// hoist();

let val = "Inside Global Object";

const obj = {
  userName: "Mohamed",
  age: 30,
  val: "Inside Object",
  fn1: () => {
    console.log("this = ", this); // window object with arrow function
    console.log(`name: ${this.userName}, age: ${this.age}, val: ${this.val}`); // all undefined except "val" it will be "Inside Global Object"
  },
  fn2: function () {
    console.log("this = ", this);
    console.log(`name: ${this.userName}, age: ${this.age}, val: ${this.val}`);
  },
  fn3() {
    console.log("this = ", this);
    console.log(`name: ${this.userName}, age: ${this.age}, val: ${this.val}`);
  },
};

console.log("==================================");
obj.fn1();
obj.fn2();
obj.fn3();

// The case where semicolon is mandatory
// iife after an object initialization

// function, name: function inside an object

let a = 10;
let b = 20;
let c = 30;
const sameKeyVal = { a, b, c }; // Here the key and value are the same a:10, b:20, c:30
console.log(sameKeyVal);

// TODO
// 1. object.freeze
// 2. value in global object and trying to access it from this inside an arrow function
// 3. hoisting of let variable inside block scope

let myArr = [1, 2, 3, 4, 5];
// Object.freeze(myArr); // freeze prevents changing anything in the array
// myArr.push(6);
console.log(myArr);

{
  console.log(xx);
  console.log(yy);
  let xx = "x";
}

// TODO seal and define property
// With seal try to delete or edit or add new value
// defineProperty 6 configurations
// watch defineProperty part in session video
