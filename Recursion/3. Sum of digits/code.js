const sumOfDigits = function (num) {
  if (num === 0) return 0;
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
};

const num = 21;
console.log(sumOfDigits(num));
