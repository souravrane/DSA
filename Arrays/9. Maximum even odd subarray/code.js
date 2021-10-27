// kadane's appraoch
function maxEvenOdd(arr, n) {
  let res = 1,
    currentLen = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] % 2 !== arr[i - 1] % 2) {
      currentLen++;
      res = Math.max(res, currentLen);
    } else {
      currentLen = 1;
    }
  }
  return res;
}

const arr = [5, 10, 20, 6, 3, 8];
console.log(maxEvenOdd(arr, arr.length));
