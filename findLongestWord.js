function findLongestWord(str) {
  let words = str.split(" ");
  let result = "";
  for (word of words) {
    if (word.length > result.length) {
      result = word;
    }
  }
  return result;
}
console.log(findLongestWord("the quick brown fox jumped over the lazi dog"));
