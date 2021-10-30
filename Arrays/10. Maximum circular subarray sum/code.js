const maxSubArraySum = function (arr, n) {
  let maxSum = arr[0],
    maxSumSoFar = arr[0];

  for (let i = 1; i < n; i++) {
    maxSumSoFar = Math.max(arr[i], maxSumSoFar + arr[i]);
    maxSum = Math.max(maxSum, maxSumSoFar);
  }

  return maxSum;
};

const maxCircularSubArraySum = function (arr, n) {
  const maxNormalArr = maxSubArraySum(arr, n);
  if (maxNormalArr < 0) return maxNormalArr;
  let arrSum = 0;
  for (let i = 0; i < n; i++) {
    arrSum += arr[i];
    arr[i] = -arr[i];
  }
  const maxCircularArr = arrSum + maxSubArraySum(arr, n); // here kadane's algo calculates min sub array sum, which is then subtracted from the total array sum
  return Math.max(maxNormalArr, maxCircularArr);
};

const arr = [8, -4, 3, -5, 4];
console.log(maxCircularSubArraySum(arr, arr.length));
