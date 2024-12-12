// ================ Q1 ================

// https://jsonplaceholder.typicode.com/albums/1/photos
var images = [];
var imgSlider = document.getElementById("slider");
var i = 0;
var sliderHandler;

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/albums/1/photos");
xhr.send();
xhr.onreadystatechange = () => {
  if (xhr.status === 200 && xhr.readyState === 4) {
    images = JSON.parse(xhr.responseText);
    sliderHandler = startSliderInterval(2000);
  }
};

function startSliderInterval(time) {
  var handler = setInterval(() => {
    imgSlider.src = images[i].url;
    i = (i + 1) % images.length;
  }, time);

  return handler;
}

var speedButtons = document.querySelectorAll(".change-speed");

function handleSpeedChange() {
  speedButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      sliderHandler ? clearInterval(sliderHandler) : "";

      sliderHandler = startSliderInterval(parseInt(btn.id));
    });
  });
}

handleSpeedChange();

document.getElementById("play").addEventListener("click", () => {
  startSliderInterval(2000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(sliderHandler);
});

document.getElementById("next").addEventListener("click", () => {
  sliderHandler ? clearInterval(sliderHandler) : "";
  i = (i + 1) % images.length;
  imgSlider.src = images[i].url;
});

document.getElementById("prev").addEventListener("click", () => {
  sliderHandler ? clearInterval(sliderHandler) : "";

  i = i - 1;
  if (i === 0) {
    i = images.length - 1;
  }

  imgSlider.src = images[i].url;
});

// ================ Q2 ================

console.log(setCookie("fname", "mohamed", "/", 3));
console.log(setCookie("lname", "ahmed", "/", 3));
console.log(setCookie("age", "23", "/", 3));
console.log(getCookieAsArrObj(false)); // return object
console.log(getCookieAsArrObj(true)); // return array
console.log(getCookie("fname")); // fname = mohamed

// ================ Q3 ================

// var form = document.getElementById("form");
var submit = document.getElementById("submit");
var editUsr;
var deleteUsr;
var warn = document.getElementById("warn");
var tableBody = document.getElementById("table-body");
var title;
var usrName = document.getElementById("name");
var email = document.getElementById("email");
var cardType = document.getElementById("card-type");
var saveData = document.getElementById("save");
var search = document.getElementById("search");
var usrNo = document.getElementById("users-no");
var usrData = [];
var index = 0;

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (usrName.value === "" || email.value === "") {
    warn.textContent = "Please enter your name and email";
  } else {
    handleAddUsr();
  }
});

function handleAddUsr(data = null) {
  title = document.querySelector('input[name="title"]:checked');

  warn.textContent = "";

  data = data || {
    index: index,
    title: title?.value,
    name: usrName.value,
    email: email.value,
    cardType: cardType.value,
    saveData: saveData.checked,
  };

  addRow(data);

  addDeleteEvent();
  addEditEvent();

  document.getElementById("mister").checked = false;
  document.getElementById("miss").checked = false;

  usrName.value = "";
  email.value = "";
  cardType.value = "";
  saveData.checked = "";

  localStorage.setItem("usrData", JSON.stringify(usrData));

  usrNo.textContent = usrData.length;

  index++;
}

function handleEditUsr(e) {
  var index = parseInt(e.target.parentElement.id);
  // it will always be one item
  var item = usrData.filter((item) => item.index === index)[0];

  usrName.value = item.name;
  email.value = item.email;
  cardType.value = item.cardType;
  saveData.checked = item.saveData;
  if (item.title) {
    document.querySelector(
      `input[name="title"][value="${item.title}"]`
    ).checked = true;
  }

  data = {
    index: index,
    title: title?.value,
    name: usrName.value,
    email: email.value,
    cardType: cardType.value,
    saveData: saveData.checked,
  };
  addRow(data);

  handleRemoveUsr(e);
}

function addRow(data) {
  usrData.push(data);

  tableBody.innerHTML += `
      <tr id="${index}">
        <td>
          ${title?.value ? title.value : ""} 
          ${usrName.value}
        </td>
        <td>${email.value}</td>
        <td>
          ${cardType.value ? cardType.value : "No Card"}
        </td>
        <td>
          ${saveData.checked ? "✅" : "🟩"}
        </td>
        <td class='edit'>📝</td>
        <td class='trash'>🗑️</td>
      </tr>
    `;
}

function handleRemoveUsr(e) {
  var itemId = parseInt(e.target.parentElement.id);

  usrData = usrData.filter((item) => item.index !== itemId);
  localStorage.setItem("usrData", JSON.stringify(usrData));

  tableBody.innerHTML = ``;
  for (let i = 0; i < usrData.length; i++) {
    tableBody.innerHTML += `
    <tr id="${usrData[i].index}">
      <td>
        ${usrData[i].title ? usrData[i].title : ""} 
        ${usrData[i].name}
      </td>
      <td>${usrData[i].email}</td>
      <td>
        ${usrData[i].cardType ? usrData[i].cardType : "No Card"}
      </td>
      <td>
        ${usrData[i].saveData ? "✅" : "🟩"}
      </td>
      <td class='edit'>📝</td>
      <td class='trash'>🗑️</td>
    </tr>
  `;
  }
  addDeleteEvent();
  addEditEvent();
  usrNo.textContent = usrData.length;
}

function addEditEvent() {
  editUsr = document.querySelectorAll(".edit");

  editUsr.forEach((item) => {
    item.addEventListener("click", (e) => {
      handleEditUsr(e);
    });
  });
}

function addDeleteEvent() {
  deleteUsr = document.querySelectorAll(".trash");

  deleteUsr.forEach((item) => {
    item.addEventListener("click", (e) => {
      handleRemoveUsr(e);
    });
  });
}
