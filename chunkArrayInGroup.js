function chunkArrayInGroup(arr, size) {
  var result = [];

  for (i = 0; i <= arr.length; i++) {
    result.push(arr.splice(0, size));
  }
  return result;
}

console.log(chunkArrayInGroup([1, 2, 3, 4], 2));
