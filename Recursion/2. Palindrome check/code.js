const isPalindrome = function (str, start, end) {
  if (start >= end) return true;
  return str[start] === str[end] && isPalindrome(str, start + 1, end - 1);
};

const str = "abcdcba";
console.log(isPalindrome(str, 0, str.length - 1));
