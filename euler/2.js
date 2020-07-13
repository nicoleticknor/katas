let firstNum = 1;
let secondNum = 2;
let temp = 0;
let result = 2;

while (firstNum + secondNum < 4000000) {
  temp = firstNum + secondNum;
  firstNum = secondNum;
  secondNum = temp;
  if (temp % 2 === 0) {
    result += temp;
  }
  console.log(result);
}
