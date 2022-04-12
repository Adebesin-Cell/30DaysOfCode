const checkForPalindrome = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];

    const reversed = str.split("").reduce((acc, char) => {
      return char + acc;
    }, "");

    newArr.push(reversed === str);
  }

  return newArr;
};

console.log(
  checkForPalindrome(["racecar", "abcd", "bab", "kala", "madam", "carac"])
);
