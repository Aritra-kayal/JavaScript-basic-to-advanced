let n = prompt("enter a number for factorial");
n = parseInt(n);
let fac = 1;
for (let i = 1; i <= n; i++) {
  fac = fac * i;
}
console.log(fac);
