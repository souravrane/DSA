const killJosephus = function (n, k) {
  if (n === 1) return 0;
  return (killJosephus(n - 1, k) + k) % n;
};

const n = 7,
  k = 3;

console.log(killJosephus(n, k));
