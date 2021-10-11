const twoOddOccuringDigits = function (arr, n) {
  let XOR = 0,
    digit1 = 0,
    digit2 = 0;

  for (let i = 0; i < n; i++) {
    XOR = XOR ^ arr[i];
  }

  let lastSetBit = XOR & ~(XOR - 1); // most important step of the algorithm

  for (i = 0; i < n; i++) {
    if ((arr[i] & lastSetBit) != 0) {
      digit1 = digit1 ^ arr[i];
    } else {
      digit2 = digit2 ^ arr[i];
    }
  }
  return [digit1, digit2];
};

const arr = [1, 1, 1, 1, 2, 2, 3, 4, 5, 5];
console.log(twoOddOccuringDigits(arr, arr.length));
