function sumOfNNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
let n = prompt("Enter a number: ");
n = parseInt(n);
console.log(sumOfNNumber(n));
