const maxConsecutiveOnes = function (arr, n) {
  let result = 0,
    count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 1) count = 0;
    else {
      count++;
      result = Math.max(result, count);
    }
  }
  return result;
};

const arr = [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0];
console.log(maxConsecutiveOnes(arr, arr.length));
