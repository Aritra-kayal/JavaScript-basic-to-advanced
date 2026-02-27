let arr = [1, 2, 3, 4, 5];
function print(el) {
  console.log(el);
}
arr.forEach(print);
//OR
arr.forEach(function (el) {
  console.log(el);
});
//OR
arr.forEach((el) => {
  console.log(el);
});
//OR
const print1 = (el) => {
  console.log(el);
};
arr.forEach(print1);
//array of object
let arr1 = [
  {
    name: "aman",
    marks: 95,
  },
  {
    name: "shradha",
    marks: 94.4,
  },
  {
    name: "karan",
    marks: 92,
  },
];
arr1.forEach((student) => {
  console.log(student);
});
arr1.forEach((student) => {
  console.log(student.marks);
});
