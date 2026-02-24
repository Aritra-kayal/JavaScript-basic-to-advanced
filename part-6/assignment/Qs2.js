function uniqueCharacters(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (ans.indexOf(str[i]) == -1) {
      ans = ans + str[i];
    }
  }
  return ans;
}
console.log(uniqueCharacters("abcdabcdefgggh"));
