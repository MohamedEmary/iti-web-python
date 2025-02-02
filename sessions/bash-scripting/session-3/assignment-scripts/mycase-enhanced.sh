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
