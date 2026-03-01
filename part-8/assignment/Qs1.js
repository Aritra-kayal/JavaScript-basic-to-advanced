let arr = [1, 2, 3, 4, 5];
let square = arr.map((el) => Math.pow(el, 2));
let sum = square.reduce((acc, el) => acc + el);
let avg = sum / arr.length;
console.log(avg);
