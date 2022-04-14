const mergeSortTwoArrays = function (arr1, arr2) {
  const arr = [...arr1, ...arr2];

  let done = false;

  while (!done) {
    done = true;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
};

console.log(mergeSortTwoArrays([1, 4, 7, 8], [2, 3, 4]));
