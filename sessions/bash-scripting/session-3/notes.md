---
title: Scripts in Day 3 Bash Scripting
date: January 31, 2025
---

## `case`

Example 1:

```bash
#!/usr/bin/bash

echo Enter your name
read name

case "$name" in
"Mohamed")
  echo "Welcome Mohamed"
  ;;
"Ahmed")
  echo "Welcome Ahmed"
  ;;
"Ali")
  echo "Welcome Ali"
  ;;
*)
  echo "You are not allowed to enter"
  ;;
esac
```

Example 2:

```bash
#!/usr/bin/bash

# We must add this line so the script can recognize patterns
shopt -s extglob

echo "enter your ch"
read ch

case "$ch" in
+([a-z]))
  echo "lowercase"
  ;;
+([A-Z]))
  echo "uppercase"
  ;;
+([0-9]))
  echo "number"
  ;;
+([a-z]|[A-Z]))
  echo "Alphabetic"
  ;;
+([a-z]|[A-Z]|[0-9]))
  echo "Alphanumeric"
  ;;
*)
  echo "Special character"
  ;;
esac
```

## `select`

```bash
#!/usr/bin/bash

select n in "select 1 to ls" "select 2 to ls -l" "select 3 to exit"; do
  case $n in
  "select 1 to ls")
    ls
    ;;
  "select 2 to ls -l")
    ls -l
    ;;
  "select 3 to exit")
    exit
    ;;
  *)
    echo "Invalid option"
    ;;
  esac
done
```

## `break` & `continue`

```bash
#!/usr/bin/bash

# Break
# Continue
for name in $(cat names); do
  if [ $name = alber ]; then
    continue
  else
    echo $name
  fi
done
```

## `while`

```bash
#!/usr/bin/bash

num=0

while [ $num -lt 10 ]; do
  echo "Number: $num"
  let num=$num+1
done
```

## `while` with condition

```bash
#!/usr/bin/bash

echo "What is my name?"
read name

while [ $name != "mohamed" ]; do
  echo "Wrong answer, please try again"
  echo "What is my name?"
  read name
done

echo "Correct answer!"
```

## `for`

```bash
#!/usr/bin/bash

for user in mohamed alber fathy; do
  echo "Hello $user"
done
```

## `shift`

```bash
#!/usr/bin/bash

while (($# > 0)); do
  echo $*
  shift
done
```

## `until`

```bash
#!/bin/bash

hour=1

until [ $hour -gt 24 ]; do
  case $hour in
  [0-9] | 1[0-1])
    echo "good morning"
    ;;
  12)
    echo "lunch time"
    ;;
  1[3-7])
    echo "work time"
    ;;
  *)
    echo "good night"
    ;;
  esac
  echo "hour is: $hour"
  let hour=$hour+1
done
```
