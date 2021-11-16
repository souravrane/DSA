const countOnes = function (arr, n) {
  let low = 0,
    high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === 0) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] === 0) {
        return n - mid;
      } else {
        high = mid - 1;
      }
    }
  }

  return 0;
};

const arr = [0, 0, 0, 1, 1, 1, 1, 1];
console.log(countOnes(arr, arr.length));
