let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
let even = nums.filter((num) => {
  return num % 2 == 0;
});
console.log(even);
//OR
let nums1 = [2, 4, 1, 5, 6, 2, 7, 8, 9];
let even1 = nums1.filter((num) => num < 5);
console.log(even1);
