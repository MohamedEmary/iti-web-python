#!/usr/bin/bash

# if [ $# -eq 0 ]; then
#   ls
# else
#   ls $1
# fi

# # Enhanced version
# if [ $# -eq 0 ]; then
#   ls
# elif [ $# -eq 1 ]; then
#   ls $1
# elif [ $# -eq 2 ]; then
#   if [ $2 = "-l" -o $2 = "-a" -o $2 = "-d" -o $2 = "-i" -o $2 = "-R" ]; then
#     ls $2 $1
#   else
#     echo "Invalid option"
#   fi
# fi

if [ $# -eq 0 ]; then
  ls
elif [ $# -eq 1 -a -d $1 ]; then
  ls $1
elif [ $1 = "-l" ]; then
  echo "Listing in long format"
elif [ $1 = "-a" ]; then
  echo "Listing all entries including the hidden files"
elif [ $1 = "-d" ]; then
  echo "Listing only the directory name"
elif [ $1 = "-i" ]; then
  echo "Printing inode number"
elif [ $1 = "-R" ]; then
  echo "Recursively listing subdirectories"
else
  echo "Invalid Input"
fi

# -l: list in long format.
# -a: list all entries including the hidden files.
# -d: if an argument is a directory, list only its name.
# -i: print inode number.
# -R: recursively list subdirectories.
