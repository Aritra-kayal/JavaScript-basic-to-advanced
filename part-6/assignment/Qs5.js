function randomNumber(start, end) {
  let number = Math.floor(Math.random() * (end - start + 1)) + start;
  return number;
}
let start = 100;
let end = 200;
console.log(randomNumber(start, end));
