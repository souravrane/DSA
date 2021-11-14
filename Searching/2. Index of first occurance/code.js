const firstOccurance = function (arr, n, x) {
  let low = 0,
    high = n - 1,
    mid = Math.floor((low + high) / 2);

  while (lwo <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      high = mid - 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] != arr[mid]) return mid;
      else high = mid - 1;
    }
  }
  return -1;
};

const arr = [5, 10, 10, 20, 20],
  x = 10;
console.log(firstOccurance(arr, arr.length, x));
