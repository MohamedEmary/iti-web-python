#!/usr/bin/bash

select n in "select 1 to ls" "select 2 to ls -l" "select 3 to exit"; do
  case $n in
  "select 1 to ls")
    ls
    ;;
  "select 2 to ls -l")
    ls -l
    ;;
  "select 3 to exit")
    exit
    ;;
  *)
    echo "Invalid option"
    ;;
  esac
done
