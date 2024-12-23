$(function () {
  const err = $(".error");
  const content = $(".content");

  $.fn.fontSize = function (increase = "true") {
    if (increase) {
      $(this).css("fontSize", "+=1px");
    } else {
      $(this).css("fontSize", "-=1px");
    }
    return $(this);
  };

  $("#increase").on("click", function () {
    if (content.css("fontSize") === "28px") {
      err.text("Max size reached");
    } else {
      content.fontSize();
    }
  });

  $("#decrease").on("click", function () {
    if (content.css("fontSize") === "14px") {
      err.text("Min size reached");
    } else {
      content.fontSize(false);
    }
  });
});
