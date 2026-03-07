let btn = document.querySelector("button");
console.dir(btn);
// btn.onclick = function () {
//   console.log("button was clicked");
//   alert("button was clicked");
// };

function sayHello() {
  console.log("Hello!");
  alert("Hello!");
}

btn.onclick = sayHello;
