// function hello() {
//   console.log("Hello World!");
// }
// hello();

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(10, 20));

// function student(name, age) {
//   console.log(`${name}'s age is ${age}`);
// }
// student("Aritra", 20);
// student("Rahul", 19);

// function dice() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }
// dice();

// function avg(a, b, c) {
//   return (a + b + c) / 3;
// }
// console.log(avg(10, 20, 30));

// function multiplicationTable(n) {
//   console.log(`Multiplication Table of ${n}`);
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${n} X ${i} = ${n * i}`);
//   }
// }
// let n = prompt("Enter a number: ");
// n = parseInt(n);
// multiplicationTable(n);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(sum(1, 2), 3));

// function isAdult(age) {
//   if (age >= 18) {
//     return "Adult";
//   } else {
//     return "Not Adult";
//   }
// }
// console.log(isAdult(20));
// console.log(isAdult(17));

// function sumOfNNumber(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// let n = prompt("Enter a number: ");
// n = parseInt(n);
// console.log(sumOfNNumber(n));

function concatenationOfString(arr) {
  let con = "";
  for (let i = 0; i < arr.length; i++) {
    con = con + arr[i];
  }
  return con;
}
let arr = ["Aritra", "Raj", "Rahul", "Soumodeep", "Amrtya", "Bijay"];
console.log(concatenationOfString(arr));
