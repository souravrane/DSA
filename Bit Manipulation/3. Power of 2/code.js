const isPowerOf2 = function (num) {
  if ((num & (num - 1)) === 0) return true;
  return false;
};

const num = 9;
console.log(isPowerOf2(num));
