// these functions are defined in the searching folder
function firstOccurance(arr, n, x) {}
function lastOccurance(arr, n, x) {}

const totalOccurances = function (arr, n, x) {
  const first = firstOccurance(arr, n, x);
  if (first === -1) return 0;
  else return lastOccurance(arr, n, x) - first + 1;
};

const arr = [2, 4, 10, 10, 10, 10, 20],
  x = 10;

console.log(totalOccurances(arr, arr.length, x));
