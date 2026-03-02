function doubleAndReturnArgs(arr, ...arg) {
  let double = arg.map((el) => el * el);
  let newArr = [...arr, ...double];
  return newArr;
}
console.log(doubleAndReturnArgs([1, 2, 3, 4], 1, 2, 3, 4, 5));
