// fun(5, 6); // Error

// var fun = function (a, b) {
//   console.log(a + b);
// };

// var fun = () => "Hello";

var obj = {
  name: "Mohamed",
  age: 20,
  skills: ["HTML", "CSS", "JS"],
};
console.log(obj);
console.log(obj.age);
console.log(obj["age"]);

obj.new = "new";
console.log(obj);

delete obj.new;
console.log(obj);

obj.sayHello = function () {
  console.log("Hello, this is " + obj.name);
};

obj.sayHello(); // Hello, this is Mohamed

var person = {
  name: "Mohamed",
  age: 25,
  skills: ["HTML", "CSS", "JS"],
};

for (var key in person) {
  console.log(key + ": " + person.key);
}

var person1 = {
  name: "Mohamed",
  age: 25,
  skills: ["HTML", "CSS", "JS"],
};

var person2 = person1;

person2.age = 60;
console.log(person1.age);
console.log(person2.age);
console.log(person1 == person2);

var person3 = Object.assign({}, person1);
person3.age = 100;
console.log(person1.age);
console.log(person3.age);

var person = {
  name: "Mohamed",
  age: 25,
  skills: ["HTML", "CSS", "JS"],
};

var person2 = Object.assign({}, person);
person2.name = "Ali";

console.log(person.name); // Mohamed
console.log(person2.name); // Ali


function changeName(obj) {
  obj.name = 'Aliii';
}

changeName(person);
console.log(person.name); // Ali



var names = ['Mohamed', 'Ali', 'Ahmed'];
console.log(names); // ['Mohamed', 'Ali', 'Ahmed']
console.log(names.length); // 3
names.push('Omar', 'Khaled');
console.log(names); // ['Mohamed', 'Ali', 'Ahmed', 'Omar', 'Khaled']

names.unshift('Tarek');
console.log(names); // ['Tarek', 'Mohamed', 'Ali', 'Ahmed', 'Omar', 'Khaled']
names.splice(1, 2);
console.log(names); // ['Tarek', 'Ahmed', 'Omar', 'Khaled']

names.splice(1, 0, 'Ali', 'Mohamed'); // Add Ali, Mohamed at index 1
console.log(names); // ['Tarek', 'Ali', 'Mohamed', 'Ahmed', 'Omar', 'Khaled']


var nums = [1, 50, 200, 5, 100, 10];
nums.sort();
console.log(nums); // [1, 10, 100, 200, 5, 50]


var nums = [1, 50, 200, 5, 100, 10];
nums.forEach(function (num) {
  console.log(num);
})

console.log(Boolean(-4));
console.log(Boolean(4));

var names = ['Mohamed', 'Ali', 'Ahmed'];
console.log(names.sort());