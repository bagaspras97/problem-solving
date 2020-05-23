function reverseString(str) {
  let result = str.split("").reverse().join("");
  return result;
}

console.log(reverseString("hello"));
