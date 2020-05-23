function getIndexToIns(arr, num) {
  arr.sort((a, b) => {
    return a - b;
  });
  for (i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

console.log(getIndexToIns([10, 2, 3], 15));
