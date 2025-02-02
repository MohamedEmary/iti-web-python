#!/bin/bash

mail_file="/var/mail/$USER"
old_hash=""

while true; do
  if [ -f "$mail_file" ]; then
    current_hash=$(md5sum "$mail_file" | cut -d' ' -f1)

    if [ -n "$old_hash" ] && [ "$current_hash" != "$old_hash" ]; then
      echo "You have new mail!"
    fi

    old_hash=$current_hash
  else
    echo "Mail file does not exist"
  fi
  sleep 10
done
