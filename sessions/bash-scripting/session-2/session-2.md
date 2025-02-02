---
title: Bash Scripting Day 2
date: January 28, 2025
---

<!--
TODO:
History Part in the first 10 min of the session
 -->

# Shell Scripting Basics

## Checking Installed Shells

To know all the shells installed in your system, you can use the following command:

```bash
cat /etc/shells
```

## Checking Current Shell

To know the shell you are currently using:

```bash
echo $SHELL
```

## Command Location

Commands are stored in `/usr/bin` directory. To know the location of a command e.g. `chmod`:

```bash
type chmod
```

## Environment Variables

`set` command displays all the environment variables. `$SHELL` is an environment variable.

## Script Permissions

After creating any bash script add `r` and `x` permissions to it, so that it can be executed:

```bash
chmod +rx script.sh
```

Bash scripts should have `.sh` extension. Although it is not necessary, it is a good practice because it makes it easier to identify bash scripts if you have a lot of files in a directory or you are working with a team.

## Shebang

The first line of any bash script should be:

```bash
#!/usr/bin/bash
```

This line is called `shebang`.

## `PATH` Variable

`PATH` is all the directories where the system looks for commands. To know the `PATH`:

```bash
echo $PATH
```

## Adding Directories to `PATH`

To add a directory to the `PATH`:

```bash
PATH=$PATH:/path/to/directory
```

This is a temporary change. To make it permanent, add the above line to `.bashrc` file.

# Script Execution

## Process Creation

Each script when executed, creates a new process. We can see running processes using `ps` command.

If you add `ps` command to a script, it will show the process of the script itself next to other processes.

## Source Command

If you don't want the script to create a new process, you can use `source` command to run the script.

```bash
source script.sh
# or
. script.sh
```

# Shell Compatibility

Some commands work on shells and don't work on others:

| Bash   | Ksh (Korn shell) |
| ------ | ---------------- |
| `echo` | `print`          |
| `type` | `whence`         |

<!-- TODO: the other difference between ksh and bash -->

# Variables

<!-- There are many types of variables:

- Local variables
- Environment variables
- Positional parameters
- Special variables
 -->

## Variable Assignment

To create a variable:

```bash
variable=value
```

This will output `california`:

```bash
state=cal
echo ${state}ifornia # california
```

If you want to assign a value that contains spaces, you should use quotes:

```bash
variable="value with spaces"
```

Example:

```bash
name='Mohamed Emary'
echo $name # Mohamed Emary
```

## Empty Variables

If we define an empty variable `x=`, and try to `echo` it, it will output nothing.

## Integer Variables

If we define an empty variable that contains a calculated value, we should use `typeset -i num`:

```bash
typeset -i result
result=5+5
echo $result # 10
```

And if you want to have spaces in your calculation, you should use quotes:

```bash
typeset -i result
result="5 * 5"
echo $result # 25
```

If we put a string value inside that calculation, it will output `0`:

```bash
typeset -i result
result=myString
echo $result # 0
```

## `let` and Calculation

To make bash understand that this is a number without using `typeset -i`, you can `let`:

```bash
i=1
let i=i+1
echo $i # 2
```

We can also use `((The calculation))`:

```bash
((i=i+1))
echo $i # 3
```

## Common Environment Variables

Other example Environment variables include

- `PATH` - The directories where the system looks for commands.
- `HOME` - The home directory of the user.
- `PS1` - The prompt.
- `LOGNAME` - The login name of the user.
- `PS2` - The secondary prompt which is used when a command is continued on the next line.

## Quotes

Difference between single quotes and double quotes:

- Single quotes: All characters inside it are treated as string.
- Double quotes: It treats everything inside it as string except `$`, `` ` ``, and `\`.
  - `$` is used to reference a variable.
  - `` ` `` is used to execute a command.
  - `\` is used to escape a character, for example if the character after it is `$`, it will be treated as a string not a variable.

## Backticks

Anything inside backticks is executed as a command:

```bash
# Ex 1
echo "Date today is `date`"
# date today is Tue Jan 28 05:25:05 PM EET 2025
echo 'Date today is `date`'
# Date today is `date`

# Ex 2
echo \$HOME
# $HOME
```

# Script Arguments

## Accessing Arguments

We can pass arguments to our bash scripts in one of those ways:

- `$#` - Number of arguments
- `$*` - List of all arguments
- `$0` - Script name
- `$1`, `$2`, ... - first argument, second argument, ...
- `$?` - Return code of the last command

## Passing Arguments

To pass arguments to a script:

```bash
script.sh arg1 arg2 arg3
```

## Example

For example if we have the following script:

```bash
#!/usr/bin/bash
echo hello $*
echo the number of arguments is $#
echo the script name is $0
```

And we run it with the following command:

```bash
./script.sh Mohamed Ahmed
```

The output will be:

```
hello Mohamed Ahmed
the number of arguments is 2
the script name is ./script.sh
```

# User Input

## `read` Command

To create a script that takes user name and displays it:

```bash
#!/usr/bin/bash
echo "Enter your name:"
read name
echo "Hello $name"
```

## `REPLY` Variable

If you don't give the variable a name in `read` command, it will be stored in `REPLY` variable:

```bash
#!/usr/bin/bash
echo "Enter your name:"
read
echo "Hello $REPLY"
```

# Conditional Statements

## If Statements

To test for conditions in bash scripts, we use `if` statement with one of the following operators:

- `-eq` - equal
- `-ne` - not equal
- `-gt` - greater than
- `-lt` - less than
- `-ge` - greater than or equal
- `-le` - less than or equal

## Logical Operators

Logical operators:

- `-a` - AND operator
- `-o` - OR operator
- `!` - NOT operator

## File Testing

Testing files:

- `-f` - file exists
- `-d` - directory exists
- `-l` - symbolic link

## File Permissions

Checking file permissions:

- `-r` - readable
- `-w` - writable
- `-x` - executable

## String Operators

String operators:

- `-z` - empty string
- `-n` - not empty string

## Example If Statement

Example:

```bash
if [ $# -eq 0 ]; then
  echo $0 must take an argument
else
  echo hello $*
fi
```

The script above will check if the number of arguments is equal to 0, it will output `$0 must take an argument`, otherwise it will output `hello $*`.

- `$0` is the script name.
- `$*` is the list of all arguments.

# File and Directory Checks

To check if a parameter is a file or a directory we use `-f` and `-d` operators:

```bash
echo Enter a file or directory name:
read name

if [ -f $name ]; then
  echo $name is a file
elif [ -d $name ]; then
  echo $name is a directory
else
  echo $name is neither a file nor a directory
fi
```

### Test Command

In old bash scripts we used to use `test` command instead of `[ ]`:

```bash
if test $# -eq 0; then
  echo $0 must take an argument
else
  echo hello $*
fi
```

## Multiple Parameters

To accept multiple parameters:

```bash
echo Enter your full name:
read first middle last
echo Your first name is $first
```
