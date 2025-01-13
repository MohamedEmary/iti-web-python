---
title: Linux Administration Assignment 1
date: January 12, 2025
---

# Assignment Answers

## Install Ubuntu(22/24) or RHEL

```{.bash .numberLines}
# 1 & 2. What is the command that will show all system info?
~ > uname -a
Linux EndeavourOS 6.12.8-arch1-1 #1 SMP PREEMPT_DYNAMIC Thu, 02 Jan 2025 22:52:26 +0000 x86_64 GNU/Linux


# 3. What is the command that will print current timestamp?
~ > date
Sun Jan 12 01:02:41 PM EET 2025


# 4. What is the command that will print calendar of December 2001?
~ > cal 12 2001
    December 2001
Su Mo Tu We Th Fr Sa
                   1
 2  3  4  5  6  7  8
 9 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28 29
30 31


# 5. What is the command that will print current date in format "m/d/y"
~ > date +'%m/%d/%Y'
01/12/2025


# 6. What the command to get the full month name?
~ > date +%B
January


# 7. What is the command that will create file with your name at current directory?
~ > touch Mohamed


# 8. What is the command that will print “hello world” at screen?
~ > echo "hello world"
hello world


# 10. List all visible and non-visible files and directories in your home
~ > ls -a


# 11.View the first 5 lines in /etc/passwd file
~ > head -n 5 /etc/passwd


# 12.List the last 4 lines in /etc/passwd file
~ > tail -n 5 /etc/passwd


# 13.List all files and directories starts with d in your home directory
~ > ls | grep ^d
data


# 14.List file and directories in long details
~ > ls -al
```

What is the difference between cat and more command?

`cat` Command displays the whole file at once, while `more` command displays the file page by page.
