const removeDups = function (arr) {
  let pointer = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[pointer - 1]) {
      arr[pointer] = arr[i];
      pointer++;
    }
  }
  return [pointer, arr];
};

const arr = [1, 2, 3, 3, 3, 3, 5];
console.log(removeDups(arr));
