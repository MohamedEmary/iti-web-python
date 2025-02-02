#!/usr/bin/ksh

typeset —i n1
typeset —i n2

n1=1
n2=1

while test $Snl —eg $Sn2; do
  n2=$n2+1
  print $n1
  if [ $n1 —gt $n2]; then
    break
  else
    continue
  fi
  nl=$n1+1
  print $n2
done
