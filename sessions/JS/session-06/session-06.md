---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 6 JS \par}\vspace{0.1cm}\hrule\end{title}
date: December 10, 2024
---

# Functions

Function is a block of code that can be called by name. The code inside a function is executed when the function is invoked. Functions are used to perform specific tasks.

Functions can take parameters and return values.

Syntax:

```
function function_name(parameters){
  // code to be executed

  // return value
}
```

Example:

```{.js .numberLines}
function calc() {
  console.log(5 + 6);
}

calc() // 11
```

We can even call `calc()` before the function definition (hoisting).

\begin{box4}{Hoisting}{black}
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.
\end{box4}

```{.js .numberLines}
calc() // 11

function calc() {
  console.log(5 + 6);
}
```

We can add our own parameters to the function.

```{.js .numberLines}
function calc(a, b) {
  console.log(a + b);
}

calc(5, 6) // 11
calc(10, 20) // 30
calc(3) // NaN
```

The `calc(3)` will return `NaN` because `b` is `undefined`, so `3 + undefined` is `NaN`. To solve this issue we can use default values.

```{.js .numberLines}
function calc(a, b = 0) {
  console.log(a + b);
}

calc(3) // 3 because b is 0
```

\begin{box4}{Default Function Value}{black}
Always make the parameter with the default value at the end, or give all the parameters a default value.
\end{box4}

## Function Expression

A function expression is a function that is assigned to a variable.

```{.js .numberLines}
var fun = function (a, b) {
  console.log(a + b);
}

fun(5, 6) // 11
```

\begin{box4}{Function Expression Hoisting}{black}
Function expressions are not hoisted. The JS engine doesn't know anything about the function expression until it's called.

