let a = 3;
let b = 4;
let c = 5;
if (a > b) {
  if (a > c) {
    console.log(`largest number is ${a}`);
  } else {
    console.log(`largest number is ${c}`);
  }
} else {
  if (b > c) {
    console.log(`largest number is ${b}`);
  } else {
    console.log(`largest number is ${c}`);
  }
}
