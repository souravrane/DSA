const lastOccurance = function (arr, n, x) {
  let low = 0,
    high = n - 1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      high = mid - 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      if (mid === n - 1 || arr[mid] !== arr[mid + 1]) {
        return mid;
      } else low = mid + 1;
    }
  }

  return -1;
};

const arr = [5, 10, 10, 10, 20, 20],
  x = 10;

console.log(lastOccurance(arr, arr.length, x));
