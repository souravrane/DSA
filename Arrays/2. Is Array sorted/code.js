const isArraySorted = function (arr) {
  if (arr.length === 1) return true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
};

const arr = [4, 5, 6, 7, 8, 10];
console.log(isArraySorted(arr));
