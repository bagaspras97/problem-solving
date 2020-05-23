function slasher(arr, howMany) {
  if (arr.length > 0) {
    arr.splice(0, howMany);
    return arr;
  }
  return [];
}
console.log(slasher([1, 2, 3], 2));
