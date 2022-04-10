function identify(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) return [i, j];
    }
  }

  return [-1, -1];
}

console.log(identify([2, 3, 4, 4, 0, 5], 9));
console.log(identify([2, -3, 1, -5], -3));
