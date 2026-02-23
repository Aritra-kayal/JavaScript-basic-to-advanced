let max = prompt("enter a number for the max range:");
const num = Math.floor(Math.random() * max) + 1;
let guess = prompt(`enter number between 1 to ${max}`);
//while(true){......something}
while (guess != num) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }
  if (guess == num) {
    console.log(`you have guessed right number and that is ${guess}`);
    break;
  } else if (guess > num) {
    guess = prompt("you have entered large number,please enter small number");
  } else {
    guess = prompt("you have entered small number,please enter large number");
  }
}
