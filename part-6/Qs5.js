function sum(n) {
  let nSum = 0;
  for (let i = 1; i <= n; i++) {
    nSum = nSum + i;
  }
  return nSum;
}
let n = prompt("enter a nember");
console.log(`sum of 1 to ${n} is :${sum(n)}`);
