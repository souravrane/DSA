const secondLargest = function (arr) {
  let largest = arr[0],
    secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest) {
      if (secondLargest === -1 || arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
  }

  return [largest, secondLargest];
};

const arr = [9, 2, 3, 4, 5, 6, 7];
console.log(secondLargest(arr));
