#! /bin/bash

echo "How many elements do you want to enter?"
read num

declare -a myarr
for ((i = 0; i < $num; i++)); do
  echo "Array element:"
  read user_input
  $myarr[$i] = $user_input
done
