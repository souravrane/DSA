const subsetSum = function (arr, n, sum) {
  if (n === 0) {
    return sum === 0 ? 1 : 0;
  }

  return subsetSum(arr, n - 1, sum) + subsetSum(arr, n - 1, sum - arr[n - 1]);
};

const arr = [10, 2, 5, 11, 45, 23, 15],
  sum = 15;
console.log(subsetSum(arr, arr.length, sum));
