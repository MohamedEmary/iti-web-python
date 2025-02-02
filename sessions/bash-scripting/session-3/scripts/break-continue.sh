#!/usr/bin/bash

# Break
# Continue
for name in $(cat names); do
  if [ $name = alber ]; then
    continue
  else
    echo $name
  fi
done
