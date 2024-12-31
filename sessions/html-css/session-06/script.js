// document.body.style.padding = "100px";

const canvas = /** @type {HTMLCanvasElement} */ (
  document.getElementById("canvas")
);

const context = canvas.getContext("2d");
context.beginPath();
// context.moveTo(300, 300);
// context.lineTo(120, 120);
// context.strokeStyle = "red";

context.arc(100, 100, 40, 0, Math.PI * 2);
context.rect(100, 100, 100, 50);
// context.rect(10, 10, 100, 50);
context.fillStyle = "gold";
context.fillRect(10, 10, 100, 50);
// context.setTransform(a, b, c, d, e, f)
context.stroke();
