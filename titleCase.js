function titleCase(str) {
  let word = str.toLowerCase().split(" ");
  let result = word.map((wrd) => {
    return wrd[0].toUpperCase() + wrd.slice(1);
  });
  return result.join(" ");
}
console.log(titleCase("I'am a little tea pot"));
