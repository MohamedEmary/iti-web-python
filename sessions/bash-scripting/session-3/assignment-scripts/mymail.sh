#!/usr/bin/bash

users=$(awk -F: '{print $1}' /etc/passwd)
for user in $users; do
  echo "Sending mail to $user"
  cat "mtemplate" | mail -s "Test Mail" "$user"
done

echo "Finished"
