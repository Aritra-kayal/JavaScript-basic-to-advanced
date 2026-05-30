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
