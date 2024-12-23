$(function () {
  const box = $(".box");
  box.on("click", () => {
    box.css("transition", "background-color 1s ease");

    box.animate(
      {
        width: 200,
        height: 200,
        left: 500,
      },
      {
        duration: 1000,
        progress: () => {
          box.css("background-color", "blue");
        },
      }
    );

    box.animate(
      {
        top: 500,
        width: 100,
        height: 100,
      },
      {
        duration: 1000,
        progress: () => {
          box.css("background-color", "orange");
        },
      }
    );

    box.animate(
      {
        left: 0,
        width: 200,
        height: 200,
      },
      {
        duration: 1000,
        progress: () => {
          box.css("background-color", "green");
        },
      }
    );

    box.animate(
      {
        top: 0,
        width: 100,
        height: 100,
      },
      {
        duration: 1000,
        progress: () => {
          box.css("background-color", "red");
        },
      }
    );
  });
});
