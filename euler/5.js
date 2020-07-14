const divider = (num) => {
  let result = 0;
  for (let i = 1; i <= 10; i++) {
    if (num % i === 0) {
      result += 1;
    }
  }
  if (result === 10) {
    console.log("num:", num);
    return;
  } else {
    num = num + 2;
    divider(num);
  }
};

console.log(divider(2));
