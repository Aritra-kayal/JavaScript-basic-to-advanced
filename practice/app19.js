let max = prompt("Enter a mx number for your range: ");
max = parseInt(max);
let number = Math.floor(Math.random() * max) + 1;
let guess = prompt(`Guess a number (1 to ${max}):`);
while (guess != number) {
  if (guess == "quit") {
    alert("You are quiting the game");
    break;
  } else if (guess > number) {
    alert("You have entered big number try to enter small number");
  } else if (guess < number) {
    alert("You have entered small number try to enter large number");
  }
  guess = prompt(`Guess a number (1 to ${max}):`);
}
if (guess == number) {
  alert(`You have guessed right number that is ${number}`);
}
