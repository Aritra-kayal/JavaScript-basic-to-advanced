const favMovie = "Avatar";
let guess = prompt("enter movie name:");
while (guess != favMovie) {
  if (guess == "quit") {
    break;
  }
  console.log("wrong");
  guess = prompt("enter movie name:");
}
if (guess == "quit") {
  console.log("you have not guessed the right movie and you have quit");
} else {
  console.log(`you have guessed the right movie that is ${guess}`);
}
