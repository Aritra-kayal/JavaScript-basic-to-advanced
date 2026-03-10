let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.dir(form);
  let user = form.elements[0]; // this.elements[0]
  let pass = form.elements[1]; // this.elements[1]

  console.log(user.value);
  console.log(pass.value);

  alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});
