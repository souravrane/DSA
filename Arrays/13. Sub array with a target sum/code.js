const subarrayWithTarget = function (arr, target) {
  let start = 0,
    currSum = arr[0];
  for (let end = 1; end < arr.length; end++) {
    while (currSum > target && start < end) {
      currSum -= arr[start];
      start++;
    }
    if (currSum === target) return true;
    currSum += arr[end];
    console.log({ currSum });
  }

  while (currSum > target) {
    currSum -= arr[start];
    start++;
  }
  return currSum === target;
};

const arr = [1, 4, 20, 3, 10, 5],
  target = 33;
console.log(subarrayWithTarget(arr, target));
