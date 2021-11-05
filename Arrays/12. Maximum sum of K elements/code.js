const maxSumofK = function (arr, k) {
  let curr_sum = 0;
  for (let i = 0; i < k; i++) {
    curr_sum += arr[i];
  }
  let max_sum = curr_sum;
  for (let j = k; j < arr.length; j++) {
    curr_sum += arr[j] - arr[j - k];
    max_sum = Math.max(max_sum, curr_sum);
  }

  return max_sum;
};

const arr = [1, 8, 30, -5, 20, 7],
  k = 3;

console.log(maxSumofK(arr, k));
