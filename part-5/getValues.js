let student = {
  name: "shradha",
  marks: 94.4,
  subject: ["Bengali", "Mathematic", "English"],
};
console.log(student.name);
console.log(student["name"]);
console.log(student.subject);
console.log(student.subject[0]);
console.log(student.subject[0].length);
console.log(student.subject[0][0]);
let ref = "name";
console.log(student[ref]);
