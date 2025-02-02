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
