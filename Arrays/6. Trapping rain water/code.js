const trapRainWater = function (arr, n) {
  let result = 0;
  const lmax = new Array(n),
    rmax = new Array(n);

  lmax[0] = arr[0];
  rmax[n - 1] = arr[n - 1];

  for (let i = 1; i < n; i++) {
    lmax[i] = Math.max(arr[i], lmax[i - 1]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rmax[i] = Math.max(arr[i], rmax[i + 1]);
  }

  for (let i = 1; i < n - 1; i++) {
    result += Math.min(lmax[i], rmax[i]) - arr[i];
  }
  return result;
};

const arr = [5, 0, 6, 2, 3];
console.log(trapRainWater(arr, arr.length));
