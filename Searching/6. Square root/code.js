const squareRoot = function (n) {
  let low = 0,
    high = n - 1,
    res = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midSquare = mid * mid;
    if (midSquare === n) {
      return mid;
    } else if (midSquare > n) {
      high = mid - 1;
    } else {
      low = mid + 1;
      res = mid;
    }
  }
  return res;
};

const n = 10;
console.log(squareRoot(n));
