let h2 = document.querySelector("h2");
let inp = document.querySelector("input");
inp.addEventListener("input", function () {
  h2.innerText = inp.value;
});
