//1
let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
para1.classList.add("red");
document.querySelector("body").prepend(para1);
//2
let heading1 = document.createElement("h3");
heading1.innerText = "I'm a blue h3!";
heading1.classList.add("blue");
para1.insertAdjacentElement("afterend", heading1);
//3
let div1 = document.createElement("div");
div1.classList.add("myDiv");
heading1.insertAdjacentElement("afterend", div1);
let heading2 = document.createElement("h1");
heading2.innerText = "I'm in a div";
div1.prepend(heading2);
let para2 = document.createElement("p");
para2.innerText = "ME TOO!";
div1.append(para2);
