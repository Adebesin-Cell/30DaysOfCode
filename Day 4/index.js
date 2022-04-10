function stringify(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const { name, age, level } = arr[i];
    const stringy = `${name}/${age}/${level}`;
    newArr.push(stringy);
  }

  return newArr;
}

console.log(
  stringify([
    { name: "seun", age: 23, level: "100 level" },
    { name: "seun", age: 23, level: "100 level" },
  ])
);
