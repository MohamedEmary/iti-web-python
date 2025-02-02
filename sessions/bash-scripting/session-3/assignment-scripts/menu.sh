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
