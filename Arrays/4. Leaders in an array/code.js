const leaders = function (arr, n) {
  let leader = arr[n - 1];
  const result = [leader];
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > leader) {
      leader = arr[i];
      result.push(leader);
    }
  }
  return result;
};

const arr = [7, 10, 4, 10, 6, 5, 2];
console.log(leaders(arr, arr.length));
