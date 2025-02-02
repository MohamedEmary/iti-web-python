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
