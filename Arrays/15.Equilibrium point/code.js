const equilibriumPoint = function (arr, n) {
  let sum = arr.reduce((a, b) => a + b);
  let leftSum = 0;
  for (let i = 0; i < n; i++) {
    if (leftSum === sum - arr[i]) {
      return true;
    }
    leftSum += arr[i];
    sum -= arr[i];
  }
  return false;
};

const arr = [3, 8, 2, -9, 4, 6];
console.log(equilibriumPoint(arr, arr.length));
