let marks = 75;
//logical AND
if (marks >= 33 && marks >= 80) {
  console.log("Pass");
  console.log("A+");
}
//logical OR
if (marks >= 33 || marks >= 80) {
  console.log("Pass");
  console.log("A+");
}
//logical NOT
if (!(marks >= 33 || marks >= 80)) {
  console.log("Pass");
  console.log("A+");
}

if (!(marks < 33)) {
  console.log("Pass");
  console.log("A+");
}

//all logical operators
if ((marks > 33 && marks <= 80) || !flase) {
  console.log("Pass");
}
