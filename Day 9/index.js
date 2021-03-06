const generatePascalTriangle = function (numRows) {
  if (typeof numRows !== "number") return "input is not a number";
  else {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
      let arr = [];
      for (let col = 0; col < row; col++) {
        if (col === 0 || col === row - 1) {
          arr.push(1);
        } else {
          arr.push(result[row - 2][col - 1] + result[row - 2][col]);
        }
      }
      result.push(arr);
    }
    return result;
  }
};

console.log(generatePascalTriangle("6"));
console.log(generatePascalTriangle(6));
