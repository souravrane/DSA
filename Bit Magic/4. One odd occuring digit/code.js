const oneOddOccuringDigit = function (arr, n) {
  let XOR = 0;
  for (let i = 0; i < n; i++) {
    XOR = XOR ^ arr[i];
  }
  return XOR;
};

arr = [1, 2, 3, 1, 2, 3, 4];
console.log(oneOddOccuringDigit(arr, arr.length));
