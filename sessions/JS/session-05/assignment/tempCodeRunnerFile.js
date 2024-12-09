var str = "lorem mohamed ahmed";
var freq = {
  a: 0,
  e: 0,
  i: 0,
  o: 0,
  u: 0,
};
var vowels = ["a", "e", "i", "o", "u"];
for (var i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    freq[str[i]]++;
  }
}

console.log(freq);