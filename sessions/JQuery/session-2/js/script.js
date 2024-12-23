// Getting dimensions of an element
const outerBox = $(".outer-box");
console.log(outerBox.height()); // height without padding
console.log(outerBox.innerHeight()); // height with padding
console.log(outerBox.outerHeight()); // height with padding and border
console.log(outerBox.outerHeight(true)); // height with padding, border and margin

// Events in jQuery
// most of those events functions are
// deprecated '../events.png'
const box = $("#box");
// box.click();
// box.dblclick();
// box.hover();
// box.submit();
// box.blur();
// box.scroll();
// box.mouseover();

// box.on("click mouseover", ".inner-box", () => {
//   console.log("inner box clicked or hovered");
// });

// box.one("dblclick", ".inner-box", () => {
//   console.log("inner box double clicked");
//   console.log("This event will only run once");
// });

// box.on(
//   {
//     click: () => console.log("clicked"),
//     mouseover: () => console.log("hovered"),
//   },
//   ".inner-box"
// );

// box.one("mouseover", { name: "ahmed" }, (event) => {
//   var name = event.data.name;
//   console.log("Hi, I'm " + name);
// });

// box.on("click", { name: "mohamed", age: 23, college: "BFCAI" }, (event) => {
//   console.log(
//     `Hi, I'm ${event.data.name}.
// I'm ${event.data.age} Years old.
// I'm a student at ${event.data.college}`
//   );
// });

// =========================
// // Attach a callback to the Select Event
// $("input").select(function () {
//   $(this).after("Text marked!");
// });
// //trigger the select event handler when clicking the button
// $("button").click(function () {
//   $("input").trigger("select");
// });
// =========================

// box.hide(1500, () => {
//   $(".inner-box").css("background", "gray");
// });

// // toggle hides the element if it's visible
// // and shows the element if it's hidden
// box.toggle(1500, () => {
//   $(".inner-box").css("backgroundColor", "tomato");
// });

// box.slideUp(1500, "swing");
// box.slideDown(1500);
// box.slideToggle(1500);
// box.slideToggle(1500, "linear");

// box.animate(
//   {
//     width: "150px",
//     height: "250px",
//   },
//   "slow",
//   () => $(".inner-box").css("background", "purple")
// );

$.fn.makeBlue = function () {
  // you can't use arrow function here
  // because `this` will refer to the window object
  $(this).css("background", "blue");
  return $(this);
};

$(".inner-box").makeBlue();

$.fn.animateDim = function () {
  $(this).animate({
    width: "150px",
    height: "250px",
  });
};

$(".inner-box").animateDim();
