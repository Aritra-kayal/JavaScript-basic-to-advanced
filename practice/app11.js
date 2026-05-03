let myFavMovie = "KGF";
let guess = prompt("Guess my favourit movie: ");
while (myFavMovie != guess && guess != "quit") {
  alert("Wrong,you can guess again");
  guess = prompt("Guess my favourit movie: ");
}
if (guess == myFavMovie) {
  alert(`you have guessed the right movie that is ${myFavMovie}`);
} else {
  alert(`you have not guessed right movie name and you have quit the game`);
}

// let myFavMovie = "KGF";
// let guess = prompt("Guess my favourit movie: ");
// while (guess != myFavMovie) {
//   if (guess == "quit") {
//     break;
//   }
//   alert("Wrong,you can guess again");
//   guess = prompt("Guess my favourit movie: ");
// }
// if (guess == myFavMovie) {
//   alert(`you have guessed the right movie that is ${myFavMovie}`);
// } else {
//   alert(`you have not guessed right movie name and you have quit the game`);
// }
