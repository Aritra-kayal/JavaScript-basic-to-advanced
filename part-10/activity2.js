let inp = document.querySelector("#text");
inp.addEventListener("input", function () {
  let para = document.querySelector("p");
  para.innerText = inp.value;
});
