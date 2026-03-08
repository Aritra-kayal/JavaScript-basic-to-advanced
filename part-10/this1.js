// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// });

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// btn.addEventListener("click", function () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// });
// h1.addEventListener("click", function () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// });
// h3.addEventListener("click", function () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// });
// p.addEventListener("click", function () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// });

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
function colorChange() {
  console.log(this.innerText);
  this.style.backgroundColor = "blue";
}
btn.addEventListener("click", colorChange);
h1.addEventListener("click", colorChange);
h3.addEventListener("click", colorChange);
p.addEventListener("click", colorChange);
