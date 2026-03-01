let min = Math.min(1, 2, 3, 4, 0);
console.log(min);

let arr = [1, 2, 3, 4, 0];
let minVal = Math.min(arr[0], arr[1], arr[2], arr[3], arr[4]);
console.log(minVal);

let arr1 = [1, 2, 3, 4, 0];
function min1(arr) {
  let minVal = 0;
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return minVal;
}
console.log(min1(arr1));

//spread
let arrNum = [1, 2, 3, 4, 5, 0, -1];
let minValue = Math.min(...arrNum);
console.log(minValue);
let maxValue = Math.max(...arrNum);
console.log(maxValue);
