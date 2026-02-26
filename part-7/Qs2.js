let id = setInterval(() => {
  console.log("Hellow World");
}, 2000);
setTimeout(() => {
  clearInterval(id);
}, 10000);
