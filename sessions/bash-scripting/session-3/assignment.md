---
title: Bash Scripting Day 3 Assignment
date: January 29, 2025
---

# Assignment Questions

## Question 1

> Write a script called `mycase`, using the case utility to checks the type of character entered by a user:
>
> a. Upper Case
> b. Lower Case
> c. Number
> d. Nothing

```{.bash .numberLines}
#!/usr/bin/bash

shopt -s extglob

echo "enter a char"
read ch

case $ch in
[a-z])
  echo "lowercase"
  ;;
[A-Z])
  echo "uppercase"
  ;;
[0-9])
  echo "number"
  ;;
*)
  echo "Nothing"
  ;;
esac
```

## Question 2

> Enhanced the previous script, by checking the type of string entered by a user:
>
> a. Upper Cases
> b. Lower Cases
> c. Numbers
> d. Mix
> e. Nothing

```{.bash .numberLines}
#!/bin/bash

shopt -s extglob

echo Please type your string:
read input

case $input in
+([a-z]))
  echo Lower Case
  ;;
+([A-Z]))
  echo Upper Case
  ;;
+([0-9]))
  echo Number
  ;;
+([0-9]|[a-z]|[A-Z]))
  echo Mix
  ;;
*)
  echo Nothing
  ;;
esac
```

## Question 3

> Write a script called `mychmod` using `for` utility to give execute permission to all files and directories in your home directory.

```{.bash .numberLines}
#!/bin/bash

echo "Press Enter to give execute permission to all files and directories in your home directory"
echo "Or press Ctrl+C to cancel"
read -r

for item in ~/*; do
  echo "$item"
  chmod +x "$item"
done
echo "Finished"
```

## Question 4

> Write a script called `mybackup` using `for` utility to create a backup of only files in your home directory.

```{.bash .numberLines}
#!/bin/bash

echo "Press enter to start backup, or Ctrl+C to cancel"
read input
echo Backup started...

backup_folder="$HOME/home_backup"

mkdir "$backup_folder"

for item in "$HOME"/*; do
  if [ -f "$item" ]; then
    cp "$item" "$backup_folder"
  fi
done

tar -cvf "$HOME/$backup_folder.tar" "$HOME/home_backup"
rm -r "$backup_folder"
echo "Backup completed: $backup_folder.tar"
```

## Question 5

> Write a script called `mymail` using for utility to send a mail to all users in the system.
>
> Note: write the mail body in a file called `mtemplate`.

```{.bash .numberLines}
#!/usr/bin/bash

users=$(awk -F: '{print $1}' /etc/passwd)
for user in $users; do
  echo "Sending mail to $user"
  cat "mtemplate" | mail -s "Test Mail" "$user"
done

echo "Finished"
```

## Question 6

> Write a script called `chkmail` to check for new mails every 10 seconds.
>
> Note: mails are saved in `/var/mail/username`.

\begin{center}
\textit{Since all emails of a user are stored in a single file this script stores the current checksum of the mail file and compares it with the previous checksum. If the checksums are different, it means that the mail file has been updated (the user has new mail).}
\end{center}

```{.bash .numberLines}
#!/bin/bash

mail_file="/var/mail/$USER"
old_hash=""

while true; do
  if [ -f "$mail_file" ]; then
    current_hash=$(md5sum "$mail_file" | cut -d' ' -f1)

    if [ -n "$old_hash" ] && [ "$current_hash" != "$old_hash" ]; then
      echo "You have new mail!"
    fi

    old_hash=$current_hash
  else
    echo "Mail file does not exist"
  fi
  sleep 10
done
```

## Question 7

> What is the output of the following script
>
> ```{.numberLines}
> #!/bin/ksh
>
> typeset —i n1
> typeset —i n2
>
> n1=1
> n2=1
>
> while test $n1 -eg $n2; do
>   n2=$n2+1
>   print $n1
>   if [ $n1 -gt $n2]; then
>     break
>   else
>     continue
>   fi
>   n1=$n1+1
>   print $n2
> done
> ```

The script above will print `1` once then the loop condition will be false and the loop will exit.

## Question 8

> Create the following menu:
>
> a. Press `1` to `ls`
> b. Press `2` to `ls -a`
> c. Press `3` to `exit`
>
> Using `select` utility then `while` utility.

```{.bash .numberLines}
#!/bin/bash

select option in "ls" "ls -a" "exit"; do
  case $option in
  "ls")
    ls
    ;;
  "ls -a")
    ls -a
    ;;
  "exit")
    break
    ;;
  *)
    echo Wrong option
    ;;
  esac
done
```

## Question 9

> Write a script called `myarr` that ask a user how many elements he wants to enter in an array, fill the array and then print it.

```{.bash .numberLines}
#! /bin/bash

echo "How many elements do you want to enter?"
read num

declare -a myarr
for ((i = 0; i < $num; i++)); do
  echo "Array element:"
  read user_input
  $myarr[$i] = $user_input
done
```

## Question 10

> Write a script called `myavg` that calculate average of all numbers entered by a user.
>
> Note: use arrays

```{.bash .numberLines}
#!/bin/bash

echo "Enter the number of numbers:"
read num

declare -a myarr
sum=0

for ((i = 0; i < $num; i++)); do
  echo "enter the array element"
  read user_input

  myarr[$i]=$user_input
  sum=$((sum + user_input))
done

avg=$(echo "scale=2; $sum / $num" | bc)
echo "average is $avg"
```

## Question 11

> Write a function called `mysq` that calculate square if its argument.

```{.bash .numberLines}
#!/bin/bash

function square {
  typeset -i sq
  ((sq = $1 * $1))
  echo $sq
}
echo "The square is: $(square $1)"
```
