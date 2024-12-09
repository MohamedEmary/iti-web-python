document.write("Hello World!");

console.log("Hello World!");

// ============================
// ========ASSIGNMENT==========
// ============================

var name = "John";
console.log(name);

var x = 10;
var y = 20;
var sum = x + y;
console.log(sum);

var city;
console.log(city);
city = "Cairo";
console.log(city);

alert("Welcome to JS Day 1");

var conf = confirm("Are you sure you want to delete this?");
console.log(conf);

var fname = prompt("Enter your first name:");
var lname = prompt("Enter your last name:");
var fullName = fname + " " + lname;
var confirmFullName = confirm("Is your full name " + fullName + "?");

var birthYear = prompt("Enter your birth year:");
alert("Welcome " + fullName + " your are " + (2024 - birthYear) + " years old");

alert("This is the release of our calculator");
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
alert("The sum of the two numbers is: " + (parseInt(num1) + parseInt(num2)));

var salary = prompt("Enter your salary:");
console.log(typeof salary);

var a = 5;
var b = 10;

// will not work with some values that require r
a = a * b; // 50
b = a / b; // divide it by its original value
a = a / b; // divide it by its original value which is currently stored in b
