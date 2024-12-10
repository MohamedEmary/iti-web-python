// Create a JavaScript program to define an object representing a car with
// properties like brand, model, and year, and a method to display its details.

function createCar(brand = "none", model = "none", year = "none") {
  return {
    brand: brand,
    model: model,
    year: year,
  };
}

function displayCar(obj) {
  for (const key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
}

let volvoCar = createCar("volvo", "xc90", 2021);
displayCar(volvoCar);

// ====================================================================================

// // Write a program to loop through all the properties of an object and log their keys and values.

// function displayObj(obj) {
//   for (const key in obj) {
//     console.log(key, "=>", obj[key]);
//   }
// }
// displayObj({
//   brand: "volvo",
//   model: "xc90",
//   year: 2021,
// });

// ====================================================================================

// // Create a function that accepts an object and returns a new object with the keys and values swapped.

// function swapKeyValue(obj) {
//   var swapped = {};
//   for (const key in obj) {
//     swapped[obj[key]] = key;
//   }
//   return swapped;
// }

// console.log(
//   swapKeyValue({
//     brand: "volvo",
//     model: "xc90",
//     year: 2021,
//   })
// );

// ====================================================================================

// // Develop a program to merge two objects into one and handle property conflicts by
// // appending _1 to duplicate keys

// function mergeObj(obj1, obj2) {
//   var merged = {};

//   for (const key in obj1) {
//     merged[key] = obj1[key];
//   }

//   for (const key in obj2) {
//     if (!merged[key]) {
//       merged[key] = obj2[key];
//     } else {
//       merged[`${key}_`] = obj2[key];
//     }
//   }

//   return merged;
// }

// var car = {
//   brand: "volvo",
//   name: "xc90",
//   year: 2021,
// };

// var person = {
//   name: "Mohamed",
//   age: 23,
//   year: 2021,
// };

// console.log(mergeObj(car, person));

// ====================================================================================

// // Write a program to create a "person" object that includes nested objects for "address"
// // and "job", and a method to display all details

// var person = {
//   name: "Mohamed",
//   age: 23,
//   address: {
//     city: "Cairo",
//     street: "4 st",
//   },
//   job: {
//     company: "Google",
//     position: "Software Engineer",
//   },
// };

// function displayPerson(person) {
//   for (const key in person) {
//     if (typeof person[key] === "object") {
//       displayPerson(person[key]);
//     } else {
//       console.log(key, " => ", person[key]);
//     }
//   }
// }

// console.log(displayPerson(person)); // why does it always return undefined at the end

// ====================================================================================

// // Write a program to sort an array of objects by a specific property, such as
// // age in an array of people objects

// var people = [
//   {
//     name: "Mohamed",
//     age: 23,
//   },
//   {
//     name: "Ali",
//     age: 25,
//   },
//   {
//     name: "Ahmed",
//     age: 21,
//   },
// ];

// function sortByAge(objArr = []) {
//   return objArr.sort((p1, p2) => {
//     return p1.age - p2.age;
//   });
// }

// console.log(sortByAge(people));

// ====================================================================================

// // Create a JavaScript program to find the maximum and minimum numbers in an array.

// var nums = [2, 4, 1, 5, 7, 3, 9, 0];

// function getMinMax(arr) {
//   arr.sort((a, b) => a - b);
//   return {
//     min: arr[0],
//     max: arr[arr.length - 1],
//   };
// }

// console.log(getMinMax(nums));

// ====================================================================================
// // Create a program to reverse an array without using the built-in reverse() method

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function arrReverse(arr) {
//   let reversed = [];
//   for (let i = 0; i < arr.length; i++) {
//     reversed.unshift(arr[i]);
//   }
//   return reversed;
// }

// console.log(arrReverse(arr));

// ====================================================================================

// // Create function User will enter first numberThen enter an operation (sum,multi,subtract,division)
// // as stringThen enter second numberThen do the operation and show the result to user

// function mathOp() {
//   var n1 = parseInt(prompt("Enter first number"));
//   var op = prompt("Enter operation ('sum', 'multi', 'subtract', 'division')");
//   var n2 = parseInt(prompt("Enter second number"));

//   if (op === "sum") {
//     alert(n1 + n2);
//   } else if (op === "multi") {
//     alert(n1 * n2);
//   } else if (op === "subtract") {
//     alert(n1 - n2);
//   } else if (op === "division") {
//     alert(n1 / n2);
//   } else {
//     alert("Invalid operation");
//   }
// }

// mathOp();

// ====================================================================================

// // Create function User will enter his Username , Password If username = “admin” and
// // password = “421$$”Show him message “Welcome login success”If he entered incorrect username
// // or passwordTell him which data entered wrong

// function getCredentials() {
//   var username = prompt("Enter your username");
//   var password = prompt("Enter your password");
//   if (password === "421$$" && username === "admin") {
//     alert("Welcome login success");
//   } else if (username !== "admin") {
//     alert("Invalid username");
//   } else if (password !== "421$$") {
//     alert("Invalid password");
//   } else {
//     alert("Invalid username and password");
//   }
// }

// getCredentials();

// ====================================================================================

// // write a JavaScript function where the user has to guess a number generated by a program.
// // Ask the user to enter number between 0 and 9 Crate a function to generate a random number between
// // 0 and 9 If the user enter a correct number show, You guessed the correct number.

// function guessGame() {
//   var input = parseInt(prompt("Enter a number between 0 and 9"));
//   var number = Math.round(Math.random() * 10);
//   if (input === number) alert("You guessed the correct number");
// }

// guessGame();

// ====================================================================================

// // Write a program that accepts an array of objects (e.g., products with name and price)
// // and returns an array of objects where each product has a discounted Price property.

// var prods = [
//   {
//     name: "product1",
//     price: 100,
//   },
//   {
//     name: "product2",
//     price: 200,
//   },
//   {
//     name: "product3",
//     price: 300,
//   },
// ];

// function makeDiscount(prods) {
//   for (let i = 0; i < prods.length; i++) {
//     prods[i].price -= prods[i].price * 0.1;
//   }
//   return prods;
// }

// console.log(makeDiscount(prods));

// ====================================================================================

// // Show prompt that ask user to enter his birth date and tell user to enter the date in the following
// // format (DD–MM–YYYY) ex. 22–01–1999, and then create function that take user input as a parameter
// // and ensure that the string is entered in this format (that user entered string is
// // 10 characters and
// // contains (-) after the second character and after fifth character
// // If the user input was correct:
// // make the function create new date object, and initialize it with Day, Month, year values (using
// // date constructor: Date(y,m,d)) and then show alert to the user with the date in date string format.
// // If user input wasn't correct, show alert saying "Wong Date Format".

// // var date = prompt("Enter your birth date in the following format (DD-MM-YYYY)");
// var date = "01-05-2012";
// function validateDate(date = "") {
//   // check if the date is in the correct format
//   if (date.length === 10 && date[2] === "-" && date[5] === "-") {
//     var day = parseInt(date.slice(0, 2));
//     var month = parseInt(date.slice(3, 5));
//     var year = parseInt(date.slice(6));

//     if (
//       // check if the date numbers are valid
//       day <= 31 &&
//       month <= 12 &&
//       year <= 2024
//     ) {
//       var newDate = new Date(`${year}-${month}-${day}`);
//       console.log(newDate.toString());
//     } else {
//       console.log("Invalid Date Numbers");
//     }
//   } else {
//     console.log("Wrong Date Format");
//   }
// }

// validateDate(date);

// ====================================================================================

// // Make a function that takes date string as a parameter, and returns the Day name (Saturday, Sunday,...)
// // of the given date.
// function getDayName(date = "") {
//   return new Date(date).toString().split(" ")[0];
// }
// console.log(getDayName("01-05-2022"));

// ====================================================================================

// // Create phone book app Ask the user for operation through JS prompt
// // If user enters “add” Ask him for the name of the contact and phone number Then create js object for
// // that contact and add it to contacts array

// // Then ask him for new operation and repeat

// // If user enters “search” Ask him for something to search for
// // Get the user input and search in the contacts array in name and phone
// // Then show the user the full details of that contact Then ask him for new operation and repeat

// function phoneBook() {
//   var contacts = [];

//   do {
//     var operation = prompt("Enter operation ('add', 'search')");

//     if (operation === "add") {
//       var name = prompt("Enter name");
//       var phone = prompt("Enter phone number");
//       contacts.push({
//         name: name,
//         phone: phone,
//       });
//     } else if (operation === "search") {
//       var query = prompt("Enter name or phone number to search for");
//       for (let i = 0; i < contacts.length; i++) {
//         if (contacts[i].name === query || contacts[i].phone === query) {
//           alert(`Name: ${contacts[i].name}, Number: ${contacts[i].phone}`);
//           break;
//         }
//       }
//       alert("Contact not found");
//     }

//     var conf = window.confirm("Do you want to repeat?");
//   } while (conf);
// }

// phoneBook();
