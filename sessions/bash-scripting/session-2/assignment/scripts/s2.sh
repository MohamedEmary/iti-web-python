#!/usr/bin/bash

# # First way is to run both in the same shell
# source ./s1.sh
# echo $x

if [ $# -ne 0 ]; then
  echo $1
fi
