#!/usr/bin/bash

echo "Enter your login name: "
read login_name

echo "This is your home directory content: "
ls -alh "/home/$login_name" | less

echo -e "\nPress enter to copy a file from your home directory to /tmp"
read
cp "/home/$login_name/.bashrc" /tmp
echo ".bashrc has been copied to /tmp"

echo -e "\nPress enter to show your processes"
read
ps -u $login_name
