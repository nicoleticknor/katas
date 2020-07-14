const sumOfSquares = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += Math.pow(i, 2);
  }
  return result;
};

const squareOfSums = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  result = Math.pow(result, 2);
  return result;
};

const sOSq = sumOfSquares(100);
const sqOS = squareOfSums(100);

console.log(sqOS - sOSq);
