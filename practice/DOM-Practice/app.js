// //getElementById
// let mainImgObj = document.getElementById("mainImg");
// console.dir(mainImgObj);
// mainImgObj.src = "assets/creation_3.jpeg";

// //getElementsByClassName
// let smallClass = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallClass.length; i++) {
//   //   console.dir(smallClass[i].src);
//   smallClass[i].src = "assets/creation_1.png";
//   console.log(`value of class number ${i} is changed`);
// }

// //getElementsByTagName
// document.getElementsByTagName("p")[1].innerText = "Aritra is a good boy";
// document.getElementsByTagName("span");

// //querySelector
// let h1 = document.querySelector("h1");
// h1.innerText = "Aritra";

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#mainImg"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll(".oldImg"));
// let allImg = document.querySelectorAll(".oldImg");
// allImg[1].src = "assets/spiderman_img.png";
// console.dir(document.querySelectorAll("div a"));

// //setting content in object
// let pera = document.querySelector("p");
// console.log(pera.innerText);
// console.log(pera.textContent);
// console.log(pera.innerHTML);
// let heading = document.querySelector("h1");
// heading.innerText = "Aritra";
// heading.innerHTML = `<u>${heading.innerText}</u>`;

// //manipulating attributes
// let img = document.querySelector("img");
// console.log(img.getAttribute("id"));
// img.setAttribute("id", "spiderman");
// let allImg = document.querySelectorAll("div.images img");
// let img1 = allImg[0];
// img1.setAttribute("src", "assets/spiderman_img.png");
// console.log(img1.getAttribute("src"));

// //manipulating style with style attribute
// let heading = document.querySelector("h1");
// heading.style.color = "red";
// let links = document.querySelectorAll("div.box a");
// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "yellow";
// }

// let links = document.querySelectorAll("div.box a");
// for (link of links) {
//   link.style.color = "red";
// }

// //classList
// let img = document.querySelector("img");
// console.log(img.classList);
// let heading = document.querySelector("h1");
// heading.classList.add("green", "underline");
// console.log(heading.classList);
// heading.classList.remove("underline");
// console.log(heading.classList);
// console.log(heading.classList.contains("underline"));
// console.log(heading.classList.contains("green"));
// console.log(heading.classList.toggle("green"));
// console.log(heading.classList.toggle("underline"));
// console.log(heading.classList);
// let box = document.querySelector("div.box");
// console.log(box.classList);
// box.classList.add("yellow");
// console.log(box.classList);

// //navigation
// let h4 = document.querySelector("h4");
// console.log(h4.parentElement);
// let div = document.querySelector("div.box");
// console.log(div.children);
// console.log(div.childElementCount);
// let imgDiv = document.querySelector("div.images");
// console.log(imgDiv.children);
// console.log(imgDiv.childElementCount);
// console.log(imgDiv.children[0].previousElementSibling);
// console.log(imgDiv.children[1].previousElementSibling);
// console.log(imgDiv.children[2].previousElementSibling);
// console.log(imgDiv.children[0].nextElementSibling);
// console.log(imgDiv.children[2].nextElementSibling);

// //adding element
// let newPara = document.createElement("p");
// newPara.innerText = "Hi I am Aritra";
// let body = document.querySelector("body");
// body.appendChild(newPara);
// let btn = document.createElement("button");
// btn.innerText = "click me!";
// let box = document.querySelector("div.box");
// box.prepend(btn);
// let btn1 = document.createElement("button");
// btn1.innerText = "click me!";
// newPara.append(btn1);
// newPara.append("I am a SDE");
// let input = document.createElement("input");
// newPara.append(input);
// input.setAttribute("placeholder", "User name");
// let btn2 = document.createElement("button");
// btn2.innerText = "click me!";
// btn2.classList.add("green");
// box.insertAdjacentElement("beforebegin", btn2);
// box.insertAdjacentElement("afterbegin", btn2);
// box.insertAdjacentElement("beforeend", btn2);
// box.insertAdjacentElement("afterend", btn2);

//removing element
// let body = document.querySelector("body");
// let box = document.querySelector("div.box");
// // body.removeChild(box);
// box.remove();
