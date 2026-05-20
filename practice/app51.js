let start = prompt("Enter starting value");
start = parseInt(start);
let end = prompt("Enter ending value");
end = parseInt(end);
let number = Math.floor(Math.random() * (end - start + 1)) + start;
let guess = prompt("guess: ");
while (guess != number) {
  if (guess == "quit") {
    console.log("You are quiting the game");
    break;
  }
  if (guess > number) {
    alert("you have enterde large number plese enter small number");
  }
}
