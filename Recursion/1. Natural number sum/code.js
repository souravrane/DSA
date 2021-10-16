const naturalSum = function (num) {
  if (num === 0) return 0;
  return num + naturalSum(num - 1);
};

const num = 10000;
console.log(naturalSum(num));
