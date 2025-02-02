#!/usr/bin/bash

num=0

while [ $num -lt 10 ]; do
  echo "Number: $num"
  let num=$num+1
done
