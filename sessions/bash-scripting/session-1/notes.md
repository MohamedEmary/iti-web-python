# `sed`

`sed` stands for stream editor.

## Example commands:

- `sed 's/Pineapple/Feta/' test-file` - Search for `Pineapple` and replace it with `Feta` in `test-file`. The `test-file` is not modified. The output is displayed on the terminal.

---

**_Assignment_**

# Using `sed` utility

1. Display the lines that contain the word `lp` in `/etc/passwd` file.
2. Display `/etc/passwd` file except the third line.
3. Display `/etc/passwd` file except the last line.
4. Display `/etc/passwd` file except the lines that contain the word `lp`.
5. Substitute all the words that contain `lp` with `mylp` in `/etc/passwd` file.

# Using `awk` utility

1. Print full name (comment) of all users in the system.
2. Print login, full name (comment) and home directory of all users. (Print each line preceded by a line number)
3. Print login, uid and full name (comment) of those uid is greater than 500.
4. Print login, uid and full name (comment) of those uid is exactly 500.
5. Print line from 5 to 15 from `/etc/passwd`.
6. Change `lp` to `mylp`.
7. Print all information about greatest uid.
8. Get the sum of all accounts id's.

# Bonus

1. Get the sum of accounts id's that has the same group.
2. Make the following report:

```
User-Group    Report
----------------------
Group1        Name:
User1         User2

Group2        Name:
User3         User4
```
