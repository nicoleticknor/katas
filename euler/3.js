function primer(num) {
  for (let i = 2; num != 1; i++) {
    while (num % i === 0) {
      num = num / i;
      // console.log(i);
      if (num === 1) {
        console.log(i);
      }
    }
  }
}

primer(600851475143);
