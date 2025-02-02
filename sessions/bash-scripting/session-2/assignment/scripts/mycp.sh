#!/usr/bin/bash

echo Please select what you want to use this script for:
echo 1. Copying file into another file
echo 2. Copying files into a directory
read opt

if [ $opt -eq 1 ]; then
  echo Enter the name of source file
  read src
  if [ -f $src ]; then
    echo Enter the name of destination file
    read dest
    cp $src $dest
    echo File copied successfully
  else
    echo Source file does not exist
  fi
elif [ $opt -eq 2 ]; then
  echo "Enter your files and the directory you want to copy them to"
  # here we accept multiple arguments in an array
  # then we check if the last argument is a directory
  #
  # there should be more validation on files using loops but i didn't
  # add it because it haven't been covered yet in course content
  read -a args         # -a for array
  dest_dir=${args[-1]} # last argument
  if [ -d "$dest_dir" ]; then
    # "${args[@]::${#args[@]}-1}" is used for array slicing
    # ref https://unix.stackexchange.com/a/82061
    cp "${args[@]::${#args[@]}-1}" "$dest_dir"
    echo Files copied successfully
  else
    echo "The last argument is not a directory"
  fi
else
  echo Invalid option
fi
