// This is a comment
let index = 0;
let header = $("#jq-header");

header.click((e) => {
  e.preventDefault();
  console.log(`hello from jq ${index}`);
  index++;
});

$("#press-me").click((e) => {
  e.preventDefault();
  header.fadeOut();
  console.log("fade out");
});

$("#hide-all").click(() => {
  // $("*").hide();
  // // hides all elements with class par1-class
  // $(".par1-class").hide();
  // // hides only the first element with id par1-id
  // $("#par1-id").hide();
  // $("#par1-id, .par1-class").hide();
  // $("#par1-id, .par1-class").css("color", "red");
  // $("p:contains('Paragraph 2')").css("color", "red");
  // $("div:nth-child(2)").css("color", "red");
  // $("p:contains('Paragraph 2')").parents().css("backgroundColor", "green");
  // $("p:contains('Paragraph 2')").parent().css("backgroundColor", "green");
  // $(".parent").children().css("backgroundColor", "green");
  // $(".parent").css("backgroundColor", "green");
  // $(".parent").siblings().css("backgroundColor", "green");
  // $(".parent").prev().css("backgroundColor", "green");
  // $(".parent").next().css("backgroundColor", "green");
  // $(".parent")
  //   .find("p:contains('Paragraph 3')")
  //   .css("backgroundColor", "green");
  // $(".parent").append("<a href='https://www.google.com'>Google</a>");
  // $(".parent").before("<div>I'm a Sibling Before</div>");
  // $(".parent").after("<div>I'm a Sibling After</div>");
  // $("#par2").replaceWith("<p>I replaced Par1</p>");
  // // try the two statements below together
  // $("#par2").wrap("<div class='wrapper'>I'm par2 wrapper</div>");
  // $(".wrapper").css("border", "1px solid red");
  // //
  // // wrapInner wraps everything inside the selected element in the new element
  // $(".parent").wrapInner("<div class='wrapper-inner'>I'm par2 wrapper</div>");
  // $(".wrapper-inner").css("border", "1px solid red");
  // //
  // $(".parent").css({
  //   color: "gray",
  //   backgroundColor: "yellow",
  // });
  // $(".parent").html("<p>Replaced all content</p>");
  // $(".parent").text("<p>This tag will not be rendered as HTML.</p>");
  // $("input").val("Hello World");
  // $("input").attr("type", "password");
  // $("img").attr({
  //   src: "./image2.png",
  //   width: "300px",
  // });
  // $(".parent").addClass("gold-bg");
  // $(".parent").removeClass("gold-bg");
  // $(".parent").toggleClass("gold-bg");
  // $("p").each(function (index) {
  // // You can't use an arrow function here as the 'this' keyword in arrow functions
  // // refers to the document global object
  //   const colors = ["red", "green", "blue"];
  //   $(this).css("color", colors[index % 3]);
  // });
});
