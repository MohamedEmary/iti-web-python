---
title: Linux Administration Day 5 Lab
date: January 16, 2025
---

# Assignment Questions

## Question 1, 2

Issue the command `sleep 100` then stop the command

![Command Output](images/image.png){width=40%}

## Question 3

Resume `sleep` command in the background

![Command Output](images/image-1.png){width=60%}

## Question 4

Issue the `jobs` command and view its output

![Command Output](images/image-2.png){width=40%}

## Question 5

Send the `sleep` command to:

- Foreground
- Then back to background

![Command Output](images/image-3.png){width=60%}

## Question 6

Kill the `sleep` command

![Command Output](images/image-4.png){width=60%}

## Question 7

Display your processes only (processes started by your username)

![Command Output](images/image-5.png){width=90%}

## Question 8

Display all processes except yours

![Command Output](images/image-6.png){width=90%}

## Question 9

Use the `pgrep` command to list your processes only

![Command Output](images/image-7.png){width=40%}

## Question 10

Start Firefox application

> _PS: I started chromium browser instead of Firefox_

![Command Output](images/image-8.png){width=30%}

## Question 11

Send kill signal to Firefox

![Command Output](images/image-9.png){width=60%}

## Question 12

Change nice value of an already running process

![Command Output](images/image-10.png){width=60%}

## Question 13

Compress a file using: `gzip`, `bzip2` Then decompress it

**_Compression using `gzip`, `bzip2`:_**

Here I have saved the first 1000 lines of `journalctl` logs in a file named `journal.log` and compressed it using `gzip`, `bzip2` the file size before compression is 141kb and after compression the archive file size is 8.7kb with `gzip` and 7.7kb with `bzip2`:

![Command Output](images/image-15.png){width=60%}

**_Compression using `gzip`, `bzip2`:_**

After decompressing each archive file, the file size is back to 141kb:

![Command Output](images/image-16.png){width=60%}

## Question 14

State the differences between `gzip` and `bzip2` commands

- `gzip` is generally faster but has a lower compression ratio.
- `bzip2` has a higher compression ratio but is slower.

## Question 15

Backup/Archive `/etc` directory using `tar` utility

![Command Output](images/image-17.png){width=60%}

## Question 16

Install packages: `ncompress`, `ksh`

command for Debian-based systems: `sudo apt install ncompress ksh`

> _I'm using a non-Debian based system (a distro based on [Arch Linux](https://archlinux.org/)), so I used `pacman` package manager to install the packages._

![Command Output](images/image-11.png){width=80%}

## Question 17

Remove packages: `ncompress`, `ksh`

command for Debian-based systems: `sudo apt remove ncompress ksh`

![Command Output](images/image-12.png){width=80%}

## Question 18

Kill all your processes (Warning: Save work before execution)

![Command Output](images/image-18.png){width=40%}
