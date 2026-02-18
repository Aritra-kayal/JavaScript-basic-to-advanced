const favMovie = "Avatar";
let guess = prompt("Enter movie name:");
while (guess != favMovie && guess != "quit") {
  console.log("wrong");
  guess = prompt("Enter movie name:");
}
// console.log(`you have guessed right movie that is ${guess}`);
// alert(`you have guessed right movie that is ${guess}`);
if (guess == favMovie) {
  console.log(`you have guessed the right movie that is ${guess}`);
} else {
  console.log(`you have not guessed the right movie and you have quit`);
}
