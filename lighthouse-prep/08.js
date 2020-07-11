const repeatNumbers = function (data) {
  // Put your solution here
  let result = '';
  data.forEach((array, index) => {
    for (let x = 0; x < array[1]; x++) {
      result += array[0]
    }
    if (index < data.length - 1) {
      result += ', '
    }
  })
  return result;
};

console.log(repeatNumbers([[1, 10]])); // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // 10101010, 343434343434, 9292
