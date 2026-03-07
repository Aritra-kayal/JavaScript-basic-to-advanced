let btns = document.querySelectorAll("button");
console.dir(btns);

function sayHello() {
  console.log("Hello!");
  alert("Hello!");
}

for (btn of btns) {
  btn.onclick = sayHello;
}
