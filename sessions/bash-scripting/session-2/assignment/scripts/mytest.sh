#!/usr/bin/bash

echo Please select what you want to use this script for:
echo '1. Check the type of the given argument (file/directory).'
echo '2. Check the permissions of the given argument (read/write/execute).'
read opt

if [ $opt -eq 1 ] || [ $opt -eq 2 ]; then
  echo enter your file/dir
  read filedir

  if [ $opt -eq 1 ]; then
    if [ -f $filedir ]; then
      echo $filedir is a file
    elif [ -d $filedir ]; then
      echo $filedir is a directory
    else
      echo $filedir is not a file or directory
    fi
  elif [ $opt -eq 2 ]; then
    if [ -r $filedir ]; then
      echo $filedir has read permission
    fi
    if [ -x $filedir ]; then
      echo $filedir has execute permission
    fi
    if [ -w $filedir ]; then
      echo $filedir has write permission
    fi
  fi
else
  echo Invalid option
fi