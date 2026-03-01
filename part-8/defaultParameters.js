function sum(a, b = 3) {
  return a + b;
}
console.log(sum(2));

const sub = (a, b = 3) => a - b;
console.log(sub(5));

function sum1(a, b = 3) {
  return a + b;
}
console.log(sum1(2, 4));

function sum2(a = 1, b) {
  return a + b;
}
console.log(sum2(2)); //a=2,b=undefined
