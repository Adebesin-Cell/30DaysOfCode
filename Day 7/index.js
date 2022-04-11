const sortArray = function (arr) {
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

console.log(sortArray([0, 5, 3, 2, 1, 7]));
