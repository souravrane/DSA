const digitalRoot = function (num) {
  if (num <= 9) return num;
  return digitalRoot(digitalRoot(Math.floor(num / 10) + (num % 10)));
};

const num = 99999;
console.log(digitalRoot(num));
