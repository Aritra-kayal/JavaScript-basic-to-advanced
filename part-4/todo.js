let todo = [];

let req = prompt("plese enter your request");
// console.log(req);
while (true) {
  if (req == "quit") {
    console.log("quitting app");
    break;
  }
  if (req == "list") {
    console.log("____________________");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("_____________________");
  } else if (req == "add") {
    let task = prompt("plese enter the task you want to add");
    todo.push(task);
    console.log("task added");
  } else if (req == "delete") {
    let index = prompt(
      "plese enter the index of the item which one you want to delete ",
    );
    todo.splice(index, 1);
    console.log("task deleted");
  } else {
    console.log("wrong request");
  }
  req = prompt("plese enter your request");
}
