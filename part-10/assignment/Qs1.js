//1
let btn = document.querySelector("button");
btn.addEventListener("mouseout", function () {
  console.log("mouse out");
});
//2
let inp = document.querySelector("#user");
inp.addEventListener("keypress", function () {
  console.log("key press");
});
//3
window.addEventListener("scroll", function () {
  console.log("scroling the page");
});
//4
window.addEventListener("load", function () {
  console.log("The whole page has fully loaded");
});

let img = document.querySelector("img");
img.addEventListener("load", function () {
  console.log("Image has loaded successfully");
});
