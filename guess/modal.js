const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");

const display = function () {
  console.log("btn clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const remove = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const btnOpenModal = document.querySelectorAll(".show-modal");
for (i = 0; i <= btnOpenModal.length; i++) {
  console.log(btnOpenModal[i]?.addEventListener("click", display));
}
btnClose.addEventListener("click", remove);
overlay.addEventListener("click", remove);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    remove();
  }
});
