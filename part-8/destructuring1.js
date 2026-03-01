let student = {
  name: "karan",
  class: 9,
  age: 14,
  subjects: ["hindi", "english", "math", "science"],
  username: "karan123",
  password: 1234,
  city: "pune",
};
const { username: user, password: pass, city: place = "kolkata" } = student;
console.log(user, pass);
console.log(student);
