/* var http = new XMLHttpRequest();
var data;
http.onreadystatechange = function () {
  var status = http.status;
  var readyState = http.readyState;
  if (status === 200 && readyState === 4) {
    // Get the response as string
    console.log(http.responseText);
    // You can also get the response as XML

    // Convert the response to JSON
    // console.log(JSON.parse(http.responseText));
    data = JSON.parse(http.responseText);
  }
};
http.open("GET", "https://jsonplaceholder.typicode.com/users", true);
http.send();

console.log("data = ", data);
 */

var http = new XMLHttpRequest();
var data;

http.onreadystatechange = function () {
  if (http.readyState == 4 && http.status == 200) {
    data = JSON.parse(http.responseText);
    printData(data);
  }
};

http.open("GET", "https://jsonplaceholder.typicode.com/users");
http.send();

function printData(data) {
  var ul = document.createElement("ul");
  data.forEach((element) => {
    var li = document.createElement("li");
    li.textContent = element.name;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
  console.log(data);
}

console.log("end");
