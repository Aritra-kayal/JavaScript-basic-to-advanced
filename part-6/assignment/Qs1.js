function larger(n, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (n < arr[i]) {
      console.log(arr[i]);
    }
  }
}
console.log(larger(5, [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]));
