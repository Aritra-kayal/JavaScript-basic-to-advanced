function printSomething(fun, n) {
  for (let i = 1; i <= n; i++) {
    fun();
  }
}
printSomething(function () {
  console.log("Hello");
}, 3);
