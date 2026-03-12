let btn = document.createElement("button");
btn.innerText = "click me!";
let body = document.querySelector("body");
body.appendChild(btn);
btn.addEventListener("click", function () {
  btn.style.color = "green";
});
