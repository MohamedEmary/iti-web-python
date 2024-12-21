// =========== Q1 ===========
$(".container1").append("<d class='black'>Appended div</d>");
$(".container1").prepend("<d class='white'>Prepended div</d>");
$(".container1 .blue").prepend("<p class='yellow'>Prepended paragraph</p>");

// =========== Q2 ===========
$(".container2 p").each(function () {
  const item = $(this);
  item.replaceWith(`<a href='http://${item.text()}'>${item.text()}</a>`);
});

// =========== Q3 ===========
$(".container3 img").wrap("<figure></figure>");
$(".container3 figure").append("<figcaption>Coffee</figcaption>");

// =========== Q4 ===========
$(".container4 td.col-age").text("");
$(".container4 td:contains('Mohsen')").addClass("man");
$(".container4 td").each(function () {
  if ($(this).hasClass("your-email")) {
    $(this).removeClass("your-email");
  } else {
    $(this).addClass("your-email");
  }
});

// const initialElements = $(".container4 td.your-email");
// initialElements.removeClass("your-email");
// $(".container4 td").not(initialElements).addClass("your-email");

// =========== Q5 ===========
$(".container5 ul > li").each(function (index) {
  if (index % 3 !== 0) {
    $(this).remove();
  }
});

// =========== Q6 ===========
$(".container6 input[name='username']").val("Mohamed");
$(".container6 input[type='checkbox']").attr("checked", "yes");
