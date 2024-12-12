var numbers1 = document.getElementById("nums1");
var numbers2 = document.getElementById("nums2");

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  var nums1 = numbers1.value.split(",");
  var nums2 = numbers2.value.split(",");

  var allNums = [...nums1, ...nums2];
  var intNums = [];
  for (let i = 0; i < allNums.length; i++) {
    if (!intNums.includes(parseInt(allNums[i]))) {
      intNums.push(parseInt(allNums[i]));
    }
  }

  console.log(intNums);
});

