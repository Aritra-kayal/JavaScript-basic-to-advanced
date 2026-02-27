function getMin(arr) {
  let ans = arr.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
  return ans;
}
let arr = [10, 20, 30, 40, 50, 60];
console.log(getMin(arr));
