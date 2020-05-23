function destroyer(arr) {
  let args = Array.from(arguments);
  args.splice(0, 1);
  let targets = args;
  let result = [];

  for (num of arr) {
    if (targets.indexOf(num) == -1) {
      result.push(num);
    }
  }

  return result;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function destroyer(arr) {
  let args = Array.from(arguments);
  args.splice(0, 1);
  let targets = args;

  return arr.filter((num) => {
    return !targets.includes(num);
  });
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
