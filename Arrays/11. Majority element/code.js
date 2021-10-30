// Moore's voting algorithm
const majorityElement = function (arr, n) {
  let majority = 0,
    count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[majority] === arr[i]) count++;
    else count--;
    if (count === 0) {
      majority = i;
      count = 1;
    }
  }

  count = 0;
  for (let j = 0; j < n; j++) {
    if (arr[majority] === arr[j]) count++;
  }

  if (count <= Math.floor(n / 2)) return -1;
  return arr[majority];
};

const arr = [6, 8, 4, 8, 8];
console.log(majorityElement(arr, arr.length));
