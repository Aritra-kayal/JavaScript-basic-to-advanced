let student = {
  name: "Aritra",
  city: "Pune",
  username: "Aritra@2006",
  password: 123,
};
let { username: user, password: pass, city = "Kolkata" } = student;
console.log(user, pass, city);
