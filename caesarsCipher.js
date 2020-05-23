function rot13(str) {
  let result = "";
  for (i = 0; i < str.length; i++) {
    let asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77) {
      result += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      result += String.fromCharCode(asciiNum - 13);
    }
  }
  return result;
}
console.log(rot13("SERR PBQR PNZC"));

//return FREECODECAMP
