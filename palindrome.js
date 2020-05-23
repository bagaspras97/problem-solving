function palindrome(str) {
  let result = "";
  let testPalindrome = str.split("").reverse().join("");
  if (str == testPalindrome) {
    result = "sting is palindrome";
  } else {
    result = "str is not palindrome";
  }
  return result;
}

console.log(palindrome("eye"));
