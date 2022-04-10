const sumofArray = function (arr) {
  return arr.reduce((val, acc) => {
    return val + acc;
  }, 0);
};

console.log(sumofArray([1, 2, 3, 4]));
