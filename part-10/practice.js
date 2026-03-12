let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let inp = document.querySelector("input");
inp.addEventListener("input", function () {
  console.log(inp.value);
  p.innerText = inp.value;
});
