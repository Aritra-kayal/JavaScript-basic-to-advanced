let arr = [1, 2, 3, 4, -1];
let min = Math.min(...arr);
console.log(min);
console.log("Aritra");
console.log(..."Aritra");
console.log(...arr);
console.log(...[1, 2, 3, 4]);
let name = "Ram";
console.log(...name);
let newName = [...name];
console.log(newName);
let even = [2, 4, 6, 8];
let odd = [1, 3, 5, 7];
let number = [...even, ...odd];
console.log(number);
console.log([..."Aritra"]);
let student = {
  name: "Aritra",
  roll: 14,
  city: "kolkata",
};
let studentCopy = {
  ...student,
  id: 1001,
};
console.log(studentCopy);
