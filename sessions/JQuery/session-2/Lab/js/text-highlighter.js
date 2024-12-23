const initialText = $("#text").html();

function search() {
  let searched = $("#search").val().trim();
  if (searched !== "") {
    let re = new RegExp(searched, "g");
    let newText = initialText.replace(re, `<mark>${searched}</mark>`);
    $("#text").html(newText);
  }
}

$("#button").on("click", search);
