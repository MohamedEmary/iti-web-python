---
title: Bash Scripting Day 1 Assignment
date: January 27, 2025
---

# Using `sed` utility

## Question 1

> Display the lines that contain the word `lp` in `passwd` file.

```bash
sed -n '/lp/p' /etc/passwd
```

![Command Output](images/image.png)

## Question 2

> Display `passwd` file except the third line.

```bash
sed '3d' /etc/passwd
```

![Command Output](images/image-1.png)

## Question 3

> Display `passwd` file except the last line.

```bash
sed '$d' /etc/passwd
```

![Command Output](images/image-2.png)

## Question 4

> Display `passwd` file except the lines that contain the word `lp`.

```bash
sed '/lp/d' /etc/passwd
```

![Command Output](images/image-3.png)

## Question 5

> Substitute all the words that contain `lp` with `mylp` in `passwd` file.

```bash
sed 's/lp/mylp/g' /etc/passwd
```

![Command Output](images/image-4.png)

# Using `awk` utility

## Question 1

> Print full name (comment) of all users in the system.

```bash
awk -F: '{print $5}' /etc/passwd
```

**_The empty lines are the users that do not have a comment field._**

![Command Output](images/image-5.png)

## Question 2

> Print login, full name (comment) and home directory of all users. (Print each line preceded by a line number)

```bash
awk -F: '{print NR ") " $1 " " $5 " " $6}' /etc/passwd
```

![Command Output](images/image-6.png)

## Question 3

> Print login, UID and full name (comment) of those UID is greater than 500.

```bash
awk -F: '$3 > 500 {print $1, $3, $5}' /etc/passwd
```

![Command Output](images/image-7.png)

## Question 4

> Print login, UID and full name (comment) of those UID is exactly 500.

```bash
awk -F: '$3 == 500 {print $1, $3, $5}' /etc/passwd
```

![Command Output](images/image-8.png)

## Question 5

> Print line from 5 to 15 from `passwd`.

```bash
awk 'NR>=5 && NR<=15' /etc/passwd
```

![Command Output](images/image-9.png)

## Question 6

> Change `lp` to `mylp`.

```bash
awk '{gsub(/lp/, "mylp"); print}' /etc/passwd
```

![Command Output](images/image-10.png)

## Question 7

> Print all information about greatest UID.

```bash
awk -F: 'BEGIN{max=0} {if($3>max){max=$3; line=$0}} END{print line}' /etc/passwd
```

![Command Output](images/image-11.png)

## Question 8

> Get the sum of all accounts id's.

```bash
awk -F: '{sum+=$3} END{print "Total UID sum:", sum}' /etc/passwd
```

![Command Output](images/image-12.png)

# Bonus Questions

## Question 1

> Get the sum of accounts id's that has the same group.

```bash
awk -F: '{sum[$4]+=$3} END{for(i in sum) print "Group ID:",i,"Sum:",sum[i]}' /etc/passwd
```

![Command Output](images/image-13.png)

<!-- ## Question 2

> Make the User-Group Report.

```bash
awk -F: 'BEGIN {
    print "User-Group    Report"
    print "----------------------"
}
{
    users[$4] = users[$4] ? users[$4] " " $1 : $1
}
END {
    for (group in users) {
        printf "Group%s        Name:\n", group
        split(users[group], userarray, " ")
        for (i in userarray)
            printf "%-12s\n", userarray[i]
        print ""
    }
}' /etc/passwd
``` -->
