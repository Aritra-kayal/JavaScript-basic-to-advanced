let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];
console.log(newArr);

let char = [..."hello"];
console.log(char);

let name1 = "aritra";
let arrName = [...name1];
console.log(arrName);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let nums = [...odd, ...even];
console.log(nums);
