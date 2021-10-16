const subsets = function (str, curr = "", index = 0) {
  if (index === str.length) {
    console.log(curr);
    return;
  }

  subsets(str, curr, index + 1);
  subsets(str, curr + str[index], index + 1);
};

const str = "ABC";
console.log(subsets(str));
