// 1.Use for...in to iterate over an object’s properties.
console.log("================== Q1 ==================");
const person = {
  fname: "Mohamed",
  lname: "Emary",
  age: 23,
  address: {
    city: "Cairo",
    country: "Egypt",
  },
};

for (const key in person) {
  console.log(key, "=", person[key]);
}

// 2.Use for...of to iterate over the values of an array.
console.log("================== Q2 ==================");
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}

// 3.Compare the behavior of for...in and for...of when used on an array.
console.log("================== Q3 ==================");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

for (const day of days) {
  console.log(day); // prints values
}

for (const day in days) {
  console.log(day); // prints indexes
}

// Try spread operator with any array of your implementation.
console.log("================== Q4 ==================");
let rest = [5, 6, 7, 8];
let nums = [1, 2, 3, 4, ...rest];
console.log(nums);

// 5. print student data in the console using template literals in this format:
// a. {Std_name} is a student in faculty of {fac_name} in university {Uni_name}
// And his final grad is {grad}.
console.log("================== Q5 ==================");
const student = {
  name: "Mohamed",
  faculty: "Computer Science",
  university: "Benha University",
  grade: 90,
};
console.log(
  `${student.name} is a student in faculty of ${student.faculty} in university ${student.university} and his final grade is ${student.grade}.`
);

// 6. Check if ‘heloo’ include a litter ‘e’
console.log("================== Q6 ==================");
console.log("hello".includes("e"));

// 7. Create an object and set a default value if null to any property using ?? operator
console.log("================== Q7 ==================");
const obj = {
  name: "Mohamed",
  age: null,
  faculty: "Computer Science",
};

obj.name = obj.name ?? "Ahmed";
obj.age = obj.age ?? 23;
obj.faculty = obj.faculty ?? "Commerce";

console.log(obj);

// 8. Write a program that accesses deeply nested properties in an object using regular property access.
// Show how this causes errors when some properties are missing. Refactor the code using optional chaining
// (?.) to safely access the same properties.
console.log("================== Q8 ==================");
const person2 = {
  fname: "Mohamed",
  lname: "Emary",
};
person2.age = 23;
console.log(person2.age);
// console.log(person2.address.city); //error
console.log(person2?.address?.city);

// 9. Demonstrate how to clone an object using the spread operator and modify properties in the cloned
// object without affecting the original.

console.log("================== Q9 ==================");
let obj1 = {
  course: "JavaScript",
  duration: "3 months",
};

let obj2 = { ...obj1 };

obj2.course = "HTML";

console.log(obj1);
console.log(obj2);

// 10.Use this object and destructuring title and localization_tags
console.log("================== Q10 ==================");
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: ["de-gen", "de-or"],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      titles: "JavaScript-Umgebung",
    },
  ],
};

const {
  translations: [
    {
      localization_tags: [gen, or],
    },
  ],
} = metadata;

console.log(gen, or);

// 11.Write a program that uses Object.entries() to convert an object into an array of
// key-value pairs. Iterate over the resulting array and perform operations like converting
// all keys to uppercase.
console.log("================== Q11 ==================");
console.log(Object.entries(student)); // [["name", "Mohamed"],["faculty", "Computer Science"],["university", "Benha University"],["grade", 90]];
const newObj = {};
for (const [key, val] of Object.entries(student)) {
  newObj[key[0].toUpperCase().concat(key.slice(1))] = val;
}
console.log(newObj);

// 12. Create an object with a Symbol key to store a private value.Demonstrate that the Symbol
// key does not appear in Object.keys() or for...in.
console.log("================== Q12 ==================");
const objWithPrivate = {
  [Symbol("I'm Private")]: "Private Value",
  notPrivate1: "Public Value 1",
  notPrivate2: "Public Value 2",
};
console.log(objWithPrivate);

for (const key in objWithPrivate) {
  console.log(key, "=", objWithPrivate[key]);
}
