let guess = prompt("Enter movie name:");
const favMovie = "Avatar";
while (guess != favMovie && guess != "quit") {
  console.log("wrong");
  guess = prompt("Enter movie name:");
}
// console.log(`you have guessed right movie that is ${guess}`);
alert(`you have guessed right movie that is ${guess}`);
