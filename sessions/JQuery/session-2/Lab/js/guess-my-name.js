$(() => {
  let tries = 0;
  const myName = "Mohamed";
  $("#my-name").on("input", function () {
    $(".counter").text(++tries);
    if (myName.toLowerCase() === $(this).val().toLowerCase()) {
      $(".result").text(
        "Congratulations! You have did it in " + tries + " tries"
      );
      $(".my-name").text($(this).val().toUpperCase());
    } else if (myName.toLowerCase().startsWith($(this).val().toLowerCase())) {
      $(".my-name").text($(this).val().toUpperCase());
    }
  });
});
