function fizzBuzzProMax(arr) {
  const chunked = [];

  for (let i = 0; i < arr.length; i++) {
    let subarray = [];

    for (let j = 1; j <= arr[i]; j++) {
      if (j % 3 === 0 && j % 5 === 0) {
        subarray.push("fizzbuzz");
      } else if (j % 3 === 0) {
        subarray.push("fizz");
      } else if (j % 5 === 0) {
        subarray.push("buzz");
      } else {
        subarray.push(j);
      }
    }

    chunked.push([subarray]);
  }

  return chunked;
}

console.log(fizzBuzzProMax([2, 3, 4, 6, 7, 8]));
console.log(fizzBuzzProMax([15, 4]));
console.log(fizzBuzzProMax([2, 3, 4]));
console.log(fizzBuzzProMax([2, 3, 4, 6]));
console.log(fizzBuzzProMax([2, 3, 4, 6, 7, 8]));
console.log(fizzBuzzProMax([2, 7, 8, 9, 10]));
console.log(fizzBuzzProMax([15]));
