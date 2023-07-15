const button = document.querySelector("button");
const displayArea = document.querySelector(".play");

button.addEventListener("mousemove", () => {
  let rangeOfX = displayArea.offsetWidth - button.offsetWidth;
  let rangeOfY = displayArea.offsetHeight - button.offsetHeight;

  let newX = Math.floor(Math.random() * rangeOfX) + button.offsetWidth / 2;
  let newY = Math.floor(Math.random() * rangeOfY) + button.offsetHeight / 2;

  button.style.top = `${newY}px`;
  button.style.left = `${newX}px`;
});
