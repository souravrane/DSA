const fibonacci = function (n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const num = 20;
console.log(fibonacci(num));
