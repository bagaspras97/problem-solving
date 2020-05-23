function largestOfFour(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    let largest = arr[i].sort((a, b) => {
      return b - a;
    });
    result.push(largest[0]);
  }
  return result;
}

console.log(
  largestOfFour([
    [10, 5, 32, 71],
    [4, 2, 5, 1],
    [82, 41, 5],
    [1000, 30, 2, 57],
  ])
);
