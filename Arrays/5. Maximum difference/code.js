const maxDifference = function (arr, n) {
  let maxDiff = arr[1] - arr[0];
  let minValue = arr[0];
  for (let i = 0; i < n; i++) {
    maxDiff = Math.max(maxDiff, arr[i] - minValue);
    minValue = Math.min(minValue, arr[i]);
  }
  return maxDiff;
};

const arr = [2, 3, 4, 10, 1, 6, 8];
console.log(maxDifference(arr, arr.length));
