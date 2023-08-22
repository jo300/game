document.querySelector("body").style.backgroundColor = "#000000";
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var val;
val = getRandomNumberBetween(1, 20);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const num = document.querySelector(".guess").value;
  if (num != val) {
    displayMessage(num > val ? "guess is high" : "guess is  low");
    document.querySelector("body").style.backgroundColor =
      num > val ? "blue" : "gray";
  } else if (num == val) {
    displayMessage("😻 correct");
    document.querySelector(".answer").textContent = val;

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".score").textContent = "score is 100";
  } else {
    displayMessage("enter a valid number");
  }
});
