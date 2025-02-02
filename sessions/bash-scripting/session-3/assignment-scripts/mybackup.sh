#!/bin/bash

echo "Press enter to start backup, or Ctrl+C to cancel"
read input
echo Backup started...

backup_folder="$HOME/home_backup"

mkdir "$backup_folder"

for item in "$HOME"/*; do
  if [ -f "$item" ]; then
    cp "$item" "$backup_folder"
  fi
done

tar -cvf "$HOME/$backup_folder.tar" "$HOME/home_backup"
rm -r "$backup_folder"
echo "Backup completed: $backup_folder.tar"
