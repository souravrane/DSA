const minimumFlips = function (arr, n) {
  const result = []; // using this array to store result as idk how to print on the same line in JS
  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] !== arr[0]) {
        result.push(i);
      } else result.push(i - 1);
    }
  }
  if (arr[n - 1] !== arr[0]) {
    result.push(n - 1);
  }
  for (let j = 0; j < result.length - 1; j += 2) {
    console.log(`From ${result[j]} to ${result[j + 1]}`);
  }
};
arr = [0, 0, 1, 1, 0, 0, 1, 1, 0, 1];
console.log(minimumFlips(arr, arr.length));
