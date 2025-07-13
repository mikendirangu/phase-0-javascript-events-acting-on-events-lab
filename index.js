// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
// Initial position of the dodger
dodger.style.left = "180px"; // Centered in a 400px wide container
dodger.style.bottom = "0px"; // Positioned at the bottom of the container
dodger.style.position = "absolute"; // Ensure the dodger is positioned absolutely
dodger.style.width = "40px"; // Width of the dodger
dodger.style.height = "20px"; // Height of the dodger
dodger.style.backgroundColor = "blue"; // Color of the dodger
dodger.style.zIndex = "1"; // Ensure the dodger is on top of other elements
dodger.style.transition = "left 0.1s"; // Smooth transition for movement
dodger.style.left = "180px"; // Start position of the dodger
dodger.style.bottom = "0px"; // Start at the bottom of the container                    