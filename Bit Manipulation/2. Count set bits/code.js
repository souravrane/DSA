// Time O(number of set bits)
const countSetBits = function (num) {
  let count = 0;
  while (num) {
    num = num & (num - 1);
    count++;
  }
  return count;
};

// Time O(1)
const memoizeSetBits = function () {
  let hashTable = new Array(256);
  hashTable[0] = 0;
  for (let i = 0; i < 256; i++) {
    table[i] = (n & 1) + table[Math.floor(i / 2)];
  }
};
const num = 7;
console.log(countSetBits(num));
console.log([] * 5);
