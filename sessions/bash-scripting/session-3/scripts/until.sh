#!/bin/bash

hour=1

until [ $hour -gt 24 ]; do
  case $hour in
  [0-9] | 1[0-1])
    echo "good morning"
    ;;
  12)
    echo "lunch time"
    ;;
  1[3-7])
    echo "work time"
    ;;
  *)
    echo "good night"
    ;;
  esac
  echo "hour is: $hour"
  let hour=$hour+1
done
