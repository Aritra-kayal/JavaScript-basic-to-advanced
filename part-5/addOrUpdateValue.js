const student = {
  name: "shradha",
  age: 23,
  marks: 94.4,
  city: "Delhi",
};
student.city = "Mumbai";
console.log(student);
student.marks = "A";
console.log(student);
student.gender = "Female";
console.log(student);
delete student.marks;
console.log(student);
