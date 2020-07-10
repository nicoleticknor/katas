const sumLargestNumbers = (ary) => {

  const sorted = ary.sort((a, b) => a - b);
  return sorted[sorted.length - 1] + sorted[sorted.length - 2];

}

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //126

