// function sum(a, b) {
//   return a + b;
// }
// sum(1, 2);

function sum(a, b) {
  return a + b;
}
// let s = sum(1, 2);
// console.log(s);
console.log(sum(1, 2));

function sum1(a, b) {
  return a + b;
}
console.log(sum1(sum1(1, 2), 3));

function sum2(a, b) {
  console.log("Aritra");
  console.log("Aritra");
  return a + b;
  console.log("Aritra");
  console.log("Aritra");
}
console.log(sum2(1, 2));

function isAdult(age) {
  if (age >= 18) {
    return "adult";
  } else {
    return "not adult";
  }
  console.log("bye bye");
}
console.log(isAdult(19));
