// https://practice.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1

const isKthBitSet = function (num, k) {
  while (k) {
    num = num >> 1;
    k--;
  }
  return num % 2 === 1;
};

const num = 4,
  k = 2;
console.log(isKthBitSet(num, k));