\begin{Shaded}
\begin{Highlighting}[numbers=left,,]
\FunctionTok{fun}\NormalTok{(}\DecValTok{5}\OperatorTok{,} \DecValTok{6}\NormalTok{) }\CommentTok{// Error}

\KeywordTok{var}\NormalTok{ fun }\OperatorTok{=} \KeywordTok{function}\NormalTok{ (a}\OperatorTok{,}\NormalTok{ b) \{}
\BuiltInTok{console}\OperatorTok{.}\FunctionTok{log}\NormalTok{(a }\OperatorTok{+}\NormalTok{ b)}\OperatorTok{;}
\NormalTok{\}}
\end{Highlighting}
\end{Shaded}

\end{box4}

## Return

The `return` statement ends the function execution and specifies a value to be returned to the function caller.

`return` can be used in both function declaration and function expression.

Any code after `return` will not be seen or executed by the JS engine.

```{.js .numberLines}
function fun(num1, num2) {
  return num1 * num2;
}

var result = fun(5, 6);
console.log(result); // 30

var fun1 = function (num1, num2) {
  return num1 * num2;
}

var result1 = fun1(5, 6);
console.log(result1); // 30
```

## Number of Parameters

If you try `console.log(1, 2, 3, 4, 5)` you will get `1 2 3 4 5`. This is because our `console.log()` function can take any number of parameters.

To allow a function to take any number of parameters we can use the `...` (rest) operator.

```{.js .numberLines}
function fun(...num) {
  console.log(num);
}

fun(1, 2, 3, 4, 5) // [1, 2, 3, 4, 5]
```

## Function Inside Function

We can also have a function inside a function.

```{.js .numberLines}
function outer() {
  function inner() {
    console.log('Inside fun1');
  }

  inner()
}


outer()
inner() // Error
```

If you try to call `inner()` outside of `outer()` you will get an error because `inner()` is not in the global scope.

If you define another function inside `inner()` then you can't access that function from outside `inner()`.

```{.js .numberLines}
function outer() {
  function inner() {
    function insideInner() {
      console.log('Inside insideInner');
    }

    insideInner() // Works
  }

  insideInner() // Error
  inner()
}
```

<!--
Execution order example
 -->

## IIFE (Immediately Invoked Function Expression)

An IIFE is a function that runs directly after it's created.

```{.js .numberLines}
(function () {
  console.log('Hello');
})()
```

It can also take parameters.

```{.js .numberLines}
(function (name) {
  console.log('Hello ' + name);
})('Mohamed')
```

## Function Constructor (Not Used)

We can also create a function using a function constructor.

Function constructor takes parameters as strings and the last parameter is the function body.

```{.js .numberLines}
var fun = new Function('a', 'b', 'console.log(a + b)');
fun(5, 6) // 11
```

> **_This is just for your information. We don't use this method in real-world applications, as it has a very bad performance._**

## Arrow Functions

Arrow functions allow us to write shorter function syntax.

```{.js .numberLines}
var fun = () => 'Hello';
console.log(fun()); // Hello
```

If your function has multiple lines you need to use `{}`.

```{.js .numberLines}
var fun = (x, y) => {
  var sum = x + y;
  console.log(sum);
}

fun(5, 6); // 11
```

If your function has only one parameter you can skip the `()` and the `return` keyword.

```{.js .numberLines}
var fun = x => x * x;
var result = fun(5);
console.log(result); // 25
```

## Callback Functions

A callback function is a function that takes another function as an argument.

```{.js .numberLines}
function fun(callback) {
  callback();
}
```

Example:

```{.js .numberLines}
function fun(funName, data) {
  funName(data);
}

function print(data) {
  console.log(data);
}

fun(print, 'Hello'); // Hello
```

This code will call the `print` function with the data `Hello`.

\begin{box3}{Why Callback Functions?}{black}

Callback functions are used to make sure that a function is not executed before another function has finished. For example calling an API and waiting for the response.

If JS faces a line of code that takes time to execute, it will not wait for it to finish and will continue executing the next line of code, so we use callback functions to run the code in the correct order.

\tcblower

There is other solutions to this problem like \texttt{Promises} and \texttt{async/await} which we will learn later.

\end{box3}

## `try`, `catch`, `finally`

`try` statement allows us to define a block of code to be tested for errors while it is being executed.

The advantage of `try` is that if an error occurs, the code will not stop, it will continue executing the next line of code.

`catch` statement allows us to define a block of code to be executed if an error occurs in the `try` block.

`finally` is an optional statement lets you execute code, after try and catch, regardless of the result.

Even if there is an error in the `catch` block, the `finally` block will be executed.

```{.js .numberLines}
try {
  console.log(xyz);
} catch (e) {
  // console.error is similar to console.log but it's used for errors
  // to show the error with red highlight in the console
  console.error("Error: " + e);
} finally {
  console.log('Always executed');
}
```

This code will print `ReferenceError: xyz is not defined`, then `Always executed`.

# Object

An object is a collection of key-value pairs. To define an object we use `{}`.

Objects are used to store multiple values of different types in a single variable.

```{.js .numberLines}
var person = {
  name: 'Mohamed',
  age: 25,
  skills: ['HTML', 'CSS', 'JS'],
}

console.log(person); // prints the whole object
console.log(typeof person); // object
```

To access the object properties we can use `.` or `[]`.

```{.js .numberLines}
console.log(person.name); // Mohamed
console.log(person['name']); // Mohamed
```

You can also add new properties to the object after defining it.

```{.js .numberLines}
person.job = 'Developer';
console.log(person); // prints the object with the new property
```

To remove a property from an object we use the `delete` keyword.

```{.js .numberLines}
delete person.job;
console.log(person); // prints the object without the job property
```

You can also define functions inside your object.

```{.js .numberLines}
person.sayHello = function () {
  console.log('Hello, this is ' + person.name);
}

person.sayHello; // returns the function code
person.sayHello(); //Executes the functions: Hello, this is Mohamed
```

We can also define object inside an object, and access the inner object properties using `.`.

```{.js .numberLines}
person = {
  name: 'Mohamed',
  age: 25,
  skills: ['HTML', 'CSS', 'JS'],
  address: {
    city: 'Cairo',
    country: 'Egypt'
  }
}

console.log(person.address.city); // Cairo
```

As you see `address` is an object inside the `person` object.

## Iterating Over Object Properties

To iterate over an object properties we use `for...in` loop.

```{.js .numberLines}
var person = {
  name: 'Mohamed',
  age: 25,
  skills: ['HTML', 'CSS', 'JS'],
  address: {
    city: 'Cairo',
    country: 'Egypt'
  }
}

for (var key in person) {
  // Note: it doesn't print the inner object properties like city, country
  console.log(key); // name, age, skills, address
}

for (var key in person) {
  // name => undefined, age => undefined, ...
  console.log(key, " => ", person.key);

  // name => Mohamed, age => 25, ...
  console.log(key, " => ", person[key]);
}
```

The difference between using `person.key` and `person[key]` is that `person.key` will return `undefined` because there is no property called `key` in the object, while `person[key]` will return the value of the property that is stored in the `key` variable.

## Assigning Object to Another Object

When you assign an object to another object, you are not copying the object, you are copying the memory reference to that object.

```{.js .numberLines}
var person = {
  name: 'Mohamed',
  age: 25,
  skills: ['HTML', 'CSS', 'JS'],
}

var person2 = person;
person2.name = 'Ali';

console.log(person.name); // Ali
console.log(person2.name); // Ali
console.log(person1 == person2); // true
```

As you see, when we change the `name` property in `person2`, it also changes in `person`. This is because they are pointing to the same object in memory.

To solve this issue we can use the `Object.assign()` method.

```{.js .numberLines}
var person = {
  name: 'Mohamed',
  age: 25,
  skills: ['HTML', 'CSS', 'JS'],
}

var person2 = Object.assign({}, person);
console.log(person == person2); // false

person2.name = 'Ali';

console.log(person.name); // Mohamed
console.log(person2.name); // Ali
```

The `console.log(person == person2)` statement returned `false` because although the properties are the same, they are stored in different memory locations.

Modifying object inside a function:

```{.js .numberLines}
function changeName(obj) {
  obj.name = 'Ahmed';
}

changeName(person);
console.log(person.name); // Ahmed
```

# Array

Arrays are used to store multiple values in a single variable. By logic these values are of the same type, but in JS you can store different types in the same array.

To define an array we use `[]`, and to get the length of the array we use `length` property.

```{.js .numberLines}
var names = ['Mohamed', 'Ali', 'Ahmed'];
console.log(names); // ['Mohamed', 'Ali', 'Ahmed']
console.log(names.length); // 3
```

---

To add an element to the end of the array we use `push()` method, and to add an element to the beginning of the array we use `unshift()` method.

Both `push()`, `unshift()` can accept multiple parameters, for example `names.push('Omar', 'Khaled')`, or `names.unshift('Omar', 'Khaled')`.

To remove the last element from the array we use `pop()` method, and to remove the first element from the array we use `shift()` method.

```{.js .numberLines}
names.push('Omar', 'Khaled');
console.log(names); // ['Mohamed', 'Ali', 'Ahmed', 'Omar', 'Khaled']

names.unshift('Tarek');
console.log(names); // ['Tarek', 'Mohamed', 'Ali', 'Ahmed', 'Omar', 'Khaled']
```

---

To remove an element from the array we use `splice()` method.

`splice(start, deleteCount, item1, item2, ...)` will remove `deleteCount` elements starting from the `start` index, and will add `item1`, `item2`, ... at the `start` index.

```{.js .numberLines}
names.splice(1, 2);
console.log(names); // ['Tarek', 'Ahmed', 'Omar', 'Khaled']

names.splice(1, 0, 'Ali', 'Mohamed'); // Add Ali, Mohamed at index 1
console.log(names); // ['Tarek', 'Ali', 'Mohamed', 'Ahmed', 'Omar', 'Khaled']
```

---

To reverse the array we use `reverse()` method.

```{.js .numberLines}
names.reverse();
console.log(names); // ['Khaled', 'Omar', 'Ahmed', 'Mohamed', 'Ali', 'Tarek']
```

---

To sort the array we use `sort()` method.

```{.js .numberLines}
var nums = [1, 50, 200, 5, 100, 10];
nums.sort();
console.log(nums); // [1, 10, 100, 200, 5, 50]
```

As you can see the array is sorted as strings, to sort it as numbers we can use a compare function.

```{.js .numberLines}
nums.sort(function (a, b) {
  return a - b;
})

console.log(nums); // [1, 5, 10, 50, 100, 200]
```

What is happening here is that the `sort()` function inside the sort method subtracts `a` from `b`, if the result is negative it means that `a` is smaller than `b`, if the result is positive it means that `a` is greater than `b`, and if the result is zero it means that `a` is equal to `b`.

You can also reverse the sorting by subtracting `b` from `a`, so instead of `return a - b` you can use `return b - a`.

---

To loop over array elements use `.forEach()` method.

```{.js .numberLines}
// Print all the elements in the array
nums.forEach(function (num) {
  console.log(num);
})
```

To filter the array elements use `.filter()` method.

```{.js .numberLines}
// Filter numbers greater than 50
var filtered = nums.filter(function (num) {
  return num > 50;
})

console.log(filtered); // [200, 100]
```

---

`indexOf()` method returns the index of the first occurrence of the element in the array, if the element is not found it will return `-1`.

```{.js .numberLines}
console.log(nums.indexOf(100)); // 4
console.log(nums.indexOf(500)); // -1
```

---

`lastIndexOf()` method returns the index of the last occurrence of the element in the array, if the element is not found it will return `-1`.

```{.js .numberLines}
var nums = [1, 50, 200, 100, 5, 100, 10];
nums.push(100);
console.log(nums.lastIndexOf(100)); // 6
```
