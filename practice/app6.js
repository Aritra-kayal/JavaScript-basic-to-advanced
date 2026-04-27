//2D array in JavaScript
let game = [
  ["X", null, "O"],
  [null, "X", null],
  ["O", null, "X"],
];
game[0][1] = "O";
game[1][2] = "X";
console.log(game);
