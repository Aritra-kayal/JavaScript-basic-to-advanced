let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let list = document.createElement("li");
  list.innerText = inp.value;
  ul.appendChild(list);
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  list.appendChild(delBtn);
  inp.value = "";
});
ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listDel = event.target.parentElement;
    listDel.remove();
  }
});
