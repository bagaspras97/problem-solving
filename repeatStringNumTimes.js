function repeatStringNumTimes(str, num) {
  let result = "";
  for (i = 0; i < num; i++) {
    result = result + str;
  }
  return result;
}
console.log(repeatStringNumTimes("abc", 3));

function repeatStringNumTimes(str, num) {
  if (num === 0) return "";

  if (num === 1) return str;

  return str + repeatStringNumTimes(str, num - 1);
}
console.log(repeatStringNumTimes("abc", 3));
