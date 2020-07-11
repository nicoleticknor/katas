const calculateChange = function (total, cash) {
  // Your code here
  let change = cash - total;
  let resultObj = {}
  const changeLoop = (input) => {
    if (input >= 1000) {
      if (resultObj['tenDollar']) {
        resultObj['tenDollar'] += 1;
      } else resultObj['tenDollar'] = 1
      change -= 1000;
    } else if (input >= 200) {
      if (resultObj['twoDollar']) {
        resultObj['twoDollar'] += 1;
      } else resultObj['twoDollar'] = 1
      change -= 200;
    } else if (input >= 100) {
      if (resultObj['oneDollar']) {
        resultObj['oneDollar'] += 1;
      } else resultObj['oneDollar'] = 1
      change -= 100;
    } else if (input >= 25) {
      if (resultObj['quarter']) {
        resultObj['quarter'] += 1;
      } else resultObj['quarter'] = 1
      change -= 25;
    } else if (input >= 10) {
      if (resultObj['dime']) {
        resultObj['dime'] += 1;
      } else resultObj['dime'] = 1
      change -= 10;
    } else if (input >= 5) {
      if (resultObj['nickel']) {
        resultObj['nickel'] += 1;
      } else resultObj['nickel'] = 1
      change -= 5;
    } else if (input >= 1) {
      if (resultObj['penny']) {
        resultObj['penny'] += 1;
      } else resultObj['penny'] = 1
      change -= 1;
    }
  }
  while (change > 0) {
    changeLoop(change)
  }
  return resultObj;
};

console.log(calculateChange(1787, 2000));
// { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000));
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000));
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
