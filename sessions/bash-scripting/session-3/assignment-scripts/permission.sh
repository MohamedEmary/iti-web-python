#!/bin/bash

echo "Press Enter to give execute permission to all files and directories in your home directory"
echo "Or press Ctrl+C to cancel"
read -r

for item in ~/*; do
  echo "$item"
  chmod +x "$item"
done
echo "Finished"
