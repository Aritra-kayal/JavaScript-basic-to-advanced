function multiplicationTable(n) {
  console.log(`multiplication table of ${n}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n}x${i}=${n * i}`);
  }
}
multiplicationTable(5);
