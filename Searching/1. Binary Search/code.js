const binarySearch = function (arr, n) {
  let low = 0,
    high = n - 1,
    mid = Math.floor((low + high) / 2);

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (arr[mid] < x) {
      low = mid + 1;
    } else if (arr[mid] > x) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const arr = [10, 20, 30, 40, 50, 60, 70];
console.log(binarySearch(arr, arr.length));
