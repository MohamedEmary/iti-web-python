// var x = "abc";
// console.log(typeof x);

// x = 0xfff;
// console.log(typeof x, x);

// var y = 60;
// x = "50";

// console.log(x + y);
// console.log(y + x);

// console.log(x - y);

// x = "50px";
// y = "60px";
// console.log(x + y);
// console.log(x - y);

// x = 3;
// console.log(Math.pow(x, 3));
// console.log(Math.sqrt(9));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.ceil(Math.random() * 10));

// x = 5.6548;
// console.log(x.toFixed());
// console.log(typeof x.toFixed()); // returns a string

// x = 2;
// y = "2";
// console.log(x == y); //check only value
// console.log(x === y); //check both value and type

// console.log(x != y);
// console.log(x !== y);

// // Falsy values
// console.log("" == false);
// console.log("" === false);

// strings
// strings are treated as a sequence of characters
// x = "this is a string";
// console.log(x);
// console.log(x[0]);

// let str = new String("this is a string"); // has a bit lower performance
// console.log(typeof x, typeof str); // string, object

// console.log(str.indexOf("i")); // returns the index of the first occurrence of the specified value
// console.log(str.lastIndexOf("i"));

// console.log(null == false);

// x = "           trim me   ";
// console.log(x.trim(""));

// var str2 = "another string another string another string";
// console.log(str2.slice(5));
// console.log(str2.split(" "));

// console.log(str.concat(x));
// console.log(str2.substring(1, 10));

var mystr = "this is a string  ";
console.log(mystr.substring(3, 6));
console.log(mystr.toUpperCase());

console.log("this is " + "a two part string");

let num = 3;
console.log(`this is my number -> ${num}`);

console.log("this is \" ' a two part string");
console.log(`this is " ' \` a two part string`);

var date = new Date();
console.log(date);
console.log("getTime = " + date.getTime()); // returns milliseconds since 1970
console.log("getDay = " + date.getDay());
console.log("getMonth = " + date.getMonth());
console.log("getFullYear = " + date.getFullYear());

console.log("getSeconds = " + date.getSeconds());
console.log("getMinutes = " + date.getMinutes());
console.log("getHours = " + date.getHours());

console.log(date.getTimezoneOffset());

var date1 = new Date("2021-03-01");
var date2 = new Date("2021-03-03");
console.log(date2 - date1); // difference between two dates in ms
console.log((date2 - date1) / (1000 * 60 * 60)); // difference between two dates in hours

// moment.js library (out of the scope of this course)
// this library is used to work with date and time
// minified files
// CDN
// load balance
// distribute the load over multiple servers in different locations
// npm

var x = 2;
var y = 3;

if (x > y) {
  console.log('x is greater than y');
}else {
  console.log('y is greater than x');
}
