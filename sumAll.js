function sumAll(num) {
  let start = Math.min(num[0], num[1]);
  let end = Math.max(num[0], num[1]);
  let result = 0;

  for (i = start; i <= end; i++) {
    result += i;
  }
  return result;
}
console.log(sumAll([10, 5]));

//return 45
