//output will be 5
function outerFunction() {
  let x = 5;
  let y = 6;
  function innerFunction() {
    console.log(x);
  }
  innerFunction();
}
outerFunction();
//output will be 5
function outerFunction() {
  function innerFunction() {
    console.log(x);
  }
  let x = 5;
  let y = 6;
  innerFunction();
}
outerFunction();
//error
function outerFunction() {
  function innerFunction() {
    let a = 10;
  }
  innerFunction();
  console.log(a);
}
outerFunction();
//error
function outerFunction() {
  let x = 5;
  let y = 6;
  function innerFunction() {
    console.log(x);
  }
}
outerFunction();
innerFunction();
