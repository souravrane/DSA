const maxSubarraySum = function (arr, n) {
  let maxSumSoFar = arr[0];
  let result = arr[0];
  for (let i = 1; i < n; i++) {
    maxSumSoFar = Math.max(maxSumSoFar + arr[i], arr[i]);
    result = Math.max(maxSumSoFar, result);
  }
  return result;
};

const arr = [-3, 8, -2, 4, -5, 6];
console.log(maxSubarraySum(arr, arr.length));
