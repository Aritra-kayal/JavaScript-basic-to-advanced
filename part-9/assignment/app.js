//1
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);
// //2
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");
// //3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");
//4
let heading = document.createElement("h1");
heading.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(heading);
heading.classList.add("headingCol");
//5
let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para);
