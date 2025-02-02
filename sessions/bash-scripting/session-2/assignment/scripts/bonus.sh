#!/bin/bash

# No arguments case
if [ $# -eq 0 ]; then
  ls
  exit 0
fi

# Check if first argument is an option
if [ $1 == -* ]; then
  # Get letters after dash
  options=${1:1}
  cmd="ls"

  # Check each letter is valid
  if [ $options =~ [^ladiR] ]; then
    echo "Invalid option"
    exit 1
  fi

  # Add valid options to command
  [ $options == *l* ] && cmd="$cmd -l"
  [ $options == *a* ] && cmd="$cmd -a"
  [ $options == *d* ] && cmd="$cmd -d"
  [ $options == *i* ] && cmd="$cmd -i"
  [ $options == *R* ] && cmd="$cmd -R"

  # Execute with directory if provided
  if [ -n "$2" ]; then
    $cmd "$2"
  else
    $cmd
  fi
else
  # Just directory argument
  ls "$1"
fi
