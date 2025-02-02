---
title: Python Day 1 Assignment
date: January 31, 2025
---

# Assignment Questions

## Question 1

> Write a program that counts up the number of vowels `[a, e, i, o, u]` contained in the string.

```{.python .numberLines #exec}
def getNVowels(string: str):
    n = 0
    for char in string:
        if (char in ['a', 'e', 'i', 'o', 'u']):
            n += 1
    return n


print(getNVowels("hello"))
print(getNVowels("hello world"))
```

## Question 2

> Write a function that accepts two arguments (`length`, `start`) to generate an array of a specific length filled with integer numbers increased by one from start.

## Question 3

> Fill an array of 5 elements from the user, sort it in descending and ascending orders then display the output.

## Question 4

> Write a function that takes a number as an argument and if the number is divisible by 3 return `Fizz`, if it is divisible by 5 return `Buzz`, and if it is divisible by both return `FizzBuzz`.

## Question 5

> Write a Python function that checks whether a passed string is palindrome or not.
>
> Note: A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., `madam` or `nurses run` (ignoring the spaces).

## Question 6

> Write a function that takes a string and prints the longest alphabetical ordered substring occurred.
>
> For example, if the string is `abdulrahman` then the output is: Longest substring in alphabetical order is: `abdu`.
