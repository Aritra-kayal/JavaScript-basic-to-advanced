let number = [1, 2, 3, 4, 5];
let double = number.map((n) => n * 2);
console.log(number);
console.log(double);
let info = [
  {
    name: "Aritra",
    roll: 14,
    marks: 95,
  },
  {
    name: "Rahul",
    roll: 32,
    marks: 90,
  },
  {
    name: "Raj",
    roll: 30,
    marks: 85,
  },
  {
    name: "Soumodeep",
    roll: 50,
    marks: 79,
  },
];
let cgpa = info.map((student) => student.marks / 10);
console.log(cgpa);
