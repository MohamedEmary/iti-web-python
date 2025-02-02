#!/bin/bash
function square {
  typeset -i sq
  ((sq = $1 * $1))
  echo $sq
}
echo "The square is: $(square $1)"
