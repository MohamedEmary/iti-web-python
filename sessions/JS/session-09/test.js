for (var j = 0; j < 5; j++) {
  setTimeout(() => {
    console.log(j); // 5 5 5 5 5
  }, 100);
}

for (let k = 0; k < 5; k++) {
  setTimeout(() => {
    console.log(k); // 0 1 2 3 4
  }, 100);
}

let i;
for (i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // 5 5 5 5 5
  }, 100);
}
