$(() => {
  let index = 0;
  let users = [];
  let search = [];
  $("tbody").on("click", ".delete", function () {
    users = users.filter(
      (item) => item.id !== Number($(this).closest("tr").attr("id"))
    );
    $(this).closest("tr").remove();
  });

  $("#add").on("click", () => {
    if (
      $("#name").val() !== "" &&
      $("#age").val() !== "" &&
      Number($("#age").val())
    ) {
      users.push({
        id: index,
        name: $("#name").val(),
        age: $("#age").val(),
      });
      displayTable();

      $("#name").val("");
      $("#age").val("");
      index++;
    } else {
      $("#warn").text("Please fill in all fields and age with a number");
      $("#warn").css({ color: "red", fontWeight: "bold" });
    }

    $("#search-item").on("input", function () {
      const val = $(this).val();
      search = users.filter((item) => {
        if (
          String(item.id).includes(val) ||
          item.name.includes(val) ||
          String(item.age).includes(val)
        ) {
          return item;
        }
      });
      displayTable(search);
    });
  });

  function displayTable(usersArr = users) {
    $("tbody").html("");
    for (const element of usersArr) {
      $("tbody").append(`
      <tr id="${element.id}">
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>
          <button class="delete">Delete</button>
        </td>
      </tr>
      `);
    }
  }
});
