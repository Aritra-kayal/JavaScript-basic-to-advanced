let start = prompt("Enter starting value");
start = parseInt(start);
let end = prompt("Enter ending value");
end = parseInt(end);
let number = Math.floor(Math.random() * (end - start + 1)) + start;
let guess = prompt("guess: ");
while (guess != number) {
  if (guess == "quit") {
    alert("You are quiting the game");
    break;
  } else if (guess > number) {
    alert("you have enterde large number please enter small number");
    guess = prompt("guess: ");
  } else if (guess < number) {
    alert("you have entered small number please enter large number");
    guess = prompt("guess: ");
  } else {
    alert("wrong guess");
    guess = prompt("guess: ");
  }
}
if (guess == number) {
  alert(`you have guess the right number that is ${number}`);
}
