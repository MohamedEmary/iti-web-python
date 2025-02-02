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
