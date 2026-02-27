let num = [1, 2, 3, 4];
let double = num.map((el) => {
  return el * 2;
});
console.log(double);
//array of object
let student = [
  {
    name: "aman",
    marks: 95,
  },
  {
    name: "shradh",
    marks: 94.5,
  },
  {
    name: "karan",
    marks: 92,
  },
];
let gpa = student.map((el) => {
  return el.marks / 10;
});
console.log(gpa);
