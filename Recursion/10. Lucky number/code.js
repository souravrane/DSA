const isLucky = function (num, nukingPos = 2) {
  if (nukingPos > num) return true;
  if (num % nukingPos === 0) return false;

  const positionDrop = num - Math.floor(num / nukingPos);
  return isLucky(positionDrop, nukingPos + 1);
};

const num = 73;
console.log(isLucky(num));
