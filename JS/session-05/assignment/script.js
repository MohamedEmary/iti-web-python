// Write a program to check if a given number is positive, negative, or zero using if-else.
var x = prompt("Enter a number: ");
if (x > 0) {
  console.log("Positive");
} else if (x < 0) {
  console.log("Negative");
} else {
  console.log("zero");
}

// Write a program that uses confirm() to ask the user: "Do you want to proceed?"
// If the user clicks  OK, display "You chose to proceed" in an alert. If the user
// clicks Cancel, display "Action  canceled."
var proceed = confirm("Do you want to proceed?");
proceed ? alert("You chose to proceed") : alert("Action canceled");

// Modify this code to use a ternary operator instead of if-else:
var num = 10;
num % 2 === 0 ? console.log("hi") : console.log("heloo");

// Ask the user to enter his age. You must validate the user input (positive numbers only)
// Show the status of the user knowing that
// Child is between 1-10
// Teenager is between 11-18
// Grown up is between 19-50
// Old is greater than 50
// keep asking the user to enter another age until he clicks cancel

do {
  var age = parseInt(prompt("Enter your age: "));
  if (age) {
    if (age >= 1 && age <= 10) {
      alert("Child");
    } else if (age >= 11 && age <= 18) {
      alert("Teenager");
    } else if (age >= 19 && age <= 50) {
      alert("Grown up");
    } else {
      alert("Old");
    }
  }
} while (age);

// 5- Ask the user to enter a string
// Count the number of vowels in that string (a,e,o,u,i)

// var str = prompt("Enter a string: ");
var str = "lorem mohamed ahmed";
var freq = {
  a: 0,
  e: 0,
  i: 0,
  o: 0,
  u: 0,
};
var vowels = ["a", "e", "i", "o", "u"];
for (var i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    freq[str[i]]++;
  }
}

console.log(freq);

// Write a JavaScript program to convert the 24 hour clock to 12 , adding am or pm based on its
// value use prompt() to get the value from the user.
// Examples   0 -> 12AM     11 -> 11AM     13 -> 1PM
// var hour24 = parseInt(prompt("Enter the hour in 24 format: "));
var hour24 = 0;
var timeOfDay = hour24 >= 12 ? "PM" : "AM";

if (hour24 > 23 || hour24 < 0) {
  console.log("Invalid hour");
} else if (hour24 === 0 || hour24 === 12) {
  console.log(`12 ${timeOfDay}`);
} else {
  console.log(`${hour24 % 12} ${timeOfDay}`);
}

// Write a JavaScript program to Convert First letter to Uppercase Ask the user to enter the string
// and Show the result
var userInput = prompt("Enter a string: ");
userInput = userInput[0].toUpperCase() + userInput.slice(1);
console.log(userInput);

// 8- Write a script where the user confirms their choice of color:
// First, use prompt() to let the user type their favorite color.
// Then, use confirm() to ask: "You chose [color]. Is that correct?"
// If OK, display an alert: "Great choice!"  If Cancel, display: "Let's try again."

do {
  var color = prompt("Enter your favorite color: ");
  var confirmColor = confirm(`You chose ${color}. Is that correct?`);
  if (confirmColor) {
    alert("Great choice!");
    break;
  } else {
    alert("Let's try again.");
  }
} while (!confirmColor);

// 9- Write a while loop that keeps prompting the user for a password until they
// enter the correct one.
var myPass = "My Pass";
do {
  var usrPass = prompt("Enter the password again:");
} while (myPass !== usrPass);

// 10- How do you compare two dates in JavaScript to see if one is earlier than the other?
var date1 = new Date("2023-01-01");
var date2 = new Date("2024-01-01");
date1 > date2
  ? console.log("date1 is greater (earlier)")
  : console.log("date2 is greater (earlier)");

// 11- Write a JavaScript program to calculate the number of days between Given two dates.
date1 = new Date("2024-03-01");
date2 = new Date("2024-03-03");
console.log(date2 - date1); // difference between two dates in ms
console.log((date2 - date1) / (1000 * 60 * 60 * 24)); // difference between two dates in hours

// 12- Use a for loop to calculate the sum of all even numbers between 1 and 100.
var sum = 0;
for (let i = 1; i <= 100; i++) {
  i % 2 === 0 ? (sum += i) : null;
}
console.log(sum);

// 13- How can you extract the substring "World" from the string "Hello World!"?
var hello = "Hello World!";
console.log(hello.slice(6, -1));

// 14- How can you round the number 5.678 to two decimal places?
var num1 = 5.678;
console.log(Number(num1.toFixed(2)));

// 15- Write a JavaScript program that returns true if a number is divisible by both 3 and 5,
// otherwise false.
var num2 = parseInt(prompt("Enter a number: "));
if (num2 % 3 === 0 && num2 % 5 === 0) {
  console.log(true);
} else {
  console.log(false);
}
