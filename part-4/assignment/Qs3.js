let n = prompt("enter a number");
n = parseInt(n);
let r = 0;
let sum = 0;
while (n > 0) {
  r = n % 10;
  sum = sum + r;
  n = Math.floor(n / 10);
}
console.log(`sum of digit:${sum}`);
