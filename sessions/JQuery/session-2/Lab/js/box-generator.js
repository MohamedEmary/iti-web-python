$(() => {
  const colorClasses = ["green", "blue", "orange", "red"];
  let index = 0;

  function addNewBox() {
    $(this).off("click");

    const newDiv = $("<div>").addClass(
      colorClasses[index % colorClasses.length]
    );
    $("body").append(newDiv);

    newDiv.on("click", addNewBox);

    index = (index + 1) % colorClasses.length;
  }

  $("div:last").on("click", addNewBox);
});
