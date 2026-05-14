let arr = [1, 2, 3, 4];
let newArr = arr.reduce((acc, el) => acc + el);
console.log(newArr);
let numbers = [1, 2, 50, -30, 10, 1000];
let maxNumber = numbers.reduce((max, el) => {
  if (el > max) {
    return el;
  } else {
    return max;
  }
});
console.log(maxNumber);
let numbers1 = [1, 2, 50, -30, 10, 1000];
let minNumber = numbers1.reduce((min, el) => {
  if (el < min) {
    return el;
  } else {
    return min;
  }
});
console.log(minNumber);
