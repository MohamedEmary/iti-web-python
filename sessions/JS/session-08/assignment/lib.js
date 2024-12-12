// Ex2: create a js library
// create 3 JavaScript functions:
// A function to check a cookie value

function setCookie(key, val, path = "/", dayInterval = 3, time = new Date()) {
  time.setDate(time.getDate() + dayInterval);
  document.cookie = `${key}=${val}; expires=${time}; path=${path}`;
  return "Cookie set successfully";
}

function getCookieAsArrObj(asArr = true) {
  var arr = document.cookie.split(";");
  var obj = {};
  if (asArr) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      var val = arr[i].trim().split("="); // problem if cookie value contains '='
      obj[val[0]] = val[1];
    }
    return obj;
  }
}

function getCookie(key) {
  var obj = getCookieAsArrObj(false);
  return `${key} = ${obj[key]}`;
}
