const cardioBtn = document.querySelector(".deuteri");
const cardioText = document.querySelector(".cardio");
const weightBtn = document.querySelector(".triti");
const weightText = document.querySelector(".weight");

//cardio button
cardioBtn.addEventListener("click", function () {
  cardioText.classList.remove("hidden");
  weightText.classList.add("hidden");
});
//weight button
weightBtn.addEventListener("click", function () {
  weightText.classList.remove("hidden");
  cardioText.classList.add("hidden");
});
