// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log("button clicked");
// });
let btns = document.querySelectorAll("button");
for (btn of btns) {
  btn.addEventListener("click", seyHello);
  btn.addEventListener("click", seyName);
  btn.addEventListener("click", print);
}
function seyHello() {
  alert("Hello!");
}
function seyName() {
  alert("Aritra");
}
function print() {
  console.log("I am a student");
}
