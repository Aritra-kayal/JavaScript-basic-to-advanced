// //getElementById
// let mainImgObj = document.getElementById("mainImg");
// console.dir(mainImgObj);
// mainImgObj.src = "assets/creation_3.jpeg";

//getElementByClassName
let smallClass = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallClass.length; i++) {
  //   console.dir(smallClass[i].src);
  smallClass[i].src = "assets/creation_1.png";
  console.log(`value of class number ${i} is changed`);
}
