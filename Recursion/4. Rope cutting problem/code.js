const cutTheRope = function (n, a, b, c) {
  if (n === 0) return 0;
  if (n < 0) return -1;

  let cuts = Math.max(
    cutTheRope(n - a, a, b, c),
    cutTheRope(n - b, a, b, c),
    cutTheRope(n - c, a, b, c)
  );

  if (cuts === -1) return -1;
  return cuts + 1;
};

const n = 5,
  a = 1,
  b = 3,
  c = 5;
console.log(cutTheRope(n, a, b, c));
