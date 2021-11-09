const maxAppearingNum = function (L, R, n) {
  const arr = new Array(1000);
  arr.fill(0);

  for (let i = 0; i < n; i++) {
    arr[L[i]]++;
    arr[R[i] + 1]--;
  }

  let max = arr[0],
    element = 0;

  for (let i = 1; i < 1000; i++) {
    arr[i] += arr[i - 1];
    if (max < arr[i]) {
      max = arr[i];
      element = i;
    }
  }

  return element;
};

const L = [1, 2, 3],
  R = [3, 5, 7];

console.log(maxAppearingNum(L, R, L.length));
