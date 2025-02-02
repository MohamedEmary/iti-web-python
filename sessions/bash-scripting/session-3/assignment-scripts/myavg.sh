#!/bin/bash

echo "Enter the number of numbers:"
read num

declare -a myarr
sum=0

for ((i = 0; i < $num; i++)); do
  echo "enter the array element"
  read user_input

  myarr[$i]=$user_input
  sum=$((sum + user_input))
done

avg=$(echo "scale=2; $sum / $num" | bc)
echo "average is $avg"
