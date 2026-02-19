let todo = [];
let req = prompt("enter your request");
while (true) {
  if (req == "quit") {
    console.log("quitting the app");
    break;
  }
  if (req == "add") {
    let task = prompt("enter your todo");
    todo.push(task);
    console.log("task added");
  } else if (req == "list") {
    console.log("______________");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("______________");
  } else if (req == "delete") {
    let index = prompt("enter your index which one you want to delete");
    todo.splice(index, 1);
    console.log("deleted item");
  } else {
    console.log("wrong request");
  }
  req = prompt("enter your request");
}
