let smallImg = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].src = "assets/spiderman_img.png";
  console.log(`value of image no.${i} is changed`);
}
