function concatenation(arr) {
  let con = "";
  for (let i = 0; i < arr.length; i++) {
    con = con + arr[i];
  }
  return con;
}
let str = ["aritra", "rahul", "raj", "shradha", "aman"];
console.log(concatenation(str));
