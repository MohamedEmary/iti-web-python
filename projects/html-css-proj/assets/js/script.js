var x = document.querySelector(".fa-bars").addEventListener("click", () => {
  console.log("called");
  document.querySelector("nav ul").classList.toggle("block");
});
