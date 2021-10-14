// https://practice.geeksforgeeks.org/problems/find-first-set-bit-1587115620/1

const findFirstSetBit = function (num) {
  if (num === 0) return 0;
  let position = 1;
  while (n) {
    if (n % 2 === 0) {
      position++;
      n = n >> 1;
    } else {
      return position;
    }
  }
};

num = 5;
console.log(findFirstSetBit(num));
