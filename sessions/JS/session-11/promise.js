function getData() {
  return new Promise((res, rej) => {
    let isValid = true;
    setTimeout(() => {
      if (isValid) {
        res("Success");
      } else {
        rej("Failed");
      }
    }, 1000);
  });
}

getData()
  .then((res) => console.log(res))
  .catch((e) => console.error(e));

function getHttpData() {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          res(JSON.parse(xhr.responseText));
        } else {
          rej("Error", xhr.status, JSON.parse(xhr.responseText));
        }
      }
    };
  });
}

getHttpData()
  .then((data) => console.log(data))
  .catch((e) => console.error(e));
