document.querySelector("#login").addEventListener("click", (e) => {
  e.preventDefault();
  var username = document.querySelector("#username").value;
  var pass = document.querySelector("#pass").value;
  var welcomePar = document.querySelector("#welcome-placeholder");
  if (username === "" || pass === "") {
    welcomePar.textContent = "Please Enter your data!";
  } else if (username === "admin" && pass === "123") {
    welcomePar.textContent = `Welcome, ${username}!`;
  } else {
    welcomePar.textContent = "Wrong Email, Or Password!";
  }
});
