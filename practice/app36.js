let number = [1, 2, 3, 4, 5, 6, 7, 8];
let even = number.filter((n) => {
  return n % 2 == 0;
});
console.log(even);
let odd = number.filter((n) => n % 2 != 0);
console.log(odd);
