const objectify = function (arr) {
  let str;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    str = arr[i].replaceAll("/", " ").split(" ");
    newArr.push({
      name: str[0],
      age: str[1],
      level: `${str[2]} ${str[3]}`,
    });
  }

  return newArr;
};

console.log(objectify(["seun/23/100 level", "been/23/100 level"]));
