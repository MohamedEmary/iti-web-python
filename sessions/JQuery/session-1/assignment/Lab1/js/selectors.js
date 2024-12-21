// =========== Q1 ===========
// Background of every DIV like its class name
// text color of paragraph like its class name

$(".container1 div").each(function () {
  $(this).css("background", $(this).attr("class"));
});

$(".container1 p").each(function () {
  $(this).css("color", $(this).attr("class"));
});

// =========== Q2 ===========
$(".container2 a").each(function () {
  if ($(this).attr("href").includes("google")) {
    $(this).text("Google");
  } else if ($(this).attr("href").endsWith("org")) {
    $(this).text("IEEE");
  } else if ($(this).attr("href").startsWith("https")) {
    $(this).text("Facebook");
  }

  if (
    !$(this).attr("href").startsWith("https") &&
    $(this).attr("href").startsWith("http")
  ) {
    $(this).text(`${$(this).text()} Official Website`);
  }
});

// =========== Q3 ===========
$(".container3 figure:nth-child(3) img")
  .attr({ src: "img/orange.png" })
  .next()
  .text("fig.3 - Orange Juice");

// =========== Q4 ===========
$(".container4 td.my-name").css("color", "blue");

$(".container4 table td:odd").css("backgroundColor", "pink");

$(".container4 table:first-child tr:last-child td:nth-child(2)").css(
  "fontWeight",
  "bold"
);

// =========== Q5 ===========
$(".container5 ul > li:nth-last-child(2)").css("fontStyle", "italic");

$(".container5 ol li:nth-child(2)").next().css("color", "red");
