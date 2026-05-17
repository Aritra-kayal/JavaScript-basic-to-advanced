function val(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(`You have given : ${args[i]}`);
  }
}
val(1, 2, 3, 4);
