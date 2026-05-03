let todo = [];
let req = prompt("Enter your request: ");
while (req != "quit") {
  if (req == "list") {
    console.log("____________________");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("____________________");
  } else if (req == "add") {
    let task = prompt("Enter your task: ");
    todo.push(task);
  } else if (req == "del") {
    let delIn = prompt("Enter your index");
    todo.splice(delIn, 1);
  } else {
    alert("Wrong❌ request");
  }
  req = prompt("Enter your request: ");
}
if (req == "quit") {
  alert("You are quiting the app");
}
