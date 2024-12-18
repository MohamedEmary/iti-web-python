---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 9 (JS) \par}\vspace{0.1cm}\hrule\end{title}
date: December 17, 2024
---

# ECMA Script 6

ECMA is a standard for JavaScript. The latest version is ES6. It was released in 2015.

<!--
## What is new in ES6?

keywords and points slide
-->

## `let`

`let` was introduced in ES6. It is used to declare variables. It is block scoped.

This helps saving memory as the variable is only available in the block it is declared, and removed from memory when the block ends.

Example 1:

```{.js .numberLines}
let x = 10;
console.log(x); // 10

{
    let x = 20; // block scoped
    console.log(x); // 20
}

console.log(x); // still 10
```

Example 2:

```{.js .numberLines}
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // ReferenceError: i is not defined


for (var j = 0; j < 5; j++) {
  console.log(j);
}
console.log(j); // 5
```

Example 3:

```{.js .numberLines}
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
```

The first loop with `let` will print 0, 1, 2, 3, 4. The second loop with `var` will print 5, 5, 5, 5, 5.

---

`let` doesn't have hoisting, so you can't use the variable before it is declared.

```{.js .numberLines}
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

<!--
for loop with settimeout example
-->

## `const`

`const` is similar to `let`, except that its read-only. You can't reassign a `const` variable.

It's recommended to use `const` with arrays and objects. You can still change the elements of an array or object, as the reference doesn't change (only values inside the array).

<!--
Symbol in JS
 -->
