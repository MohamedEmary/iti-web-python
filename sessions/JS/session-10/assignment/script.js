// 1-Make a set that holds student names.
// a.Try to add repeated names, will the set accept it?
// b.Print the set values using spread operator and using for...of.
const names = new Set();
names.add("Mohamed");
names.add("Mohamed");
names.add("Ahmed");
names.add("Mahmoud");
names.add("Ahmed");
console.log(names);

const [name1, name2, name3] = [...names];
console.log(names);
console.log(`name1 = ${name1}`);
console.log(`name2 = ${name2}`);
console.log(`name3 = ${name3}`);

for (const Name of names) {
  console.log(Name);
}

// Make a Map that contains the student name as a key, and object that contains an array of his studied courses and his grade in each course.
// (The object structure as following:
// {
// Grades: [
//   {
//     Coursename: "JavaScript",
//     Grade: "Excellent",
//   },
//   {
//     Coursename: "Jquery",
//     Grade: "Good",
//   },
//   {
//     Coursename: "CSS",
//     Grade: "V.Good",
//   },
// ];
// a.Loop in the Map and display each student along with his grades in all courses

const student1 = new Map();
student1.set("name", "Mohamed");
student1.set("grades", [
  {
    courseName: "JavaScript",
    grade: "Excellent",
  },
  {
    courseName: "Jquery",
    grade: "Good",
  },
  {
    courseName: "CSS",
    grade: "V.Good",
  },
]);

const student2 = new Map();
student2.set("name", "Ahmed");
student2.set("grades", [
  {
    courseName: "JavaScript",
    grade: "Good",
  },
  {
    courseName: "Jquery",
    grade: "V.Good",
  },
  {
    courseName: "CSS",
    grade: "Excellent",
  },
]);

const student3 = new Map();
student3.set("name", "Mahmoud");
student3.set("grades", [
  {
    courseName: "JavaScript",
    grade: "V.Good",
  },
  {
    courseName: "Jquery",
    grade: "Splendid",
  },
  {
    courseName: "CSS",
    grade: "Good",
  },
]);

const students = [student1, student2, student3];

for (const student of students) {
  console.log("==========================");
  console.log("Student Name: ", student.get("name"));
  console.log("And his grades:");
  const grades = student.get("grades");
  for (const grade of grades) {
    console.log(grade.courseName.padEnd(10), "=", grade.grade);
  }
}

// Use this array [1,5,3,4,2,4,6,8,5]
// Try arrow function:
//    a.With Array.filter() function, to return the odd numbers from an array.
//    b.With array.forech() to print the even values.
//    c.Print first number  > 5
//    d.Make new array with double array value using array.map

const arr = [1, 5, 3, 4, 2, 4, 6, 8, 5];
console.log(arr.filter((num) => num % 2 !== 0));
arr.forEach((num) => (num % 2 === 0 ? console.log(num) : ""));
console.log(arr.find((num) => num > 5));
console.log(arr.map((num) => num * 2));

// Make a page that displays a tip for user every 3 seconds, as the following:
//    a. Create a generator that has an array of 10 tips,
//       and loops on the array and each time returns the next tip.
//    b. Make a button that loop on the generator and display all tips [Using for...of]
//    c. Make another button that uses setInterval (with arrow function) to display a tip every 3 seconds from the generator.[use next()].

const tips = [
  "tip 1",
  "tip 2",
  "tip 3",
  "tip 4",
  "tip 5",
  "tip 6",
  "tip 7",
  "tip 8",
  "tip 9",
  "tip 10",
];

function* genLoop() {
  for (const tip of tips) {
    document.getElementById("tip").textContent = tip;
    console.log(tip);
    yield;
  }
}

let calledFlag = false;

document.getElementById("display-tips").addEventListener("click", () => {
  if (!calledFlag) {
    let gen = genLoop();
    const handle = setInterval(() => {
      gen.next();
    }, 500);
    setTimeout(() => clearInterval(handle), 5500);
    calledFlag = true;
  }
});

function* genLoopIndex() {
  let i = 0;

  while (true) {
    const paragraph = document.getElementById("tip-index");
    if (i >= tips.length) {
      paragraph.textContent = "No more items";
      break;
    }

    paragraph.textContent = tips[i];
    i += 1;
    yield;
  }
}

let gen2 = genLoopIndex();

document.getElementById("display-tips-index").addEventListener("click", () => {
  gen2.next();
});

// Alert the sum of 2 numbers, and pass the sum as an argument to alert function (slef-invoking function).
alert((() => 3 + 5)());

// Write a function that takes a string and returns it reversed.
function reverseStr(str) {
  console.log(Array.from(str).reverse().join(""));
}

reverseStr("Mohamed");

// Create your own function that accepts multiple parameters to generate course information and display it.
// Assume that the function accepts course information as object that containscourse
// Name, course Duation, courseOwner.if any of required field is not set in function call it should have
// default values as follows:
// courseName=”ES6” ,courseDuration=”3days”, courseOwner=”JavaScript”.
// Bonus: through exception if passed object includes properties other than those described above
// Note: user is allowed not to pass all of these properties, he can pass needed properties only

function genCourse({
  courseName = "ES6",
  courseDuration = "3days",
  courseOwner = "JavaScript",
  ...rest
}) {
  const allowed = ["courseName", "courseDuration", "courseOwner"];
  for (const key in rest) {
    if (!allowed.includes(key)) {
      console.error("Not Allowed");
      return;
    }
  }

  console.log(
    `Your course name is ${courseName}, duration is ${courseDuration}, and the owner is ${courseOwner}`
  );
}

genCourse({
  courseName: "ES6",
  courseDuration: "3days",
  courseOwner: "JavaScript",
  courseOwneer: "JavaScript",
});

// Study new array API methods then create the following methods and apply it on this array
// var fruits = ["apple", "strawberry", "banana", "orange","mango"];
// a.test that every element in the given array is a string
// b.test that some of array elements starts with "a"
// c.generate new array filtered from the given array with only elements that starts with "b" or "s"
// d.use forEach to display all elements of the new array from previous point
const fruits = ["apple", "strawberry", 55, "orange", "mango", "banana"];
fruits.forEach((fruit) =>
  typeof fruit !== "string" ? console.log(fruit, "is not a string") : ""
);

const strFruits = fruits.filter((fruit) => typeof fruit === "string");

strFruits.forEach((fruit) =>
  fruit.startsWith("a") ? console.log(fruit, "starts with a") : ""
);

console.log(
  strFruits.filter((fruit) => fruit.startsWith("b") || fruit.startsWith("s"))
);

strFruits
  .filter((fruit) => fruit.startsWith("b") || fruit.startsWith("s"))
  .forEach((fruit) => console.log(fruit));
