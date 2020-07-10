const conditionalSum = (values, condition) => {
  return values.reduce((acc, value) => {
    if (condition === "even") {
      if (value % 2 === 0) {
        acc += value
      }
    }
    else {
      if (value % 2 !== 0) {
        acc += value
      }
    }
    return acc;
  }, 0)
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0
