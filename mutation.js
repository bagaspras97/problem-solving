function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  for (word of secondWord) {
    if (firstWord.indexOf(word) === -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["alien", "LIEN"]));
