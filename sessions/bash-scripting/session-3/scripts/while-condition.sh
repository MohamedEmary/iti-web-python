#!/usr/bin/bash

echo "What is my name?"
read name

while [ $name != "mohamed" ]; do
  echo "Wrong answer, please try again"
  echo "What is my name?"
  read name
done

echo "Correct answer!"