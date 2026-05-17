let student = {
  name: "Aritra",
  city: "Pune",
  username: "Aritra@2006",
  password: 123,
};
let { username: user, password: pass, city: place = "kolkata" } = student;
console.log(user, pass, place);
