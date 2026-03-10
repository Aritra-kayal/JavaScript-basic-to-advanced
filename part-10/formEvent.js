let form = document.querySelector("form");
// form.addEventListener("submit", function () {
//   alert("form submitted");
//   console.log("form submitted");
// });

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("form submitted");
  console.log("form submitted");
});
