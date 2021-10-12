// https://practice.geeksforgeeks.org/problems/rightmost-different-bit-1587115621/1

const rightmostDiffBit = function (n, m) {
  if (m === n) return -1;
  let position = 0;
  while (m || n) {
    if (m % 2 === n % 2) {
      position++;
      m = m >> 1;
      n = n >> 1;
    } else return position;
  }
};

const num1 = 5,
  num2 = 11;

console.log(rightmostDiffBit(num1, num2));
